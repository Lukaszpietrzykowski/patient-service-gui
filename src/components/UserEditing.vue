<template>
  <section class="d-flex flex-column flex-lg-row vh-100">
    <div class="h-100 w-100 d-flex justify-content-center align-items-center bg-main">
      <img class="img-fluid p-lg-1 mw-sm-450" src="../assets/medical-doctor.svg">
    </div>

    <div class="h-100 w-100 d-flex justify-content-center align-items-center bg-white">
      <section class="bg-white position-relative d-flex flex-column align-items-center justify-content-center h-100">

        <section class="w-100">
          <div class="d-flex p-1 mt-2 w-100 mx-auto justify-content-center flex-row flex-md-row menu-hospital-box">
            <form v-on:submit.prevent="this.updateUser()" class="pt-2 pb-2 p-1 w-100 d-flex-row">
              <div><h1>Wprowadź zmiany danych:</h1></div>
              <div>
                <div class="color-grey mt-2 font-small">email</div>
                <div><input class="input-user" type="email" name="email" v-model="userData.email" required></div>
              </div>
              <div class="color-grey mt-2 font-small">login</div>
              <div><input class="input-user" type="text" name="login" v-model="userData.login" required></div>
              <div class="color-grey mt-2 font-small">hasło</div>
              <div><input class="input-user" type="password" name="password" placeholder="hasło"
                          v-model="userData.password"
                          required></div>

              <div class="color-grey mt-2 font-small">Uprawnienia</div>
              <div class="d-flex flex-row justify-content-around mt-1">
                <div class="align-items-center font-small"><input v-model="userData.role" v-bind:value="'DISPATCHER'"
                                                                  class="input-user-radio" type="radio" name="rola">
                  Dyspozytor
                </div>
                <div class="align-items-center font-small"><input v-model="userData.role" v-bind:value="'DOCTOR'"
                                                                  class="input-user-radio" type="radio" name="rola">
                  Doktor
                </div>
                <div class="align-items-center font-small"><input v-model="userData.role" v-bind:value="'PARAMEDIC'"
                                                                  class="input-user-radio" type="radio" name="rola">
                  Ratownik
                </div>
                <div class="align-items-center font-small"><input v-model="userData.role" v-bind:value="'ADMIN'"
                                                                  class="input-user-radio" type="radio" name="rola">
                  Administrator
                </div>
              </div>
              <div class="d-flex flex-row-reverse justify-content-around ">
                <button class="btn-add font-small mt-2 p-3 text-decoration-none mt-2">Zapisz
                  zmiany
                </button>
                <router-link class="btn-back font-small mt-2 p-3 text-decoration-none mt-2"
                             to="/users-management">
                  Powrót
                </router-link>
              </div>
            </form>
          </div>
        </section>

      </section>
    </div>
  </section>


</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userId: '',
      userData: {},
      userRole: ''
    }
  },

  created() {
    this.userId = this.$route.params.id
  },

  mounted() {
    this.userRole = localStorage.getItem('userRole');
    this.checkRole();
    axios.get(`https://patient-service-api.herokuapp.com/user/${this.userId}`)
        .then(response => {
          if (response.status === 200) {
            this.userData = response.data
          }
        })
  },


  methods: {
    checkRole() {
      if (this.userRole !== 'ADMIN') {
        this.$router.push({path: '/hospitals'})
      }
    },

    updateUser() {
      axios.put(`https://patient-service-api.herokuapp.com/user/update/${this.userId}`, this.userData)
          .then(response => {
            if (response.status === 200) {
              this.$router.push({path: '/users-management'})
            }
          })
    }
  }

}
</script>