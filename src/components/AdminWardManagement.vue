<template>
  <section class="d-flex flex-column flex-lg-row vh-100">
    <div class="h-100 w-100 d-flex justify-content-center align-items-center bg-main">
      <img class="img-fluid p-lg-1 mw-sm-450" src="../assets/medical-doctor-ward.svg">
    </div>

    <div class="h-100 w-100 d-flex justify-content-center align-items-center bg-white">
      <section class="bg-white position-relative d-flex flex-column align-items-center justify-content-center h-100">

        <section class="w-100">
          <div
              class="d-flex p-4 mt-2 w-100 mx-auto justify-content-center algn-items-center flex-column  menu-hospital-box">
            <h1>Lista oddziałów</h1>
          </div>
          <div v-for="department in departments" v-bind:key="department.id"
               class="d-flex p-4 mt-2 w-100 mx-auto justify-content-center flex-column menu-hospital-box">


            <div class="d-flex flex-row justify-content-center align-items-center">
              <div class="w-100 d-flex flex-row p-2 justify-content-center align-items-center" style="gap:0.75rem">
                <svg width="30" fill="#05a081" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                      d="M160 80C160 112.8 140.3 140.1 112 153.3V241.1C130.8 230.2 152.7 224 176 224H272C307.3 224 336 195.3 336 160V153.3C307.7 140.1 288 112.8 288 80C288 35.82 323.8 0 368 0C412.2 0 448 35.82 448 80C448 112.8 428.3 140.1 400 153.3V160C400 230.7 342.7 288 272 288H176C140.7 288 112 316.7 112 352V358.7C140.3 371 160 399.2 160 432C160 476.2 124.2 512 80 512C35.82 512 0 476.2 0 432C0 399.2 19.75 371 48 358.7V153.3C19.75 140.1 0 112.8 0 80C0 35.82 35.82 0 80 0C124.2 0 160 35.82 160 80V80zM80 104C93.25 104 104 93.25 104 80C104 66.75 93.25 56 80 56C66.75 56 56 66.75 56 80C56 93.25 66.75 104 80 104zM368 56C354.7 56 344 66.75 344 80C344 93.25 354.7 104 368 104C381.3 104 392 93.25 392 80C392 66.75 381.3 56 368 56zM80 456C93.25 456 104 445.3 104 432C104 418.7 93.25 408 80 408C66.75 408 56 418.7 56 432C56 445.3 66.75 456 80 456z"/>
                </svg>
                <p class="m-0">Oddział<br>{{ department.name }}</p>
              </div>

              <div class="w-100 d-flex flex-row p-2 justify-content-center align-items-center" style="gap:0.75rem">
                <svg width="30" fill="#05a081" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                      d="M55.1 56.04C55.1 42.78 66.74 32.04 79.1 32.04H111.1C125.3 32.04 135.1 42.78 135.1 56.04V176H151.1C165.3 176 175.1 186.8 175.1 200C175.1 213.3 165.3 224 151.1 224H71.1C58.74 224 47.1 213.3 47.1 200C47.1 186.8 58.74 176 71.1 176H87.1V80.04H79.1C66.74 80.04 55.1 69.29 55.1 56.04V56.04zM118.7 341.2C112.1 333.8 100.4 334.3 94.65 342.4L83.53 357.9C75.83 368.7 60.84 371.2 50.05 363.5C39.26 355.8 36.77 340.8 44.47 330.1L55.59 314.5C79.33 281.2 127.9 278.8 154.8 309.6C176.1 333.1 175.6 370.5 153.7 394.3L118.8 432H152C165.3 432 176 442.7 176 456C176 469.3 165.3 480 152 480H64C54.47 480 45.84 474.4 42.02 465.6C38.19 456.9 39.9 446.7 46.36 439.7L118.4 361.7C123.7 355.9 123.8 347.1 118.7 341.2L118.7 341.2zM512 64C529.7 64 544 78.33 544 96C544 113.7 529.7 128 512 128H256C238.3 128 224 113.7 224 96C224 78.33 238.3 64 256 64H512zM512 224C529.7 224 544 238.3 544 256C544 273.7 529.7 288 512 288H256C238.3 288 224 273.7 224 256C224 238.3 238.3 224 256 224H512zM512 384C529.7 384 544 398.3 544 416C544 433.7 529.7 448 512 448H256C238.3 448 224 433.7 224 416C224 398.3 238.3 384 256 384H512z"/>
                </svg>
                <p class="m-0">Wszystkie łóżka <br>{{ department.availableBeds }}</p>
              </div>

              <div class="w-100 d-flex flex-row p-2 justify-content-center align-items-center" style="gap:0.75rem">
                <svg width="30" fill="#05a081" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                      d="M55.1 56.04C55.1 42.78 66.74 32.04 79.1 32.04H111.1C125.3 32.04 135.1 42.78 135.1 56.04V176H151.1C165.3 176 175.1 186.8 175.1 200C175.1 213.3 165.3 224 151.1 224H71.1C58.74 224 47.1 213.3 47.1 200C47.1 186.8 58.74 176 71.1 176H87.1V80.04H79.1C66.74 80.04 55.1 69.29 55.1 56.04V56.04zM118.7 341.2C112.1 333.8 100.4 334.3 94.65 342.4L83.53 357.9C75.83 368.7 60.84 371.2 50.05 363.5C39.26 355.8 36.77 340.8 44.47 330.1L55.59 314.5C79.33 281.2 127.9 278.8 154.8 309.6C176.1 333.1 175.6 370.5 153.7 394.3L118.8 432H152C165.3 432 176 442.7 176 456C176 469.3 165.3 480 152 480H64C54.47 480 45.84 474.4 42.02 465.6C38.19 456.9 39.9 446.7 46.36 439.7L118.4 361.7C123.7 355.9 123.8 347.1 118.7 341.2L118.7 341.2zM512 64C529.7 64 544 78.33 544 96C544 113.7 529.7 128 512 128H256C238.3 128 224 113.7 224 96C224 78.33 238.3 64 256 64H512zM512 224C529.7 224 544 238.3 544 256C544 273.7 529.7 288 512 288H256C238.3 288 224 273.7 224 256C224 238.3 238.3 224 256 224H512zM512 384C529.7 384 544 398.3 544 416C544 433.7 529.7 448 512 448H256C238.3 448 224 433.7 224 416C224 398.3 238.3 384 256 384H512z"/>
                </svg>
                <p class="m-0">Wolne łóżka <br>{{ department.availableBeds }}</p>
              </div>
              <!--              <div class="w-75 p-2 mt-2" style="gap:0.75rem">-&#45;&#45;</div>-->

              <div v-on:click="removeDepartment(department.id)"
                   class="d-flex flex-row justify-content-center action-button" style="gap:0.75rem">
                <a class="bg-transparent mt-2">
                  <svg class="menu-admin-form-button" fill="#05a081" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 576 512">
                    <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                    <path
                        d="M576 384C576 419.3 547.3 448 512 448H205.3C188.3 448 172 441.3 160 429.3L9.372 278.6C3.371 272.6 0 264.5 0 256C0 247.5 3.372 239.4 9.372 233.4L160 82.75C172 70.74 188.3 64 205.3 64H512C547.3 64 576 92.65 576 128V384zM271 208.1L318.1 256L271 303C261.7 312.4 261.7 327.6 271 336.1C280.4 346.3 295.6 346.3 304.1 336.1L352 289.9L399 336.1C408.4 346.3 423.6 346.3 432.1 336.1C442.3 327.6 442.3 312.4 432.1 303L385.9 256L432.1 208.1C442.3 199.6 442.3 184.4 432.1 175C423.6 165.7 408.4 165.7 399 175L352 222.1L304.1 175C295.6 165.7 280.4 165.7 271 175C261.7 184.4 261.7 199.6 271 208.1V208.1z"/>
                  </svg>
                </a>
                <h2 class="font-small color-wblack font-weight-normal text-center mt-3"
                    style="font-size: 0.75rem; letter-spacing: 0.5px">Usuń oddział</h2>
              </div>

            </div>

          </div>

          <div class="d-flex p-2 mt-5 w-75 mx-auto justify-content-center flex-column  menu-hospital-box">
            <form class="pt-2 pb-2 p-2 d-flex-row" v-on:submit.prevent="submit">
              <h1>Wprowadź dane nowego oddziału:</h1>
              <div>
                <div class="color-grey mt-2 font-small">Nazwa odziału</div>
                <div><input class="input-user" type="text" name="odzdział" v-model="newDepartment.name" required pattern="[A-Za-z]+.[A-Za-z+]"
                            placeholder="Kardiologia"></div>
              </div>
              <div class="color-grey mt-2 font-small">ilość łóżek</div>
              <div><input class="input-user" type="text" name="miasto" v-model="newDepartment.availableBeds" required pattern="[0-9]+"
                          placeholder="0"></div>
              <div class="d-flex flex-row-reverse justify-content-around">
                <button class="btn-add font-small mt-2 p-3 text-decoration-none mt-2">Dodaj oddział</button>
                <router-link class="btn-back font-small mt-2 p-3 text-decoration-none mt-2" to="/hospitals-management">
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
      hospitalId: '',
      departments: [],
      newDepartment: {
        name: '',
        availableBeds: ''
      }
    }
  },

  created() {
    this.hospitalId = this.$route.params.id
  },

  mounted() {
    this.getAllDepartments();
  },

  methods: {
    submit() {
      const department = {
        name: this.newDepartment.name,
        hospitalId: this.hospitalId,
        availableBeds: this.newDepartment.availableBeds
      };
      axios.post(`https://patient-service-api.herokuapp.com/department/add/`, department)
          .then(function (response) {
            if (response.status === 200) {
              this.getAllDepartments();
              document.getElementById('success').innerHTML = "Dodano oddział!";
            }
          }.bind(this));
    },
    getAllDepartments() {
      axios.get(`https://patient-service-api.herokuapp.com/hospital/${this.hospitalId}/departments`)
          .then(response => {
            if (response.status === 200)
              this.departments = response.data
          })
    },
    removeDepartment(id) {
      axios.delete(`https://patient-service-api.herokuapp.com/department/delete/${id}`)
          .then(response => {
            if (response.status === 200) {
              this.getAllDepartments()
            }
          })
    }
  }
}

</script>

<style scoped>
.action-button:hover {
  cursor: pointer;
}

</style>