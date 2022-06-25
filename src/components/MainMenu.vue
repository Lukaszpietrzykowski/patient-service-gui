<template>

  <section class="bg-white position-relative d-flex flex-column align-items-center justify-content-center h-100">

    <header
        class="d-flex flex-column justify-content-center w-100 bg-for-menu bg-main menu-header p-3 position-fixed top-0">
      <form class="d-flex justify-content-center w-100">

        <div class="w-75 w-lg-50 d-flex flex-row justify-content-center">
          <input class="input-search h-100 p-0 m-0 outline-none border-0 " type="text"
                 placeholder="Wyszukaj szpital" v-model="search">
        </div>

      </form>

    </header>

    <div class="d-flex flex-column justify-content-center menu-logout">
            <span @click="logout()" class="bg-white-transparent border-round mt-2">
                <svg class="logout-btn" fill="#05a081" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                    <path
                        d="M160 48C160 21.49 181.5 0 208 0C234.5 0 256 21.49 256 48C256 74.51 234.5 96 208 96C181.5 96 160 74.51 160 48V48zM112.7 205.4C97.41 212.2 85.42 224.6 79.22 240.1L77.71 243.9C71.15 260.3 52.53 268.3 36.12 261.7C19.71 255.1 11.73 236.5 18.29 220.1L19.8 216.3C32.19 185.4 56.18 160.5 86.66 146.9L97.66 142C118.5 132.8 140.1 128 163.7 128C208.3 128 248.5 154.8 265.6 195.9L280.1 232.7L302.3 243.4C318.1 251.3 324.5 270.5 316.6 286.3C308.7 302.1 289.5 308.5 273.7 300.6L247 287.3C236.7 282.1 228.6 273.4 224.2 262.8L214.6 239.8L195.3 305.3L244.8 359.4C250.2 365.3 254.1 372.4 256 380.2L279 472.2C283.3 489.4 272.9 506.8 255.8 511C238.6 515.3 221.2 504.9 216.1 487.8L194.9 399.6L124.3 322.5C109.5 306.4 103.1 283.9 109.6 262.8L126.5 199.3C125.6 199.7 124.6 200.1 123.7 200.5L112.7 205.4zM100.7 344.2L141.4 388.6L126.9 424.8C124.5 430.9 120.9 436.4 116.3 440.9L54.63 502.6C42.13 515.1 21.87 515.1 9.372 502.6C-3.124 490.1-3.124 469.9 9.372 457.4L68.73 398L93.69 335.6C95.84 338.6 98.17 341.4 100.7 344.2H100.7zM630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L550.6 358.6C538.1 371.1 517.9 371.1 505.4 358.6C492.9 346.1 492.9 325.9 505.4 313.4L530.7 288H384C366.3 288 352 273.7 352 256C352 238.3 366.3 224 384 224H530.7L505.4 198.6C492.9 186.1 492.9 165.9 505.4 153.4C517.9 140.9 538.1 140.9 550.6 153.4L630.6 233.4z"/>
                </svg>
            </span>
      <h2 class="font-small color-white font-weight-normal text-center "
          style="font-size: 9px; letter-spacing: 0.5px">
        Wyloguj</h2>
    </div>

    <!-- <ul v-if="hospitals.length">
    <li v-for="hospital_one of hospitals" v-bind:key="hospital_one.name">
        <p><strong>{{hospital_one.name}}</strong></p>
        <p>{{hospital_one.body}}</p>
        <ul  v-bind:key="department.id" v-for="department of hospital_one.departments">
            <p><strong>{{department.name}}</strong></p>
        </ul>
    </li>
    </ul> -->
<div class="my-5 container-xxl">
    <div class="w-100 mb-7rem mt-5" v-if="hospitals.length">
      <div v-for="hospital_one in filteredList" v-bind:key="hospital_one.name"
           class="d-flex align-items-center p-3 my-3 w-100 w-lg-75 mx-auto justify-content-center flex-column flex-md-row menu-hospital-box">


        <div class="w-100 py-1 p-lg-3">
          <div class="w-100 d-flex flex-row p-2 justify-content-center align-items-center"
               style="gap:0.75rem">
            <svg width="30" fill="#05a081" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                  d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM368 360c0 13.25-10.75 24-24 24S320 373.3 320 360v-80H192v80C192 373.3 181.3 384 168 384S144 373.3 144 360v-208C144 138.8 154.8 128 168 128S192 138.8 192 152v80h128v-80C320 138.8 330.8 128 344 128s24 10.75 24 24V360z"/>
            </svg>
            <p style="margin: 0;">Nazwa szpitala</p>
          </div>
          <div style="font-weight:600" class="w-100 p-2 mt-1">{{ hospital_one.name }}</div>
        </div>

        <div class="w-100 py-1 p-lg-3">
          <div class="w-100 d-flex flex-row p-2 justify-content-center align-items-center"
               style="gap:0.75rem">
            <svg width="30" fill="#05a081" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                  d="M480 192H592C618.5 192 640 213.5 640 240V464C640 490.5 618.5 512 592 512H48C21.49 512 0 490.5 0 464V144C0 117.5 21.49 96 48 96H64V24C64 10.75 74.75 0 88 0C101.3 0 112 10.75 112 24V96H176V24C176 10.75 186.7 0 200 0C213.3 0 224 10.75 224 24V96H288V48C288 21.49 309.5 0 336 0H432C458.5 0 480 21.49 480 48V192zM576 368C576 359.2 568.8 352 560 352H528C519.2 352 512 359.2 512 368V400C512 408.8 519.2 416 528 416H560C568.8 416 576 408.8 576 400V368zM240 416C248.8 416 256 408.8 256 400V368C256 359.2 248.8 352 240 352H208C199.2 352 192 359.2 192 368V400C192 408.8 199.2 416 208 416H240zM128 368C128 359.2 120.8 352 112 352H80C71.16 352 64 359.2 64 368V400C64 408.8 71.16 416 80 416H112C120.8 416 128 408.8 128 400V368zM528 256C519.2 256 512 263.2 512 272V304C512 312.8 519.2 320 528 320H560C568.8 320 576 312.8 576 304V272C576 263.2 568.8 256 560 256H528zM256 176C256 167.2 248.8 160 240 160H208C199.2 160 192 167.2 192 176V208C192 216.8 199.2 224 208 224H240C248.8 224 256 216.8 256 208V176zM80 160C71.16 160 64 167.2 64 176V208C64 216.8 71.16 224 80 224H112C120.8 224 128 216.8 128 208V176C128 167.2 120.8 160 112 160H80zM256 272C256 263.2 248.8 256 240 256H208C199.2 256 192 263.2 192 272V304C192 312.8 199.2 320 208 320H240C248.8 320 256 312.8 256 304V272zM112 320C120.8 320 128 312.8 128 304V272C128 263.2 120.8 256 112 256H80C71.16 256 64 263.2 64 272V304C64 312.8 71.16 320 80 320H112zM416 272C416 263.2 408.8 256 400 256H368C359.2 256 352 263.2 352 272V304C352 312.8 359.2 320 368 320H400C408.8 320 416 312.8 416 304V272zM368 64C359.2 64 352 71.16 352 80V112C352 120.8 359.2 128 368 128H400C408.8 128 416 120.8 416 112V80C416 71.16 408.8 64 400 64H368zM416 176C416 167.2 408.8 160 400 160H368C359.2 160 352 167.2 352 176V208C352 216.8 359.2 224 368 224H400C408.8 224 416 216.8 416 208V176z"/>
            </svg>
            <p style="margin: 0;">Miejscowość</p>
          </div>
          <div style="font-weight:600" class="w-100 p-2 mt-1">{{ hospital_one.address.city }}</div>
        </div>

        <div class="w-100 py-1 p-lg-3">
          <div class="w-100 d-flex flex-row p-2 justify-content-center align-items-center"
               style="gap:0.75rem">
            <svg width="30" fill="#05a081" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                  d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/>
            </svg>
            <p style="margin: 0;">Adres</p>
          </div>
          <div style="font-weight:600" class="w-100 p-2 mt-1">ul. {{ hospital_one.address.street }}
            {{ hospital_one.address.streetNumber }}<br/>
            {{ hospital_one.address.postalCode }}
          </div>
        </div>

        <div class="w-100 py-1 p-lg-3">
          <div class="w-100 d-flex flex-row p-2 justify-content-center align-items-center"
               style="gap:0.75rem">
            <svg width="30" fill="#05a081" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                  d="M160 80C160 112.8 140.3 140.1 112 153.3V241.1C130.8 230.2 152.7 224 176 224H272C307.3 224 336 195.3 336 160V153.3C307.7 140.1 288 112.8 288 80C288 35.82 323.8 0 368 0C412.2 0 448 35.82 448 80C448 112.8 428.3 140.1 400 153.3V160C400 230.7 342.7 288 272 288H176C140.7 288 112 316.7 112 352V358.7C140.3 371 160 399.2 160 432C160 476.2 124.2 512 80 512C35.82 512 0 476.2 0 432C0 399.2 19.75 371 48 358.7V153.3C19.75 140.1 0 112.8 0 80C0 35.82 35.82 0 80 0C124.2 0 160 35.82 160 80V80zM80 104C93.25 104 104 93.25 104 80C104 66.75 93.25 56 80 56C66.75 56 56 66.75 56 80C56 93.25 66.75 104 80 104zM368 56C354.7 56 344 66.75 344 80C344 93.25 354.7 104 368 104C381.3 104 392 93.25 392 80C392 66.75 381.3 56 368 56zM80 456C93.25 456 104 445.3 104 432C104 418.7 93.25 408 80 408C66.75 408 56 418.7 56 432C56 445.3 66.75 456 80 456z"/>
            </svg>
            <p style="margin: 0;">Oddziały</p>
          </div>
          <div class="w-100 d-flex flex-row mt-1 p-2 justify-content-center" v-bind:key="department.id"
               v-for="department of hospital_one.departments">
            <div style="font-weight:600" class="">{{ department.name }}</div>
            <div class="ms-3">
              <svg width="15px" fill="green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                    d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <ul>
        <!-- nutrient in food.nutrients -->
        <!-- {{department.name}} -->
      </ul>

    </div>
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


  <!-- {{hospitals}} -->

</template>

<style>
.mb-5 {
  margin-top: 5rem;
  margin-bottom: 10px !important;
}
</style>

<script>
import axios from 'axios';
import MenuComponent from "@/components/MenuComponent";

export default {
  components: {
    MenuComponent
  },
  data() {
    return {
      hospitals: [],
      search: '',
      //   errors: []
    }
  },

  methods: {
    logout() {
      axios.post('https://patient-service-api.herokuapp.com/logout')
          .then(response => {
            if (response.status === 200)
              localStorage.removeItem('userRole')
            localStorage.removeItem('loggedIn')
            this.$router.push({
              path: '/'
            })
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
    axios.get('https://patient-service-api.herokuapp.com/hospital/all')
        .then(response => {
          this.hospitals = response.data
          console.log(this.hospitals)
        })


  },

  computed: {
    filteredList() {
      return this.hospitals.filter(hospital => {
        let deps = '';
        hospital.departments.forEach(value => {
          deps = deps + value.name + " "
        })
        return (hospital.name + " " + hospital.address.city + " " + hospital.address.street + " " + hospital.address.streetNumber + " " + hospital.address.postalCode + " " + deps).toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
  ,

}
</script>