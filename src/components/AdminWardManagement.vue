<template>
  <section class="d-flex flex-column flex-lg-row vh-100">
    <div class="h-100 w-100 d-flex justify-content-center align-items-center bg-main bg-main">
      <img class="img-fluid p-lg-1 mw-sm-450" src="../assets/medical-doctor-ward.svg">
    </div>

    <div class="bg-white w-100">

      <section class="d-flex justify-content-center">
        <div class=" menu-hospital-box ml-5 mr-5 mb-3 mt-5 p-2 justify-content-center w-70">
          <form class=" d-flex-row flex-md-row" v-on:submit.prevent="submit">
            <h3>Wprowadź dane nowego oddziału:</h3>
            <div class="d-flex flex-row">
              <div style="width: 70%">
                <div class="color-grey mt-2 font-small">Nazwa odziału</div>
                <div><input class="input-user" type="text" name="odzdział" v-model="newDepartment.name" required
                            placeholder="Kardiologia"></div>
              </div>
              <div style="width: 30%">
                <div class="color-grey mt-2 font-small">Ilość łóżek</div>
                <div><input class="input-departments" type="text" name="miasto" v-model="newDepartment.availableBeds"
                            required pattern="[0-9]+" placeholder="0"></div>
              </div>
            </div>
            <div class="d-flex flex-row-reverse justify-content-around">
              <button class="btn-add font-small mt-2 p-2 text-decoration-none mt-2">Dodaj oddział</button>
              <router-link class="btn-back font-small mt-2 p-2 text-decoration-none mt-2" to="/hospitals-management">
                Powrót
              </router-link>
            </div>

          </form>
        </div>
      </section>

      <section class="d-flex justify-content-center">
        <div class="w-100 w-md-75 w-lg-90 scroll-box">
          <div class="d-flex justify-content-center">
            <h1>Lista oddziałów</h1>
          </div>
          <div id="department-list-box" v-for="department in departments" v-bind:key="department.id"
               class="d-flex p-1 my-2 justify-content-center menu-hospital-box">
            <div v-if="(edit.editMode && edit.elementId === department.id)"
                 class="d-flex flex-column justify-content-center align-items-center w-80">
              <div class="d-flex flex-column flex-md-row">
                <div class="w-100 d-flex flex-row p-2 justify-content-center align-items-center" style="gap:0.75rem">
                  <div id="departments-view">
                    <div>
                      <svg width="20" fill="#05a081" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                        <path
                            d="M160 80C160 112.8 140.3 140.1 112 153.3V241.1C130.8 230.2 152.7 224 176 224H272C307.3 224 336 195.3 336 160V153.3C307.7 140.1 288 112.8 288 80C288 35.82 323.8 0 368 0C412.2 0 448 35.82 448 80C448 112.8 428.3 140.1 400 153.3V160C400 230.7 342.7 288 272 288H176C140.7 288 112 316.7 112 352V358.7C140.3 371 160 399.2 160 432C160 476.2 124.2 512 80 512C35.82 512 0 476.2 0 432C0 399.2 19.75 371 48 358.7V153.3C19.75 140.1 0 112.8 0 80C0 35.82 35.82 0 80 0C124.2 0 160 35.82 160 80V80zM80 104C93.25 104 104 93.25 104 80C104 66.75 93.25 56 80 56C66.75 56 56 66.75 56 80C56 93.25 66.75 104 80 104zM368 56C354.7 56 344 66.75 344 80C344 93.25 354.7 104 368 104C381.3 104 392 93.25 392 80C392 66.75 381.3 56 368 56zM80 456C93.25 456 104 445.3 104 432C104 418.7 93.25 408 80 408C66.75 408 56 418.7 56 432C56 445.3 66.75 456 80 456z"/>
                      </svg>
                      <span class="font-small"> oddział</span>
                    </div>
                    <div class="w-100" style="font-weight: bold;  max-width: 100%;">
                      <input class="input-departments" style="width: 75%" type="text" v-model="department.name"
                             required>
                    </div>
                  </div>
                </div>
                <div class="w-100 d-flex flex-row p-2 justify-content-center align-items-center" style="gap:0.75rem">
                  <div id="all-beds-view">
                    <div>
                      <svg width="25" fill="#05a081" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                        <path
                            d="M96 318.3v1.689h1.689C97.12 319.4 96.56 318.9 96 318.3zM176 320c44.13 0 80-35.88 80-79.1s-35.88-79.1-80-79.1S96 195.9 96 240S131.9 320 176 320zM256 318.3C255.4 318.9 254.9 319.4 254.3 320H256V318.3zM544 160h-82.1L450.7 183.9C441.5 203.2 421.8 215.8 400 216c-21.23 0-40.97-12.31-50.3-31.35l-12.08-24.64H304c-8.836 0-16 7.161-16 15.1v175.1L64 352V80.01c0-8.834-7.164-15.1-16-15.1h-32c-8.836 0-16 7.163-16 15.1V496C0 504.8 7.164 512 16 512h32C56.84 512 64 504.8 64 496v-47.1h512V496c0 8.836 7.164 16 16 16h32c8.836 0 16-7.164 16-16V256C640 202.1 597 160 544 160zM624 48.01h-115.2l-24.88-37.31c-2.324-3.48-5.539-6.131-9.158-7.977c-1.172-.6016-2.486-.5508-3.738-.9512C468.8 1.035 466.5 0 464.1 0c-.625 0-1.25 .0254-1.875 .0781c-8.625 .6406-16.25 5.876-19.94 13.7l-42.72 90.81l-21.12-43.12c-4.027-8.223-12.39-13.44-21.54-13.44L208 48.02C199.2 48.01 192 55.18 192 64.02v15.99c0 8.836 7.163 15.1 15.1 16l133.1 .0091l36.46 74.55C382.5 178.8 390.8 184 400 184c9.219-.0781 17.78-5.438 21.72-13.78l45.91-97.52l8.406 12.62C480.5 91.1 487.1 96.01 496 96.01h128c8.836 0 16-7.164 16-16V64.01C640 55.18 632.8 48.01 624 48.01z"/>
                      </svg>
                      <span class="font-small"> wszystkie łóżka</span>
                    </div>
                    <div style="font-weight: bold; max-width: 100%;">
                      <input class="input-departments" type="number" style="width: 30%" min="0"
                             v-model="department.availableBeds" v-on:keyup="checkValue(department)"
                             v-on:change="checkValue(department)">
                    </div>
                  </div>
                </div>
                <div class="w-100 d-flex flex-row p-2 justify-content-center align-items-center" style="gap:0.75rem">
                  <div id="all-beds-view">
                    <div class="d-flex">
                      <svg width="25" fill="#05a081" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                        <path
                            d="M176 288C220.1 288 256 252.1 256 208S220.1 128 176 128S96 163.9 96 208S131.9 288 176 288zM544 128H304C295.2 128 288 135.2 288 144V320H64V48C64 39.16 56.84 32 48 32h-32C7.163 32 0 39.16 0 48v416C0 472.8 7.163 480 16 480h32C56.84 480 64 472.8 64 464V416h512v48c0 8.837 7.163 16 16 16h32c8.837 0 16-7.163 16-16V224C640 170.1 597 128 544 128z"/>
                      </svg>
                      <span class="font-small"> wolne łóżka</span>
                    </div>
                    <div style="font-weight: bold; max-width: 100%;">{{ department.remainingBeds }}</div>
                  </div>
                </div>
                <div id="departments-edit-buttons">
                  <div v-on:click="disableEditMode" class="d-flex flex-row justify-content-center action-button"
                       style="gap:0.75rem">
                    <a class="bg-transparent mt-3">
                      <svg class="menu-departments-form-button" fill="#05a081" xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 512 512">
                        <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                        <path
                            d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM99.5 144.8C77.15 176.1 64 214.5 64 256C64 362 149.1 448 256 448C297.5 448 335.9 434.9 367.2 412.5L99.5 144.8zM448 256C448 149.1 362 64 256 64C214.5 64 176.1 77.15 144.8 99.5L412.5 367.2C434.9 335.9 448 297.5 448 256V256z"/>
                      </svg>
                    </a>
                    <h2 class="font-small color-wblack font-weight-normal text-center mt-3"
                        style="font-size: 0.75rem; letter-spacing: 0.5px">Cofnij zmiany</h2>
                  </div>

                  <div id="czerwony" v-on:click.prevent="this.edit.isDataCorrect && submitEdit(department)"
                       class="d-flex flex-row justify-content-center action-button" style="gap:0.75rem">
                    <a class="bg-transparent mt-3">
                      <svg class="menu-departments-form-button" fill="#05a081" xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 448 512">
                        <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                        <path
                            d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/>
                      </svg>
                    </a>
                    <h2 class="font-small color-wblack font-weight-normal text-center mt-3"
                        style="font-size: 0.75rem; letter-spacing: 0.5px">Zatwierdz zmiany</h2>
                  </div>
                </div>
              </div>
              <div v-if="!this.edit.isDataCorrect" id="tooltip">Liczba pacjentów na oddziale jest większa od liczby
                wszystkich łózek
              </div>
            </div>

            <div v-else class="d-flex flex-column flex-md-row justify-content-center align-items-center w-100">
              <div class="w-100 d-flex flex-row p-2 justify-content-center align-items-center" style="gap:0.75rem">
                <div id="departments-view">
                  <div>
                    <svg width="20" fill="#05a081" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                      <path
                          d="M160 80C160 112.8 140.3 140.1 112 153.3V241.1C130.8 230.2 152.7 224 176 224H272C307.3 224 336 195.3 336 160V153.3C307.7 140.1 288 112.8 288 80C288 35.82 323.8 0 368 0C412.2 0 448 35.82 448 80C448 112.8 428.3 140.1 400 153.3V160C400 230.7 342.7 288 272 288H176C140.7 288 112 316.7 112 352V358.7C140.3 371 160 399.2 160 432C160 476.2 124.2 512 80 512C35.82 512 0 476.2 0 432C0 399.2 19.75 371 48 358.7V153.3C19.75 140.1 0 112.8 0 80C0 35.82 35.82 0 80 0C124.2 0 160 35.82 160 80V80zM80 104C93.25 104 104 93.25 104 80C104 66.75 93.25 56 80 56C66.75 56 56 66.75 56 80C56 93.25 66.75 104 80 104zM368 56C354.7 56 344 66.75 344 80C344 93.25 354.7 104 368 104C381.3 104 392 93.25 392 80C392 66.75 381.3 56 368 56zM80 456C93.25 456 104 445.3 104 432C104 418.7 93.25 408 80 408C66.75 408 56 418.7 56 432C56 445.3 66.75 456 80 456z"/>
                    </svg>
                    <span class="font-small"> oddział</span>
                  </div>
                  <div style="font-weight: bold;">{{ department.name }}</div>
                </div>
              </div>

              <div class="w-100 d-flex flex-row p-2 justify-content-center align-items-center" style="gap:0.75rem">
                <div id="all-beds-view">
                  <div>
                    <svg width="25" fill="#05a081" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                      <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                      <path
                          d="M96 318.3v1.689h1.689C97.12 319.4 96.56 318.9 96 318.3zM176 320c44.13 0 80-35.88 80-79.1s-35.88-79.1-80-79.1S96 195.9 96 240S131.9 320 176 320zM256 318.3C255.4 318.9 254.9 319.4 254.3 320H256V318.3zM544 160h-82.1L450.7 183.9C441.5 203.2 421.8 215.8 400 216c-21.23 0-40.97-12.31-50.3-31.35l-12.08-24.64H304c-8.836 0-16 7.161-16 15.1v175.1L64 352V80.01c0-8.834-7.164-15.1-16-15.1h-32c-8.836 0-16 7.163-16 15.1V496C0 504.8 7.164 512 16 512h32C56.84 512 64 504.8 64 496v-47.1h512V496c0 8.836 7.164 16 16 16h32c8.836 0 16-7.164 16-16V256C640 202.1 597 160 544 160zM624 48.01h-115.2l-24.88-37.31c-2.324-3.48-5.539-6.131-9.158-7.977c-1.172-.6016-2.486-.5508-3.738-.9512C468.8 1.035 466.5 0 464.1 0c-.625 0-1.25 .0254-1.875 .0781c-8.625 .6406-16.25 5.876-19.94 13.7l-42.72 90.81l-21.12-43.12c-4.027-8.223-12.39-13.44-21.54-13.44L208 48.02C199.2 48.01 192 55.18 192 64.02v15.99c0 8.836 7.163 15.1 15.1 16l133.1 .0091l36.46 74.55C382.5 178.8 390.8 184 400 184c9.219-.0781 17.78-5.438 21.72-13.78l45.91-97.52l8.406 12.62C480.5 91.1 487.1 96.01 496 96.01h128c8.836 0 16-7.164 16-16V64.01C640 55.18 632.8 48.01 624 48.01z"/>
                    </svg>
                    <span class="font-small"> wszystkie łóżka</span>
                  </div>
                  <div style="font-weight: bold;">{{ department.availableBeds }}</div>
                </div>
              </div>

              <div class="w-100 d-flex flex-row p-2 justify-content-center align-items-center" style="gap:0.75rem">
                <div id="all-beds-view">
                  <div>
                    <svg width="25" fill="#05a081" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                      <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                      <path
                          d="M176 288C220.1 288 256 252.1 256 208S220.1 128 176 128S96 163.9 96 208S131.9 288 176 288zM544 128H304C295.2 128 288 135.2 288 144V320H64V48C64 39.16 56.84 32 48 32h-32C7.163 32 0 39.16 0 48v416C0 472.8 7.163 480 16 480h32C56.84 480 64 472.8 64 464V416h512v48c0 8.837 7.163 16 16 16h32c8.837 0 16-7.163 16-16V224C640 170.1 597 128 544 128z"/>
                    </svg>
                    <span class="font-small"> wolne łóżka</span>
                  </div>
                  <div style="font-weight: bold;">{{ department.remainingBeds }}</div>
                </div>
              </div>

              <div id="departments-edit-buttons">
                <div v-on:click="toggleEditMode(department.id)"
                     class="d-flex flex-row justify-content-center action-button" style="gap:0.75rem">
                  <a class="bg-transparent mt-3">
                    <svg class="menu-departments-form-button" fill="#05a081" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 512 512">
                      <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                      <path
                          d="M464 16c-17.67 0-32 14.31-32 32v74.09C392.1 66.52 327.4 32 256 32C161.5 32 78.59 92.34 49.58 182.2c-5.438 16.81 3.797 34.88 20.61 40.28c16.89 5.5 34.88-3.812 40.3-20.59C130.9 138.5 189.4 96 256 96c50.5 0 96.26 24.55 124.4 64H336c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32V48C496 30.31 481.7 16 464 16zM441.8 289.6c-16.92-5.438-34.88 3.812-40.3 20.59C381.1 373.5 322.6 416 256 416c-50.5 0-96.25-24.55-124.4-64H176c17.67 0 32-14.31 32-32s-14.33-32-32-32h-128c-17.67 0-32 14.31-32 32v144c0 17.69 14.33 32 32 32s32-14.31 32-32v-74.09C119.9 445.5 184.6 480 255.1 480c94.45 0 177.4-60.34 206.4-150.2C467.9 313 458.6 294.1 441.8 289.6z"/>
                    </svg>
                  </a>
                  <h2 class="font-small color-wblack font-weight-normal text-center mt-3"
                      style="font-size: 0.75rem; letter-spacing: 0.5px">Edytuj oddział</h2>
                </div>
                <div v-on:click="removeDepartment(department.id)"
                     class="d-flex flex-row justify-content-center action-button" style="gap:0.75rem">
                  <a class="bg-transparent mt-3">
                    <svg class="menu-departments-form-button" fill="#05a081" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 320 512">
                      <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                      <path
                          d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
                    </svg>
                  </a>
                  <h2 class="font-small color-wblack font-weight-normal text-center mt-3"
                      style="font-size: 0.75rem; letter-spacing: 0.5px">Usuń oddział</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>

</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      edit: {
        isDataCorrect: false,
        editMode: false,
        elementId: ''
      },
      hospitalId: '',
      departments: [],
      newDepartment: {
        name: '',
        availableBeds: '',
        remainingBeds: ''
      },
      userRole: ''
    }
  },

  created() {
    this.hospitalId = this.$route.params.id
  },

  mounted() {
    this.userRole = localStorage.getItem('userRole');
    this.checkRole();
    this.getAllDepartments();
  },

  methods: {
    checkRole() {
      if (this.userRole !== 'ADMIN') {
        this.$router.push({path: '/hospitals'})
      }
    },

    checkValue(department) {
      if (department.occupiedBeds > department.availableBeds) {
        console.log(department.availableBeds)
        this.edit.isDataCorrect = false;
        document.getElementById('arrow').classList.add('czerwony');
      } else {
        this.edit.isDataCorrect = true;
        document.getElementById('arrow').classList.remove('czerwony');
      }
    },
    submitEdit(department) {
      department.hospitalId = this.hospitalId;
      axios.put(`https://patient-service-api.herokuapp.com/department/update/${department.id}`, department)
          .then(response => {
            if (response.status === 200) {
              this.edit.editMode = false;
              this.edit.elementId = '';
              this.getAllDepartments();
            }
          })
    },
    toggleEditMode(id) {
      this.edit.editMode = true;
      this.edit.elementId = id;
      this.edit.isDataCorrect = true;
    },

    disableEditMode() {
      this.edit.editMode = false;
      this.edit.elementId = '';
      this.edit.isDataCorrect = true;
      this.getAllDepartments();
    },
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
          .then(() => {
            this.departments.map(department => {
              department.occupiedBeds = department.availableBeds - department.remainingBeds
            })
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
  },
}

</script>

<style scoped>
.action-button:hover {
  cursor: pointer;
}

.czerwony {
  fill: red;
}

</style>