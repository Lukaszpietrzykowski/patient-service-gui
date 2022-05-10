<template>

    <section class="bg-white position-relative d-flex flex-column align-items-center justify-content-center h-100">
        
        <header class="d-flex flex-column justify-content-center w-100 bg-for-menu bg-main menu-header p-3">
            <h1 class="font-medium color-white font-weight-bold text-center mt-1 p-1">Witaj!</h1>
            <form class="d-flex justify-content-center w-100">

                <div class="w-75 w-lg-50 d-flex flex-row justify-content-center">
                    <button class="btn-search h-100 p-0 m-0" type="submit" name="submit">
                        <svg width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg>
                    </button>
                    <input class="input-search h-100 p-0 m-0 outline-none border-0 " type="text" id="searchhospital" name="searchhospital" placeholder="Wyszukaj szpital" onfocus="this.placeholder=''" onblur="this.placeholder='Wyszukaj szpital'">
                </div> 

            </form>
        </header>

        <!-- <ul v-if="hospitals.length">
            <li v-for="hospital_one of hospitals" v-bind:key="hospital_one.name">
                <p><strong>{{hospital_one.name}}</strong></p>
                <p>{{hospital_one.body}}</p>
                <ul  v-bind:key="department.id" v-for="department of hospital_one.departments">
                    <p><strong>{{department.name}}</strong></p>
                </ul>
            </li>
            </ul> -->

        <div class="mb-5" v-if="hospitals.length">
            <div  v-for="hospital_one of hospitals" v-bind:key="hospital_one.name" class="d-flex p-3 my-3 w-100 w-lg-75 justify-content-center flex-column flex-md-row menu-hospital-box">
                
                    <div class="w-100 py-1 p-lg-3">
                        <div class="w-100 d-flex flex-row p-2 justify-content-center align-items-center" style="gap:0.75rem">
                            <svg width="30" fill="#05a081" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM368 360c0 13.25-10.75 24-24 24S320 373.3 320 360v-80H192v80C192 373.3 181.3 384 168 384S144 373.3 144 360v-208C144 138.8 154.8 128 168 128S192 138.8 192 152v80h128v-80C320 138.8 330.8 128 344 128s24 10.75 24 24V360z"/></svg>
                            <p style="margin: 0;">Nazwa szpitala</p>
                        </div>
                        <div class="w-100 p-2 mt-1">{{hospital_one.name}}</div>
                    </div>

                    <div class="w-100 py-1 p-lg-3">
                        <div class="w-100 d-flex flex-row p-2 justify-content-center align-items-center" style="gap:0.75rem">
                            <svg width="30" fill="#05a081" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M480 192H592C618.5 192 640 213.5 640 240V464C640 490.5 618.5 512 592 512H48C21.49 512 0 490.5 0 464V144C0 117.5 21.49 96 48 96H64V24C64 10.75 74.75 0 88 0C101.3 0 112 10.75 112 24V96H176V24C176 10.75 186.7 0 200 0C213.3 0 224 10.75 224 24V96H288V48C288 21.49 309.5 0 336 0H432C458.5 0 480 21.49 480 48V192zM576 368C576 359.2 568.8 352 560 352H528C519.2 352 512 359.2 512 368V400C512 408.8 519.2 416 528 416H560C568.8 416 576 408.8 576 400V368zM240 416C248.8 416 256 408.8 256 400V368C256 359.2 248.8 352 240 352H208C199.2 352 192 359.2 192 368V400C192 408.8 199.2 416 208 416H240zM128 368C128 359.2 120.8 352 112 352H80C71.16 352 64 359.2 64 368V400C64 408.8 71.16 416 80 416H112C120.8 416 128 408.8 128 400V368zM528 256C519.2 256 512 263.2 512 272V304C512 312.8 519.2 320 528 320H560C568.8 320 576 312.8 576 304V272C576 263.2 568.8 256 560 256H528zM256 176C256 167.2 248.8 160 240 160H208C199.2 160 192 167.2 192 176V208C192 216.8 199.2 224 208 224H240C248.8 224 256 216.8 256 208V176zM80 160C71.16 160 64 167.2 64 176V208C64 216.8 71.16 224 80 224H112C120.8 224 128 216.8 128 208V176C128 167.2 120.8 160 112 160H80zM256 272C256 263.2 248.8 256 240 256H208C199.2 256 192 263.2 192 272V304C192 312.8 199.2 320 208 320H240C248.8 320 256 312.8 256 304V272zM112 320C120.8 320 128 312.8 128 304V272C128 263.2 120.8 256 112 256H80C71.16 256 64 263.2 64 272V304C64 312.8 71.16 320 80 320H112zM416 272C416 263.2 408.8 256 400 256H368C359.2 256 352 263.2 352 272V304C352 312.8 359.2 320 368 320H400C408.8 320 416 312.8 416 304V272zM368 64C359.2 64 352 71.16 352 80V112C352 120.8 359.2 128 368 128H400C408.8 128 416 120.8 416 112V80C416 71.16 408.8 64 400 64H368zM416 176C416 167.2 408.8 160 400 160H368C359.2 160 352 167.2 352 176V208C352 216.8 359.2 224 368 224H400C408.8 224 416 216.8 416 208V176z"/></svg>
                            <p style="margin: 0;">Miejscowość</p>
                        </div>
                        <div class="w-100 p-2 mt-1">{{hospital_one.address.city}}</div>
                    </div>

                    <div class="w-100 py-1 p-lg-3">
                        <div class="w-100 d-flex flex-row p-2 justify-content-center align-items-center" style="gap:0.75rem">
                            <svg width="30" fill="#05a081" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg>
                            <p style="margin: 0;">Adres</p>
                        </div>
                        <div class="w-100 p-2 mt-1">ul. {{hospital_one.address.street}} {{hospital_one.address.streetNumber}}<br /> {{hospital_one.address.postalCode }}</div>
                    </div>

                    <div class="w-100 py-1 p-lg-3">
                        <div class="w-100 d-flex flex-row p-2 justify-content-center align-items-center" style="gap:0.75rem">
                            <svg width="30" fill="#05a081" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M160 80C160 112.8 140.3 140.1 112 153.3V241.1C130.8 230.2 152.7 224 176 224H272C307.3 224 336 195.3 336 160V153.3C307.7 140.1 288 112.8 288 80C288 35.82 323.8 0 368 0C412.2 0 448 35.82 448 80C448 112.8 428.3 140.1 400 153.3V160C400 230.7 342.7 288 272 288H176C140.7 288 112 316.7 112 352V358.7C140.3 371 160 399.2 160 432C160 476.2 124.2 512 80 512C35.82 512 0 476.2 0 432C0 399.2 19.75 371 48 358.7V153.3C19.75 140.1 0 112.8 0 80C0 35.82 35.82 0 80 0C124.2 0 160 35.82 160 80V80zM80 104C93.25 104 104 93.25 104 80C104 66.75 93.25 56 80 56C66.75 56 56 66.75 56 80C56 93.25 66.75 104 80 104zM368 56C354.7 56 344 66.75 344 80C344 93.25 354.7 104 368 104C381.3 104 392 93.25 392 80C392 66.75 381.3 56 368 56zM80 456C93.25 456 104 445.3 104 432C104 418.7 93.25 408 80 408C66.75 408 56 418.7 56 432C56 445.3 66.75 456 80 456z"/></svg>
                            <p style="margin: 0;">Oddziały</p>
                        </div>
                        <div class="w-100 d-flex flex-row mt-1 p-2 justify-content-center"  v-bind:key="department.id" v-for="department of hospital_one.departments">
                            <div class="">{{department.name}}</div>
                            <div class="ms-3"><svg width="15px" fill="green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/></svg></div>
                        </div>
                    </div>
            </div>

            <ul>
           <!-- nutrient in food.nutrients -->
           <!-- {{department.name}} -->
       </ul>
        
        </div>

      
        
        <section class="fixed-bottom d-flex flex-row justify-content-center align-items-center w-100 p-1 bg-transparent">
            
            <div class="bg-for-menu bg-main justify-content-center align-items-center d-flex flex-row menu-fixed-bottom-inner w-75">
                <div class="d-flex flex-column justify-content-center">
                    <a href="" class="bg-transparent mt-2">
                        <svg class="menu-fixed-button" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M192 48C192 21.49 213.5 0 240 0H400C426.5 0 448 21.49 448 48V512H368V432C368 405.5 346.5 384 320 384C293.5 384 272 405.5 272 432V512H192V48zM312 64C303.2 64 296 71.16 296 80V104H272C263.2 104 256 111.2 256 120V136C256 144.8 263.2 152 272 152H296V176C296 184.8 303.2 192 312 192H328C336.8 192 344 184.8 344 176V152H368C376.8 152 384 144.8 384 136V120C384 111.2 376.8 104 368 104H344V80C344 71.16 336.8 64 328 64H312zM160 96V512H48C21.49 512 0 490.5 0 464V320H80C88.84 320 96 312.8 96 304C96 295.2 88.84 288 80 288H0V224H80C88.84 224 96 216.8 96 208C96 199.2 88.84 192 80 192H0V144C0 117.5 21.49 96 48 96H160zM592 96C618.5 96 640 117.5 640 144V192H560C551.2 192 544 199.2 544 208C544 216.8 551.2 224 560 224H640V288H560C551.2 288 544 295.2 544 304C544 312.8 551.2 320 560 320H640V464C640 490.5 618.5 512 592 512H480V96H592z"/></svg>
                    </a>
                    <h2 class="font-small color-white font-weight-normal text-center " style="font-size: 6px; letter-spacing: 0.5px">Dodaj szpital</h2>
                </div>
    
                <div class="d-flex flex-column justify-content-center">

                   <router-link to="/patients"  class="bg-transparent mt-2"> 
                        <svg class="menu-fixed-button" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM616 200h-48v-48C568 138.8 557.3 128 544 128s-24 10.75-24 24v48h-48C458.8 200 448 210.8 448 224s10.75 24 24 24h48v48C520 309.3 530.8 320 544 320s24-10.75 24-24v-48h48C629.3 248 640 237.3 640 224S629.3 200 616 200z"/></svg>
                    </router-link>>
                    <h2 class="font-small color-white font-weight-normal text-center " style="font-size: 6px; letter-spacing: 0.5px">Dodaj pacjenta</h2>
                </div>
            </div>

        </section>
    </section>
       
       

            <!-- {{hospitals}} -->

</template>

<script>
// 

// export default {
//   data() {
//     return {
//       hospitals: [],
//       errors: []
//     }
//   },

//   // Fetches posts when the component is created.
//   created() {
//     axios.get(`hospital
// `)
//     .then(response => {
//       // JSON responses are automatically parsed.
//       this.hospitals = response.data
//       console.log(this.hospitals)
//     })
//     .catch(e => {
//       this.errors.push(e)
//     })
//   }
// }

// import { HTTP } from './http-common';
import axios from 'axios';
// import cors from 'cors';
// import app from 'vue';
export default {
  data() {
    return {
      hospitals: []
    //   errors: []
    }
  },

//   methods: {
//     getNutrients: function () {
//       axios.get('https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=DEMO_KEY&nutrients=205&nutrients=204&nutrients=208&nutrients=269')
//         .then(response => {this.nutrients = response.data})
//     }
//   }

mounted() {
        axios.get('https://patient-service-api.herokuapp.com/hospital/all')
    .then(response => {
    //   this.hospitals.append(response.data)
    // this.hospitals = response.data
    // this.departments = response.data
    this.hospitals = response.data
    console.log(this.hospitals)
    })
    }
}
  


 

// app.use(cors());


</script>