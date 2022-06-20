<template>
  <LoginPanel />
</template>

<script>
// @ is an alias to /src
import LoginPanel from '@/components/LoginPanel.vue'
import "../scss/style.scss"

export default {
  name: 'LoginPanel',
  components: {
    LoginPanel
  }
}
</script>