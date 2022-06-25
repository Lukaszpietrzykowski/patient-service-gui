<template>
  <section class="d-flex flex-column flex-lg-row vh-100">
    <div class="h-100 w-100 d-flex justify-content-center align-items-center bg-main">
      <img class="img-fluid p-lg-1 mw-sm-450" src="../assets/hospital_green.svg">
    </div>

    <div class="h-100 w-100 d-flex justify-content-center align-items-center bg-white">
      <section class="bg-white position-relative d-flex flex-column align-items-center justify-content-center h-100">

        <section class="w-100">
          <div class="d-flex p-1 mt-2 w-100 mx-auto justify-content-center flex-row flex-md-row menu-hospital-box">
            <form class="pt-2 pb-2 p-2 d-flex-row" v-on:submit.prevent="submit">
              <h1>Wprowadź dane szpitala:</h1>
              <div>
                <div class="color-grey mt-2 font-small">Nazwa szpitala</div>
                <div><input class="input-user" type="text" name="nazwa szpitala" required v-model="name"
                            placeholder="Szpital">
                </div>
              </div>
              <div class="color-grey mt-2 font-small">Miejscowość</div>
              <div><input class="input-user" type="text" name="miasto" required pattern="^[a-zA-Z\s]*$"
                          v-model="address.city" placeholder="Warszawa">
              </div>
              <div class="color-grey mt-2 font-small">Ulica</div>
              <div><input class="input-user" type="text" name="ulica" required v-model="address.street"
                          placeholder="Kwiatowa">
              </div>
              <div class="color-grey mt-2 font-small">Numer budynku</div>
              <div><input class="input-user" type="text" name="numer budynku" required v-model="address.streetNumber"
                          placeholder="12a"></div>
              <div class="color-grey mt-2 font-small">Kod pocztowy</div>
              <div><input class="input-user" type="text" name="kod pocztowy" required v-model="address.postalCode"
                          pattern="^\d{2}-\d{3}$" placeholder="00-000"></div>
              <div class="d-flex flex-row-reverse justify-content-around mt-4 gap-3 ">
                <button class="btn-add font-small mt-2 p-3 text-decoration-none mt-2">Dodaj szpital</button>
                <router-link to="/hospitals-management" class="btn-back font-small mt-2 p-3 text-decoration-none mt-2">
                  Powrót
                </router-link>
              </div>
              <div class="mt-4" style="color:#039060 " id="success"></div>
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
      userRole: '',
      name: '',
      address: {
        city: '',
        street: '',
        streetNumber: '',
        postalCode: ''
      }
    }
  },

  methods: {
    checkRole() {
      if (this.userRole !== 'ADMIN') {
        this.$router.push({path: '/hospitals'})
      }
    },

    submit() {
      const hospital = {name: this.name, address: this.address};
      axios.post('https://patient-service-api.herokuapp.com/hospital/add', hospital)
          .then(function (response) {
            console.log(response)
            document.getElementById('success').innerHTML = "Dodano szpital!"
          }.bind(this));
    },
  },
  mounted() {
    this.userRole = localStorage.getItem('userRole');
    this.checkRole();
  }

}
</script>
