<template>
  <AddingPatient />
</template>

<script>
// @ is an alias to /src
import AddingPatient from '@/components/AddingPatient.vue'
import "../scss/style.scss"

export default {
  name: 'AddingPatient',
  components: {
    AddingPatient
  }
}
</script>