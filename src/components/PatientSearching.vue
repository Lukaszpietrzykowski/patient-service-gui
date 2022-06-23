<template>

  <section class="bg-white position-relative d-flex flex-column align-items-center justify-content-center h-100">

    <header
        class="d-flex flex-column justify-content-center w-100 bg-for-menu bg-main menu-header p-3 position-fixed top-0">
      <form class="d-flex justify-content-center w-100">

        <div class="w-75 w-lg-50 d-flex flex-row justify-content-center">
          <input class="input-search h-100 p-0 m-0 outline-none border-0" v-model="search" type="text"
                 placeholder="Wyszukaj pacjenta">
        </div>

      </form>
    </header>

    <div class="d-flex flex-column justify-content-center menu-logout">
      <a href="" class="bg-white-transparent border-round mt-2">
        <svg class="logout-btn" fill="#05a081" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
              d="M160 48C160 21.49 181.5 0 208 0C234.5 0 256 21.49 256 48C256 74.51 234.5 96 208 96C181.5 96 160 74.51 160 48V48zM112.7 205.4C97.41 212.2 85.42 224.6 79.22 240.1L77.71 243.9C71.15 260.3 52.53 268.3 36.12 261.7C19.71 255.1 11.73 236.5 18.29 220.1L19.8 216.3C32.19 185.4 56.18 160.5 86.66 146.9L97.66 142C118.5 132.8 140.1 128 163.7 128C208.3 128 248.5 154.8 265.6 195.9L280.1 232.7L302.3 243.4C318.1 251.3 324.5 270.5 316.6 286.3C308.7 302.1 289.5 308.5 273.7 300.6L247 287.3C236.7 282.1 228.6 273.4 224.2 262.8L214.6 239.8L195.3 305.3L244.8 359.4C250.2 365.3 254.1 372.4 256 380.2L279 472.2C283.3 489.4 272.9 506.8 255.8 511C238.6 515.3 221.2 504.9 216.1 487.8L194.9 399.6L124.3 322.5C109.5 306.4 103.1 283.9 109.6 262.8L126.5 199.3C125.6 199.7 124.6 200.1 123.7 200.5L112.7 205.4zM100.7 344.2L141.4 388.6L126.9 424.8C124.5 430.9 120.9 436.4 116.3 440.9L54.63 502.6C42.13 515.1 21.87 515.1 9.372 502.6C-3.124 490.1-3.124 469.9 9.372 457.4L68.73 398L93.69 335.6C95.84 338.6 98.17 341.4 100.7 344.2H100.7zM630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L550.6 358.6C538.1 371.1 517.9 371.1 505.4 358.6C492.9 346.1 492.9 325.9 505.4 313.4L530.7 288H384C366.3 288 352 273.7 352 256C352 238.3 366.3 224 384 224H530.7L505.4 198.6C492.9 186.1 492.9 165.9 505.4 153.4C517.9 140.9 538.1 140.9 550.6 153.4L630.6 233.4z"/>
        </svg>
      </a>
      <h2 class="font-small color-white font-weight-normal text-center " style="font-size: 9px; letter-spacing: 0.5px">
        Wyloguj</h2>
    </div>
<div class="mt-5">
    <section class="my-5" v-if="patients?.length && patients">
      <div v-for="patient in filteredList" v-bind:key="patient.firstName"
           class="d-flex p-1 mt-3 w-100 mx-auto justify-content-center flex-row flex-md-row menu-hospital-box">
        <div class="w-100 py-1 p-lg-3">
          <div class="w-100 d-flex flex-column flex-lg-row p-2 justify-content-center align-items-center">
            <div class="w-100 my-2">
              <div class="w-100 d-flex flex-row p-2 justify-content-center align-items-center"
                   style="gap:0.6rem">
                <svg width="30" fill="#05a081" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path
                      d="M292.7 342.3C289.7 345.3 288 349.4 288 353.7V416h62.34c4.264 0 8.35-1.703 11.35-4.727l156.9-158l-67.88-67.88L292.7 342.3zM568.5 167.4L536.6 135.5c-9.875-10-26-10-36 0l-27.25 27.25l67.88 67.88l27.25-27.25C578.5 193.4 578.5 177.3 568.5 167.4zM256 0v128h128L256 0zM256 448c-16.07-.2852-30.62-9.359-37.88-23.88c-2.875-5.875-8-6.5-10.12-6.5s-7.25 .625-10 6.125l-7.749 15.38C187.6 444.6 181.1 448 176 448H174.9c-6.5-.5-12-4.75-14-11L144 386.6L133.4 418.5C127.5 436.1 111 448 92.45 448H80C71.13 448 64 440.9 64 432S71.13 416 80 416h12.4c4.875 0 9.102-3.125 10.6-7.625l18.25-54.63C124.5 343.9 133.6 337.3 144 337.3s19.5 6.625 22.75 16.5l13.88 41.63c19.75-16.25 54.13-9.75 66 14.12C248.5 413.2 252.2 415.6 256 415.9V347c0-8.523 3.402-16.7 9.451-22.71L384 206.5V160H256c-17.67 0-32-14.33-32-32L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V448H256z"/>
                </svg>
                <p class="m-0" style="color:#626466">Imię</p>


              </div>
              <div style="font-weight:600" class="p-2 w-100 patient-name">{{ convertFirstName(patient.firstName) }}</div>
            </div>


            <div class="w-100 my-2">
              <div class="w-100 d-flex flex-row p-2 justify-content-center align-items-center"
                   style="gap:0.6rem">
                <svg width="30" fill="#05a081" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                      d="M192 160C192 177.7 177.7 192 160 192C142.3 192 128 177.7 128 160V128C128 74.98 170.1 32 224 32C277 32 320 74.98 320 128V135.8C320 156.6 318.8 177.4 316.4 198.1L438.8 161.3C450.2 157.9 462.6 161.1 470.1 169.7C479.3 178.3 482.1 190.8 478.4 202.1L460.4 255.1H544C561.7 255.1 576 270.3 576 287.1C576 305.7 561.7 319.1 544 319.1H416C405.7 319.1 396.1 315.1 390 306.7C384 298.4 382.4 287.6 385.6 277.9L398.1 240.4L303.7 268.7C291.9 321.5 272.2 372.2 245.3 419.2L231.4 443.5C218.5 466.1 194.5 480 168.5 480C128.5 480 95.1 447.5 95.1 407.5V335.6C95.1 293.2 123.8 255.8 164.4 243.7L248.8 218.3C253.6 191.1 255.1 163.5 255.1 135.8V128C255.1 110.3 241.7 96 223.1 96C206.3 96 191.1 110.3 191.1 128L192 160zM160 335.6V407.5C160 412.2 163.8 416 168.5 416C171.5 416 174.4 414.4 175.9 411.7L189.8 387.4C207.3 356.6 221.4 324.1 231.8 290.3L182.8 304.1C169.3 309 160 321.5 160 335.6V335.6zM24 368H64V407.5C64 410.4 64.11 413.2 64.34 416H24C10.75 416 0 405.3 0 392C0 378.7 10.75 368 24 368zM616 416H283.5C291.7 400.3 299.2 384.3 305.9 368H616C629.3 368 640 378.7 640 392C640 405.3 629.3 416 616 416z"/>
                </svg>
                <p class="m-0" style="color:#626466">Nazwisko</p>
              </div>
              <div style="font-weight:600" class="p-2 w-100 patient-name">{{ convertLastName(patient.lastName) }}</div>

            </div>
            <div class="w-100 my-2">
              <div class="w-100 d-flex flex-row p-2 justify-content-center align-items-center"
                   style="gap:0.6rem">
                <svg width="30" fill="#05a081" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                      d="M320 192c0 17.69 14.31 31.1 32 31.1L416 224c17.69 0 32-14.31 32-32s-14.31-32-32-32V63.98c0-11.19-5.844-21.53-15.38-27.34c-9.531-5.781-21.41-6.188-31.34-1.062l-32 16.59c-15.69 8.125-21.81 27.44-13.69 43.13C329.3 106.3 340.4 112.6 352 112.6V160C334.3 160 320 174.3 320 192zM392 255.6c-48.6 0-88 39.4-88 88c0 36.44 22.15 67.7 53.71 81.07l-7.682 8.004c-10.72 11.16-10.34 28.88 .8125 39.56C356.3 477.4 363.3 480 370.2 480c7.344 0 14.72-2.875 20.19-8.625c69.61-72.53 89.6-85.39 89.6-127.8C480 294.1 440.6 255.6 392 255.6zM392 367.6c-13.23 0-24-10.77-24-24s10.77-24 24-24s24 10.77 24 24S405.2 367.6 392 367.6zM39.99 191.7c8.672 0 17.3-3.5 23.61-10.38L96 145.9v302c0 17.7 14.33 32.03 31.1 32.03s32-14.33 32-32.03V145.9L192.4 181.3C204.4 194.3 224.6 195.2 237.6 183.3c13.03-11.95 13.9-32.22 1.969-45.27L151.6 41.94c-12.12-13.26-35.06-13.26-47.19 0l-87.1 96.09C4.475 151.1 5.35 171.3 18.38 183.3C24.52 188.9 32.27 191.7 39.99 191.7z"/>
                </svg>
                <p class="m-0" style="color:#626466">Pesel</p>
              </div>
              <div style="font-weight:600" class="p-2 w-100 patient-name">{{ convertPESEL(patient.pesel) }}</div>

            </div>
            <div class="w-100 my-2">
              <div class="w-100 d-flex flex-row p-2 justify-content-center align-items-center"
                   style="gap:0.6rem">
                <svg width="30" fill="#05a081" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                      d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM80 256C71.16 256 64 263.2 64 272V368C64 376.8 71.16 384 80 384H176C184.8 384 192 376.8 192 368V272C192 263.2 184.8 256 176 256H80z"/>
                </svg>
                <p class="m-0" style="color:#626466">Wiek</p>
              </div>
              <div style="font-weight:600" class="p-2 w-100 patient-name">{{patient.age}}</div>

            </div>
            <div class="w-100 my-2">
              <div class="w-100 d-flex flex-row p-2 justify-content-center align-items-center"
                   style="gap:0.6rem">
                <svg width="30" fill="#05a081" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path
                      d="M256 384H208v-35.05C289.9 333.9 352 262.3 352 176c0-97.2-78.8-176-176-176c-97.2 0-176 78.8-176 176c0 86.26 62.1 157.9 144 172.1v35.05H96c-8.836 0-16 7.162-16 16v32c0 8.836 7.164 16 16 16h48v48c0 8.836 7.164 16 16 16h32c8.838 0 16-7.164 16-16v-48H256c8.838 0 16-7.164 16-16v-32C272 391.2 264.8 384 256 384zM176 272c-52.93 0-96-43.07-96-96c0-52.94 43.07-96 96-96c52.94 0 96 43.06 96 96C272 228.9 228.9 272 176 272zM624 0h-112.4c-21.38 0-32.09 25.85-16.97 40.97l29.56 29.56l-24.55 24.55c-29.97-20.66-64.81-31.05-99.74-31.05c-15.18 0-30.42 2.225-45.19 6.132c13.55 22.8 22.82 48.36 26.82 75.67c6.088-1.184 12.27-1.785 18.45-1.785c24.58 0 49.17 9.357 67.88 28.07c37.43 37.43 37.43 98.33 0 135.8c-18.71 18.71-43.3 28.07-67.88 28.07c-23.55 0-46.96-8.832-65.35-26.01c-15.92 18.84-34.93 35.1-56.75 47.35c11.45 5.898 20.17 16.3 23.97 28.82C331.5 406 365.7 416 400 416c45.04 0 90.08-17.18 124.5-51.55c60.99-60.99 67.73-155.6 20.47-224.1l24.55-24.55l29.56 29.56c4.889 4.889 10.9 7.078 16.8 7.078C628.2 152.4 640 142.8 640 128.4V16C640 7.164 632.8 0 624 0z"/>
                </svg>
                <p class="m-0" style="color:#626466">Płeć</p>
              </div>
              <div style="font-weight:600" class="p-2 w-100 patient-name">{{ convertGender(patient.gender) }}</div>

            </div>
            <div class="d-flex flex-row p-1">
              <div v-if="this.userRole === 'ADMIN' || this.userRole === 'DOCTOR' || this.userRole === 'DISPATCHER' || this.userRole === 'PARAMEDIC'" v-on:click="updatePatient(patient.id)"
                   class="d-flex flex-column justify-content-center action-button">
                               <span class="bg-transparent mt-2">
                                    <svg class="menu-admin-form-button" fill="#05a081"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
                                        d="M223.1 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 223.1 256zM274.7 304H173.3C77.61 304 0 381.7 0 477.4C0 496.5 15.52 512 34.66 512h286.4c-1.246-5.531-1.43-11.31-.2832-17.04l14.28-71.41c1.943-9.723 6.676-18.56 13.68-25.56l45.72-45.72C363.3 322.4 321.2 304 274.7 304zM371.4 420.6c-2.514 2.512-4.227 5.715-4.924 9.203l-14.28 71.41c-1.258 6.289 4.293 11.84 10.59 10.59l71.42-14.29c3.482-.6992 6.682-2.406 9.195-4.922l125.3-125.3l-72.01-72.01L371.4 420.6zM629.5 255.7l-21.1-21.11c-14.06-14.06-36.85-14.06-50.91 0l-38.13 38.14l72.01 72.01l38.13-38.13C643.5 292.5 643.5 269.7 629.5 255.7z"/></svg>
                                </span>
                <h2 class="font-small color:#626466 font-weight-normal text-center p-2"
                    style="font-size: 0.75rem; letter-spacing: 0.5px">Edytuj pacjenta</h2>
              </div>
              <div v-if="this.userRole === 'ADMIN' || this.userRole === 'DOCTOR' || this.userRole === 'DISPATCHER'" class="d-flex flex-column justify-content-center">
                                <span v-on:click="removePatient(patient.id)" class="bg-transparent mt-2 action-button">
                                    <svg class="menu-admin-form-button" fill="#05a081"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
                                        d="M274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM616 200h-144C458.8 200 448 210.8 448 224s10.75 24 24 24h144C629.3 248 640 237.3 640 224S629.3 200 616 200z"/></svg>
                                </span>
                <h2 class="font-small color:#626466 font-weight-normal text-center p-2"
                    style="font-size: 0.75rem; letter-spacing: 0.5px">Archiwizuj pacjenta</h2>
              </div>
              <div class="d-flex flex-column justify-content-center action-button mt-2">
                <router-link :to="{ name: 'PatientDetails', params: { id: patient.id }}"
                             style="text-decoration: none; color: inherit;">
                               <span class="bg-transparent mt-2">
                                 <svg class="menu-admin-form-button" fill="#05a081" xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
                                     d="M528 32h-480C21.49 32 0 53.49 0 80V96h576V80C576 53.49 554.5 32 528 32zM0 432C0 458.5 21.49 480 48 480h480c26.51 0 48-21.49 48-48V128H0V432zM368 192h128C504.8 192 512 199.2 512 208S504.8 224 496 224h-128C359.2 224 352 216.8 352 208S359.2 192 368 192zM368 256h128C504.8 256 512 263.2 512 272S504.8 288 496 288h-128C359.2 288 352 280.8 352 272S359.2 256 368 256zM368 320h128c8.836 0 16 7.164 16 16S504.8 352 496 352h-128c-8.836 0-16-7.164-16-16S359.2 320 368 320zM176 192c35.35 0 64 28.66 64 64s-28.65 64-64 64s-64-28.66-64-64S140.7 192 176 192zM112 352h128c26.51 0 48 21.49 48 48c0 8.836-7.164 16-16 16h-192C71.16 416 64 408.8 64 400C64 373.5 85.49 352 112 352z"/></svg>
                                </span>
                </router-link>
                <h2 class="font-small color:#626466 font-weight-normal text-center p-2"
                    style="font-size: 0.75rem; letter-spacing: 0.5px">Szczegóły pacjenta</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
    </div>

<section class="box-hamburger d-lg-none">
      <button class="btn btn-form-green btn-menu" v-on:click="openMenu()">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
              d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/>
        </svg>
      </button>
    </section>
    <section class="h-100 w-100 menu-box fixed-bottom" id="menu" v-on:click="turnOffMenu()">

      <section
          class="d-flex flex-column flex-md-row justify-content-end justify-content-md-center align-items-center w-100 p-1 bg-transparent">
        <button class="btn btn-form-green btn-cross" v-on:click="turnOffMenu()">
          <svg fill="#fff" width="35" height="35" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
                d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
          </svg>

        </button>
        <div
            class="bg-for-menu bg-main justify-content-center align-items-center d-flex flex-column gap-0 flex-md-row menu-fixed-bottom-inner gap-0 gap-md-2 gap-lg-3 px-4 w-max-content">
          <MenuComponent/>
        </div>
      </section>
    </section>
  </section>


</template>

<script>

import axios from 'axios';
import MenuComponent from "@/components/MenuComponent";

export default {
  components: {MenuComponent},
  data() {
    return {
      patients: [],
      search: "",
      userRole: '',
    }
  },
  methods: {

    updatePatient(id) {
      this.$router.push({name: 'EditingPatient', params: {id: id}})
    },
    convertFirstName(f) {
      if (f != "") return f
      return "brak danych"
    },
    convertLastName(l) {
      if (l != "") return l
      return "brak danych"
    },
    convertPESEL(p) {
      if (p != "") return p
      return "brak danych"
    },
    convertGender(g) {
      if (g == "FEMALE") return "Kobieta";
      return "Mężczyzna";
    },
    convertDate(fullDate) {
      if (fullDate != null) return fullDate.substring(0, 10)
      return "brak danych"
    },
    getAllPatients() {
      axios.get('https://patient-service-api.herokuapp.com/patient')
          .then((response) => {
            this.patients = response.data
          })
    },
    removePatient(patientId) {
      axios.delete(`https://patient-service-api.herokuapp.com/patient/delete/${patientId}`)
          .then(response => {
            if (response.status == 200) {
              this.getAllPatients()
            }
          })
    },
        openMenu() {
      const menu = document.querySelector('#menu')

      menu.style.bottom = "0rem"


    },
    turnOffMenu() {
      const menu = document.querySelector('#menu')

      menu.style.bottom = "-100vh"
    }
  },
  mounted() {
    axios.get('https://patient-service-api.herokuapp.com/patient')
        .then(response => {
          this.patients = response.data
        })
    this.userRole = localStorage.getItem('userRole');
  },

  computed: {
    filteredList() {
      return this.patients.filter(patient => {
        return (this.convertFirstName(patient.firstName) + " " + this.convertLastName(patient.lastName) + " " + this.convertPESEL(patient.pesel) + " " + this.convertDate(patient.birthDate) + " " + this.convertGender(patient.gender)+ " " + patient.age).toLowerCase().includes(this.search.toLowerCase())
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