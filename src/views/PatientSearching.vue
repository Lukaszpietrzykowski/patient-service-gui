<template>
  <PatientSearching />
</template>

<script>
// @ is an alias to /src
import PatientSearching from '@/components/PatientSearching.vue'
import "../scss/style.scss"

export default {
  name: 'PatientSearching',
  components: {
    PatientSearching
  }
}
</script>