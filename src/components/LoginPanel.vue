<template>

  <section class="d-flex flex-column flex-lg-row vh-100">
    <div class="h-100 w-100 d-flex justify-content-center align-items-center bg-main">
      <img class="img-fluid p-lg-5 mw-sm-450" src="../assets/hospital_green.svg">
    </div>
    <div class="h-100 w-100 d-flex justify-content-center align-items-center bg-login p-4">
      <div class="login bg-white">
        <h1 class="font-medium">Dzień dobry</h1>
        <p v-if="showError" id="error" class="mb-0 mt-2" style="color: red">Niepoprawny login lub hasło</p>
        <p v-else class="font-small mb-0 mt-2">Wprowadź login i hasło</p>
        <form v-on:submit.prevent="login(email, password)">
          <input class="input-form" type="text" placeholder="login" name="email" v-model="email" required><br/>
          <input class="input-form" type="password" placeholder="hasło" name="password" v-model="password"
                 required><br/>
          <button type="submit" class="btn-form btn-form-green p-3 text-decoration-none mt-2">
            Zaloguj się
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>

import axios from 'axios';
import {role, setRole} from "/src/role.js";

export default {
  name: 'LoginPanel',
  data() {
    return {
      email: "",
      password: "",
      showError: false
    }
  },

  methods: {
    getUserData() {
      axios.get(`https://patient-service-api.herokuapp.com/user/details/?login=${this.email}`)
          .then(response => {
            this.users = response.data
            console.log(response.data)
            if (response.status === 200) {
              setRole(response.data.role);
              localStorage.setItem('userRole', response.data.role)
              console.log(role)
            }
          })
    },

    login(email, password) {

      const params = new URLSearchParams();
      params.append('username', email);
      params.append('password', password);

      axios.post('https://patient-service-api.herokuapp.com/login', params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        }
      }).then(response => {
            console.log(response.status)
            if (response.status === 200) {
              localStorage.setItem('loggedIn', 'true')

            }
          }
      ).then(() => {
        this.getUserData();
      }).then(() => {
        this.$router.push({path: '/hospitals'})
      }).catch((error) => {
        if (error.response.status === 401) {
          this.showError = true;
        }
        if (error.response.status === 500) {
          this.showError = true;
        }
      })
    }
  }

}
</script>