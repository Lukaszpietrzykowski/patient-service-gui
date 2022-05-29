<template>

  <section class="d-flex flex-column flex-lg-row vh-100">
    <div class="h-100 w-100 d-flex justify-content-center align-items-center bg-main">
      <img class="img-fluid p-lg-5 mw-sm-450" src="../assets/hospital_green.svg">
    </div>
    <div class="h-100 w-100 d-flex justify-content-center align-items-center bg-login p-4">
      <div class="login bg-white">
        <h1 class="font-medium">Dzień dobry</h1>
        <p class="font-small mb-0 mt-2">Wprowadź login i hasło</p>
        <form @submit="login(email, password)">
          <input class="input-form" type="text" placeholder="login" name="email" v-model="email" required><br/>
          <input class="input-form" type="password" placeholder="hasło" name="password" v-model="password"
                 required><br/>
          <button type="submit" class="btn-form btn-form-green p-3 text-decoration-none mt-2">
            Zaloguj się
          </button>
        </form>
<!--        <p v-if="showError" id="error">Email albo hasło jest nieprawidłowe.</p>-->
      </div>
    </div>
  </section>
</template>

<script>

import axios from 'axios';
// import cors from 'cors';
// import app from 'vue';
export default {
  name: 'LoginPanel',
  data() {
    return {
      email: "",
      password: ""
    }
  },

  methods: {

    getUserData() {
      axios.get(`http://patient-service-api.herokuapp.com/user`)
          .then(response => {
            this.users = response.data
            console.log(response.data)
            if (response.status === 200 && response.data.length > 0) {
              localStorage.setItem('user-info', JSON.stringify(response.data))
            }
          })
    },

    async login(email, password) {

      const params = new URLSearchParams();
      params.append('username', email);
      params.append('password', password);

      axios.post('http://patient-service-api.herokuapp.com/login', params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        }
      })
          .then(response => {
            console.log(response.status)
                if (response.status === 200 && response.data.length > 0) {
                  // this.getUserData();
                  this.$router.push({name: 'MainMenu'})
                }
              }
          )
    },
    mounted() {

      let user = localStorage.getItem('user-info')
      if (user) {
        this.$router.push({name: "MainMenu"})
      }
    }
  }

}
</script>