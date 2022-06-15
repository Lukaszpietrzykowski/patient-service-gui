<template>
  <section class="d-flex flex-column flex-lg-row vh-100">
    <div class="h-100 w-100 d-flex justify-content-center align-items-center bg-main">
      <img class="img-fluid p-lg-1 mw-sm-450" src="../assets/hospital_green.svg">
    </div>

    <div class="h-100 w-100 d-flex justify-content-center align-items-center bg-white">
      <section class="bg-white position-relative d-flex flex-column align-items-center justify-content-center h-100">

        <section class="w-100">
          <div class="d-flex p-1 mt-2 w-100 mx-auto justify-content-center flex-row flex-md-row menu-hospital-box">
            <form v-on:submit.prevent="" class="pt-2 pb-2 p-2 d-flex-row">
              <div><h1>Wprowadź zmiany danych:</h1></div>
              <div>
                <div class="color-grey mt-2 font-small">Nazwa szpitala</div>
                <div><input class="input-user" type="text" name="nazwa szpitala"
                            v-model="hospitalData.name"></div>
              </div>
              <div class="color-grey mt-2 font-small">Miejscowość</div>
              <div><input class="input-user" type="text" name="miasto"
                          v-model="hospitalData.address.city">
              </div>
              <div class="color-grey mt-2 font-small">Ulica</div>
              <div><input class="input-user" type="text" name="ulica"
                          v-model="hospitalData.address.street">
              </div>
              <div class="color-grey mt-2 font-small">Numer budynku</div>
              <div><input class="input-user" type="text" name="numer budynku"
                          v-model="hospitalData.address.streetNumber">
              </div>
              <div class="d-flex mt-2 flex-row-reverse justify-content-around ">
                <button v-on:click="updateHospital()" class="btn-add font-small mt-2 p-3 text-decoration-none mt-2">
                  Zapisz zmiany
                </button>
                <router-link class="btn-back font-small mt-2 p-3 text-decoration-none mt-2" to="/hospitals-management">
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
import axios from 'axios';

export default {
  data() {
    return {
      hospitalId: '',
      hospitalData: {
        name: '',
        address: {
          city: '',
          street: '',
          streetNumber: '',
          postalCode: '',
        }
      }
    }
  },

  created() {
    this.hospitalId = this.$route.params.id
  },

  mounted() {
    axios.get(`https://patient-service-api.herokuapp.com/hospital/${this.hospitalId}`)
        .then(response => {
          if (response.status === 200) {
            this.hospitalData = response.data
          }
        })
  },


  methods: {
    updateHospital() {
      axios.put(`https://patient-service-api.herokuapp.com/hospital/update/${this.hospitalId}`, this.hospitalData)
          .then(response => {
            if (response.status === 200) {
              this.$router.push({path: '/hospitals-management'})
            }
          })
    }
  }
}
</script>

