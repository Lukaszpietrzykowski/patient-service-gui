<template>
  <section class="d-flex flex-column flex-lg-row vh-100">
    <div class="h-100 w-100 d-flex justify-content-center align-items-center bg-main">
      <img class="img-fluid p-lg-1 mw-sm-450" src="../assets/adding-patient-form-graphic.png">
    </div>

    <div class="h-100 w-100 d-flex justify-content-center align-items-center bg-white">
      <section class="bg-white position-relative d-flex flex-column align-items-center justify-content-center h-100">
        <section class="w-100">
          <div id="dodawaniePacjenta"
            class="d-flex p-1 mt-2 w-100 mx-auto justify-content-center flex-row flex-md-row menu-hospital-box">
            <form v-on:submit.prevent="addPatient()" id="adding-patient" class="pt-2 pb-2 p-1 d-flex-row">
              <h1>Wprowadź dane pacjenta:</h1>
              <div class="color-grey mt-2 font-small">*Szpital</div>
              <div>
                <select @change="getHospitalById(selectedHospital)" v-model="selectedHospital" class="input-user"
                  id="SZPITAL">
                  <option :key="hospital.id" v-for="hospital in hospitals" :value="hospital.id">{{hospital.name}}
                  </option>
                </select>
              </div>
              <span style="color: red" id="poleSzpital"></span>

              <div class="color-grey mt-2 font-small">*Oddział</div>
              <div>
                <select v-model="newPatient.departmentId" class="input-user" id="ODDZIAL">
                  <option :key="department.id" v-for="department in departments" :value="department.id">
                    {{department.name}}</option>
                </select>
              </div>
              <span style="color: red" id="poleOddzial"></span>

              <div class="d-flex flex-column flex-md-row justify-content-around">
                <div>
                  <div class="color-grey mt-2 font-small">Imię</div>
                  <div>
                    <input v-model="newPatient.firstName" class="input-user w-100" type="text" id="IMIE">
                  </div>
                </div>
                <div>
                  <div class="color-grey mt-2 font-small">Nazwisko</div>
                  <div>
                    <input v-model="newPatient.lastName" class="input-user w-100" type="text" id="NAZWISKO">
                  </div>
                </div>
              </div>




              <div class="color-grey mt-2 font-small">Numer PESEL</div>
              <div>
                <input v-model="newPatient.pesel" class="input-user" id="PESEL" type="text" size="11">
              </div>
              <span style="color: green" id="polePesel"></span>

              <div class="d-flex justify-content-around gap-4">
                <div class="w-100">
                  <div class="color-grey mt-2 font-small">Data urodzenia</div>
                  <div>
                    <input v-model="newPatient.birthDate" class="input-user w-100" type="date" id="DATURO" max=""
                      style="height:1.9rem">
                  </div>
                </div>
                <div class="w-100">
                  <div class="color-grey mt-2 font-small">*Wiek</div>
                  <div>
                    <input v-model="newPatient.age" class="input-user w-100" type="number" id="WIEK" min="0" max="130">
                  </div>
                  <span style="color: red" id="poleWiek"></span>
                </div>
              </div>




              <div class="d-flex justify-content-around flex-column flex-md-row">
                <div>
                  <div class="color-grey mt-2 font-small">*Płeć</div>
                  <div class="d-flex flex-row justify-content-center align-items-center gap-3 mt-1">
                    <label class="cursor-pointer" for="kobieta">
                      <input v-model="newPatient.gender" v-bind:value="'FEMALE'" class="input-user-radio2" type="radio"
                        name="plec" id="kobieta"> Kobieta
                    </label>
                    <label class="cursor-pointer" for="mezczyzna">
                      <input v-model="newPatient.gender" v-bind:value="'MALE'" class="input-user-radio2" type="radio"
                        name="plec" id="mezczyzna"> Mężczyzna
                    </label>
                  </div>
                  <span style="color: red" id="polePlec"></span>
                </div>
              </div>




              <div class="d-flex flex-row-reverse justify-content-around mt-4 gap-3">
                <button type="submit" class="btn-add font-small text-decoration-none p-2">Zatwierdź</button>
                <button v-on:click.prevent="sprawdz"
                  class="btn-add font-small text-decoration-none p-2">Sprawdź</button>
                <button v-on:click.prevent="wyczysc()" class="btn-delete font-small text-decoration-none p-2">Kasuj</button>
                <router-link style="text-decoration: none; color: inherit;" class="btn-back-add font-small p-2" to="/patients">
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
    el: '#dodawaniePacjenta',
    data() {
      return {
        //AddingPatient: [],  chyba można usunąć  
        //errors: [],   chyba można usunąć
        hospitals: [],
        selectedHospital: "",
        departments: [],
        validation: {
          isDepartmentIdOk: false,
          isAgeOk: false,
          isPESELOk: false,
          isGenderOk: false,
        },
        newPatient: {
          firstName: "",
          lastName: "",
          pesel: "",
          birthDate: "",
          age: "",
          gender: "",
          departmentId: ""
        },
      }
    },
    methods: {
      getHospitalById: function (selectedHospital) {
        axios.get(`https://patient-service-api.herokuapp.com/hospital/${selectedHospital}`)
          .then(response => {
            this.departments = response.data.departments
          })
          .catch(e => {
            this.errors.push(e)
          })
      },
      addPatient: function () {
        this.sprawdz()
        let validation = this.isValidationOk()
        if (this.newPatient.birthDate.slice(10) != "T00:00:00" && this.newPatient.birthDate != "") this.newPatient
          .birthDate = this.newPatient.birthDate + "T00:00:00"
        if (validation) {
          axios.post('https://patient-service-api.herokuapp.com/patient/add', this.newPatient)
            .then(response => {
              if (response.status == 200) this.$router.push({
                path: "/patients"
              })
              this.newPatient = {}
            })
        }
      },
      isValidationOk: function () {
        if (this.validation.isAgeOk == false) return false;
        if (this.validation.isGenderOk == false) return false;
        if (this.validation.isPESELOk == false) return false;
        if (this.validation.isDepartmentIdOk == false) return false;
        return true;
      },
      wyczysc: function () {
        document.getElementById("adding-patient").reset();
        document.getElementById("polePesel").innerHTML = "";
        document.getElementById("polePlec").innerHTML = "";
        document.getElementById("poleOddzial").innerHTML = "";
        this.newPatient = {};
        this.selectedHospital = "";
        this.validation = {};
      },
      sprawdz: function () {
        this.sprawdzDateUrodzenia();
        this.sprawdzPesel();
        this.sprawdzPlec();
        this.sprawdzWiek();
        this.sprawdzSzpital();
        this.sprawdzOddzial();
      },
      sprawdzPesel: function () {
        const pesel = document.getElementById("PESEL").value;
        let czyZnakiToCyfry = this.czyZnakiToCyfry();
        let czySumaKontrolna = this.czySumaKontrolna();
        if (pesel == "") {
          this.validation.isPESELOk = true;
          document.getElementById("polePesel").innerHTML = "Nie wprowadzono numeru PESEL";
        } else if (pesel.length != 11) {
          document.getElementById("polePesel").innerHTML = "Wprowadz 11 cyfr";
          this.validation.isPESELOk = false;
        } else if (!czyZnakiToCyfry) {
          document.getElementById("polePesel").innerHTML = "Wprowadzono znak inny niż cyfra";
          this.validation.isPESELOk = false;
        } else if (!czySumaKontrolna) {
          this.validation.isPESELOk = true;
          document.getElementById("polePesel").innerHTML = "Suma kontrolna jest nieprawidłowa";
        } else {
          this.validation.isPESELOk = true;
          document.getElementById("polePesel").innerHTML = "";
          this.ustawDateUrodzenia();
          this.ustawPlec();
        }
      },
      czyZnakiToCyfry: function () {
        const pesel = document.getElementById("PESEL").value;
        let i = 0;
        let array = new Array();
        for (i = 0; i < 11; i++) {
          array[i] = parseInt(pesel.substring(i, i + 1));
          if (isNaN(array[i])) return false;
        }
        return true;
      },
      czySumaKontrolna: function () {
        const pesel = document.getElementById("PESEL").value;
        let wagi = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3, 1];
        let array = new Array();
        let i = 0;
        for (i = 0; i < 11; i++)
          array[i] = parseInt(pesel.substring(i, i + 1));
        let sum = 0;
        for (i = 0; i < 11; i++)
          sum += wagi[i] * array[i];
        if (sum % 10 == 0) return true;
        return false;
      },
      ustawDateUrodzenia: function () {
        const pesel = document.getElementById("PESEL").value;
        let i = 0;
        let array = new Array();
        for (i = 0; i < 11; i++)
          array[i] = parseInt(pesel.substring(i, i + 1));
        let year = 1900 + array[0] * 10 + array[1];
        if (array[2] >= 2 && array[2] < 8) year += Math.floor(array[2] / 2) * 100;
        if (array[2] >= 8) year -= 100;
        let month = (array[2] % 2) * 10 + array[3];
        if (month < 10) month = "0" + month;
        let day = array[4] * 10 + array[5];
        if (day < 10) day = "0" + day;
        let date = year + "-" + month + "-" + day;
        this.newPatient.birthDate = date;
        document.getElementById("DATURO").value = date;
        this.ustawWiek(year, month, day);
      },
      ustawWiek: function (y, m, d) {
        let bday = new Date(y, m, d);
        let today = new Date();
        const ytoday = today.getFullYear();
        const mtoday = today.getMonth() + 1;
        const dtoday = today.getDate();
        let age = ytoday - y;
        if (mtoday < m || (mtoday == m && dtoday < d)) age--;
        if (bday) document.getElementById("WIEK").value = age;
        this.newPatient.age = age;
      },
      ustawPlec: function () {
        const pesel = document.getElementById("PESEL").value;
        let array = new Array();
        let i = 0;
        for (i = 0; i < 11; i++)
          array[i] = parseInt(pesel.substring(i, i + 1));
        let plec = (array[9] % 2 == 1) ? "M" : "K";
        if (plec == "K") {
          document.getElementById("kobieta").checked = true;
          this.newPatient.gender = "FEMALE";
        } else {
          document.getElementById("mezczyzna").checked = true;
          this.newPatient.gender = "MALE";
        }
      },
      sprawdzDateUrodzenia: function () {
        let date = document.getElementById("DATURO").value;
        let year = date.slice(0, 4);
        let month = date.slice(5, 7);
        let day = date.slice(8, 10);
        if (date) this.ustawWiek(year, month, day);
      },
      sprawdzWiek: function () {
        let age = document.getElementById("WIEK").value;
        if (age >= 0 && age < 130) this.validation.isAgeOk = true;
        else this.validation.isAgeOk = false;
        if (!age) document.getElementById("poleWiek").innerHTML = "Proszę wprowadzić wiek";
        else document.getElementById("poleWiek").innerHTML = "";
      },
      sprawdzPlec: function () {
        const m = document.getElementById("mezczyzna").checked;
        const k = document.getElementById("kobieta").checked;
        if (!(m || k)) {
          this.validation.isGenderOk = false;
          document.getElementById("polePlec").innerHTML = "Proszę wybrać płeć";
        } else {
          this.validation.isGenderOk = true;
          document.getElementById("polePlec").innerHTML = "";
        }
      },
      sprawdzSzpital: function () {
        let hospital = document.getElementById("SZPITAL").value;
        if (!hospital) document.getElementById("poleSzpital").innerHTML = "Proszę wybrać szpital";
        else document.getElementById("poleSzpital").innerHTML = "";
      },
      sprawdzOddzial: function () {
        let department = document.getElementById("ODDZIAL").value;
        if (!department) {
          this.validation.isDepartmentIdOk = false;
          document.getElementById("poleOddzial").innerHTML = "Proszę wybrać oddział";
        } else {
          this.validation.isDepartmentIdOk = true;
          document.getElementById("poleOddzial").innerHTML = "";
        }
      }
    },
    mounted() {
      axios.get('https://patient-service-api.herokuapp.com/hospital/all')
        .then(response => {
          this.hospitals = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
  }
</script>