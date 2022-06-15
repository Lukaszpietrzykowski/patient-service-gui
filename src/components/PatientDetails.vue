<template>
  <div class="patient-details">
    <div class="patient-details-box">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
.patient-details {
  display: flex;
  background-color: rgba(0, 0, 0, 0.031372549);
  height: 100vh;
  align-items: center;
  justify-content: center;
}

.patient-details-box {
  height: 80%;
  width: 80%;
  border-radius: 1pc 1pc 1pc 1pc;
  box-shadow: 0 0.46875rem 2.1875rem rgb(90 97 105 / 10%), 0 0.9375rem 1.40625rem rgb(90 97 105 / 10%), 0 0.25rem 0.53125rem rgb(90 97 105 / 12%), 0 0.125rem 0.1875rem rgb(90 97 105 / 10%);
}
</style>