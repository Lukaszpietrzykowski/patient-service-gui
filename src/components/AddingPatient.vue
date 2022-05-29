<template>

    <section class="bg-white position-relative d-flex flex-column align-items-center justify-content-center h-100">
        
        <header class="d-flex flex-column justify-content-center w-100 bg-for-menu bg-main menu-header p-3">
            <form class="d-flex justify-content-center w-100">

                <div class="w-75 w-lg-50 d-flex flex-row justify-content-center">
                    <button class="btn-search h-100 p-0 m-0" type="submit" name="submit">
                        <svg width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg>
                    </button>
                    <input class="input-search h-100 p-0 m-0 outline-none border-0 " type="text" id="searchhospital" name="searchhospital" placeholder="Wyszukaj szpital" onfocus="this.placeholder=''" onblur="this.placeholder='Wyszukaj szpital'">
                </div> 

            </form>
        </header>

            
        <div class="d-flex p-3 mt-2 w-100 w-lg-75 justify-content-center flex-row flex-md-row menu-hospital-box">
                <form class="d-flex-row">
                    <h1>Wprowadź dane pacjenta:</h1>
                    <div>
                        <div>Imię</div>
                        <div><input type="text" name="imie" placeholder="Jan"></div>
                    </div>
                    <div>Nazwisko</div>
                    <div><input type="text" name="nazwisko" placeholder="Kowalski"></div>
                    <div>PESEL</div>
                    <div><input type="text" name="pesel" placeholder="00000000000"></div>
                    <div>Data urodzenia</div>
                    <div><input type="date" name="dataurodzenia"></div>
                    <div>Wiek</div>
                    <div><input type="number" name="wiek" placeholder="100"></div>
                    <div class="font-smaller"><input type="checkbox" name="czyPrzyblizonyWiek"> wiek pacjenta w przybliżeniu</div>
                    <div>Płeć</div>
                    <div><input value="plec-k" type="radio" name="plec">Kobieta</div>
                    <div><input value="plec-m" type="radio" name="plec">Mężczyzna</div>
                    <div><input value="plec-n" type="radio" name="plec">Niebinarna</div>
                    <div>Priorytet</div>
                    <div><input value="priorytet-n" type="radio" name="priorytet">Niski</div>
                    <div><input value="priorytet-s" type="radio" name="priorytet">Średni</div>
                    <div><input value="priorytet-w" type="radio" name="priorytet">Wysoki</div>
                </form>
        </div>
        
        <section class="fixed-bottom d-flex flex-row justify-content-center align-items-center w-100 p-1 bg-transparent">
            
            <div class="bg-for-menu bg-main justify-content-center align-items-center d-flex flex-row menu-fixed-bottom-inner w-75">
                <div class="d-flex flex-column justify-content-center">
                    <router-link to="/hospitals" class="bg-transparent mt-2">
                        <svg class="menu-fixed-button" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M192 48C192 21.49 213.5 0 240 0H400C426.5 0 448 21.49 448 48V512H368V432C368 405.5 346.5 384 320 384C293.5 384 272 405.5 272 432V512H192V48zM312 64C303.2 64 296 71.16 296 80V104H272C263.2 104 256 111.2 256 120V136C256 144.8 263.2 152 272 152H296V176C296 184.8 303.2 192 312 192H328C336.8 192 344 184.8 344 176V152H368C376.8 152 384 144.8 384 136V120C384 111.2 376.8 104 368 104H344V80C344 71.16 336.8 64 328 64H312zM160 96V512H48C21.49 512 0 490.5 0 464V320H80C88.84 320 96 312.8 96 304C96 295.2 88.84 288 80 288H0V224H80C88.84 224 96 216.8 96 208C96 199.2 88.84 192 80 192H0V144C0 117.5 21.49 96 48 96H160zM592 96C618.5 96 640 117.5 640 144V192H560C551.2 192 544 199.2 544 208C544 216.8 551.2 224 560 224H640V288H560C551.2 288 544 295.2 544 304C544 312.8 551.2 320 560 320H640V464C640 490.5 618.5 512 592 512H480V96H592z"/></svg>
                    </router-link>
                    <h2 class="font-small color-white font-weight-normal text-center " style="font-size: 6px; letter-spacing: 0.5px">Szpitale</h2>
                </div>
    
                <div class="d-flex flex-column justify-content-center">
                    <router-link to="/patients" class="bg-transparent mt-2">
                        <svg class="menu-fixed-button" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/></svg>
                    </router-link>
                    <h2 class="font-small color-white font-weight-normal text-center " style="font-size: 6px; letter-spacing: 0.5px">Pacjenci</h2>
                </div>
            </div>

        </section>
    </section>
       
       <!-- <ul v-if="hospitals.length">
            <li v-for="hospital_one of hospitals" v-bind:key="hospital_one.name">
                <p><strong>{{hospital_one.name}}</strong></p>
                <p>{{hospital_one.body}}</p>
            </li>
            </ul> -->

            {{hospitals}}

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
      AddingPatient: [],
      errors: []
    }
  },

  mounted() {
  // if you want to call it on component mounted
  axios.get('hospital')
    .then(response => {
    //   this.hospitals.append(response.data)
    this.hospitals.push(response)
    })
    .catch(e => {
      this.errors.push(e)
    })
},
  


 
}
// app.use(cors());


</script>