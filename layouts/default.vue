<template>
  <div>
    <Menu />
    <MenuTop />
    <MenuBottom />
    <div class="nuxt-content">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Menu from '../components/Menu'
import MenuTop from '../components/Mobile-menu-top'
import MenuBottom from '../components/Mobile-menu-bottom'
export default {
  components: {
    Menu,
    MenuTop,
    MenuBottom
  }
}
</script>

<style lang="sass">

</style>
