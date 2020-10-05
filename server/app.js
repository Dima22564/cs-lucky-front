const app = require('express')()
// eslint-disable-next-line import/order
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const axios = require('axios')

// const GAME_NO_PLAYERS = 0
const GAME_PREPARE = 0
const GAME_START = 1
const GAME_END = 2

let AUTO_WITHDRAW = {}

axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

let TIME_TO_START = 0
let _now = 0
let _i = 0
let MULTIPLIER = 0.00

let GameStatus = GAME_PREPARE

io.on('connection', (socket) => {
  console.log('connected')

  socket.emit('newMessage', {
    text: 'sfdfedf'
  })

  socket.on('m', async () => {
    if (GameStatus !== GAME_PREPARE) {
      return socket.emit('errorBet', 'Game started')
    }
    await getGame()
  })

  socket.on('myNewBet', (data) => {
    io.sockets.emit('newBetClient', data)
    const autoWithdraw = data.autoWithdraw
    console.log(data)
    const bet = {
      userId: data.user.id,
      autoWithdraw: data.autoWithdraw
    }
    if (!(autoWithdraw in AUTO_WITHDRAW)) {
      AUTO_WITHDRAW[autoWithdraw] = []
    }
    AUTO_WITHDRAW[autoWithdraw].push(bet)
    console.log(AUTO_WITHDRAW)
  })
})

const startTimer = () => {
  TIME_TO_START = 9.00
  io.sockets.emit('timerToStart', TIME_TO_START)

  const timerToStart = setInterval(async () => {
    if (TIME_TO_START.toFixed(2) === '1.00') {
      //  request to server to generate multiplier
      // Когда осталась 1 секунда до начала, делаем запрос на сервер для генерации коэффициента коэффициент
      await setMultiplier(GAME_START)
      await console.log('Start timer ')
    }
    if (TIME_TO_START.toFixed(2) <= 0.00) {
      clearInterval(timerToStart)
      startGame()
    }

    TIME_TO_START -= 0.1
  }, 100)
}

// Запрос на сервер для генерации коэффициента
const setMultiplier = async (status) => {
  try {
    const sendData = {}
    sendData.status = status
    const { data } = await axios.post(`${axios.defaults.baseURL}/game/multiplier`, sendData)
    if (status === GAME_START) {
      MULTIPLIER = data.data.multiplier
    }
    console.log('setMultiplier ' + data)
  } catch (e) {
    console.log(e)
  }
}

// Начинаем игру
const startGame = () => {
  const multi = MULTIPLIER
  let _nowOld = -1
  _i = 0
  _now = 0

  io.sockets.emit('stopTimer')

  io.sockets.emit('startGame', {
    _i,
    _now
  })

  // Запускаем интервал
  const START_GAME_INTERVAL = setInterval(async () => {
    _i++
    _now = parseFloat((Math.E) ** (0.00006 * _i * 1000 / 20))

    if (_nowOld.toFixed(2).toString() !== _now.toFixed(2).toString()) {
      _nowOld = _now
      if (_now >= multi) {
        clearInterval(START_GAME_INTERVAL)
        console.log('Start game ')
        io.sockets.emit('gameCrashed', MULTIPLIER.toFixed(2).toString())
        await crashBets()
      } else {
        for (const [key, value] of Object.entries(AUTO_WITHDRAW)) {
          if (Number(key) === parseFloat(_now.toFixed(2))) {
            if (typeof AUTO_WITHDRAW[key] !== 'undefined') {
              await withdrawAuto(key, AUTO_WITHDRAW[key])
              console.log('auto ' + key)
            }
          }
        }
        //  TODO auto withdraw
      }
    }
  }, 50)
}

const withdrawAuto = async (multiplier, users) => {
  const data = {
    'users': JSON.stringify(users),
    multiplier
  }
  try {
    const result = await axios.post(`${axios.defaults.baseURL}/auto-take`, data)
    data.status = 1
    io.sockets.emit('successAutoTake', result.data)
  } catch (e) {
    console.log(e)
  }
}

const crashBets = async () => {
  try {
    const result = await axios.post(`${axios.defaults.baseURL}/game/crash-bets`)
    await setMultiplier(GAME_END)
    AUTO_WITHDRAW = {}

    io.sockets.emit('crashBets', result.data.data)
    console.log('Bets crashed')

    setTimeout(() => {
      _i = 0
      _now = 0
      getGame()
      console.log('Game started again')
    }, 3000)
  } catch (e) {
    console.log(e)
  }
}

// Получаем игру, при загрузке сервера.
// Если игры нет, то создаем новую, если есть продолжаем прошлую
const getGame = async () => {
  try {
    const { data } = await axios.post(`${axios.defaults.baseURL}/game/get`)

    //  TODO get bets
    //  TODO get history
    if (data.data.game.status === GAME_PREPARE) {
      // Если статус null, т.е. идет обратный отсчет до начала игры, запускаем таймер
      startTimer()
    }
    if (data.data.game.status === GAME_START) {
      // Если статус 1, т.е. игра началась, то начинаем игру
      startGame()
    }
  } catch (e) {
    console.log(e)
    setTimeout(async () => {
      await getGame()
    }, 3000)
  }
}

// Начинаем игру со стартом сервера
// getGame()

module.exports = {
  app,
  server: http
}
