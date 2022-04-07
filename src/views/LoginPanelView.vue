<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginPane from '@/components/LoginPanel.vue'

export default {
  name: 'menu',
  components: {
    MainMenu
  }
}
</script>