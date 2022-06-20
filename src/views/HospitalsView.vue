<template>
  <MainMenu />
</template>

<script>
// @ is an alias to /src
import MainMenu from '@/components/MainMenu.vue'
import "../scss/style.scss"
export default {
  name: 'MainMenu',
  components: {
    MainMenu
  }
}
</script>