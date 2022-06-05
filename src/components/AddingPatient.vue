<template>

<section class="d-flex flex-column flex-lg-row vh-100">
    <div class="h-100 w-100 d-flex justify-content-center align-items-center bg-main">
        <img class="img-fluid p-lg-1 mw-sm-450" src="../assets/adding-patient-form-graphic.svg">
    </div>

    <div class="h-100 w-100 d-flex justify-content-center align-items-center bg-white">
    <section class="bg-white position-relative d-flex flex-column align-items-center justify-content-center h-100">

    <section class="w-100" >
        <div id="dodawaniePacjenta" class="d-flex p-2 mt-2 w-100 mx-auto justify-content-center flex-row flex-md-row menu-hospital-box">
            <form v-on:submit.prevent="addPatient()" id="adding-patient" class="pt-2 pb-2 p-1 d-flex-row">
			<h1>Wprowadź dane pacjenta:</h1>
            <div>Szpital</div>
            <select @change="getHospitalById(selectedHospital)" v-model="selectedHospital">
              <option :key="hospital.id" v-for="hospital in hospitals" :value="hospital.id" >
              {{hospital.name}}
              </option>
            </select>
            <div>Oddział</div>
            <select v-model="newPatient.departmentId">
              <option :key="department.id" v-for="department in departments" :value="department.id" >
              {{department.name}}
              </option>
            </select>
            <div class="color-grey mt-2 font-small">Imię</div>
            <div><input v-model="newPatient.firstName" class="input-user" type="text" id="IMIE"></div>
			<span style="color: red" id="poleImie"></span>
			
            <div class="color-grey mt-2 font-small">Nazwisko</div>
            <div><input v-model="newPatient.lastName" class="input-user" type="text" id="NAZWISKO"></div>
            <span style="color: red" id="poleNazwisko"></span>

            <div class="color-grey mt-2 font-small">Numer PESEL</div>
            <div><input v-model="newPatient.pesel" class="input-user" id="PESEL" type="text" size="11"></div>
            <span style="color: red" id="polePesel"></span>
			
            <div class="color-grey mt-2 font-small">Data urodzenia</div>
            <div><input v-model="newPatient.birthDate" class="input-user" type="date" id="DATURO" max=""></div>
			
            <div class="color-grey mt-2 font-small">*Wiek</div>
            <div><input v-model="newPatient.age" class="input-user" type="number" id="WIEK" min="0" max="130" required></div>
			
            <div class="color-grey mt-2 font-small">*Płeć</div>
            <div class="d-flex flex-row justify-content-around mt-1">
            <label for="kobieta"><input v-model="newPatient.gender" v-bind:value="'FEMALE'" class="input-user-radio2" type="radio" name="plec" id="kobieta"> Kobieta</label>
            <label for="mezczyzna"><input v-model="newPatient.gender" v-bind:value="'MALE'" class="input-user-radio2" type="radio" name="plec" id="mezczyzna"> Mężczyzna</label></div>
            <span style="color: red" id="polePlec"></span>

			<div class="color-grey mt-2 font-small">*Priorytet</div>
            <div class="d-flex flex-row justify-content-around mt-1">
            <label for="niski"> <input v-model="newPatient.priority" v-bind:value="'LOW'" class="input-user-radio2" type="radio" name="priorytet" id="niski"> Niski</label>
            <label for="wysoki"><input v-model="newPatient.priority" v-bind:value="'HIGH'" class="input-user-radio2" type="radio" name="priorytet" id="wysoki"> Wysoki</label></div>
            <span style="color: red" id="polePriorytet"></span>
            
            
            <div class="d-flex flex-row-reverse justify-content-around ">
                        <button type="submit" class="btn-add font-small mt-2 p-2 text-decoration-none m-2">Zatwierdź</button>
                        <button @click="sprawdzImie" v-on:click.prevent class="btn-add font-small m-2 p-2 text-decoration-none mt-2">Sprawdź</button>
                        <button @click="wyczysc" class="btn-delete font-small m-2 p-3 text-decoration-none mt-2">Kasuj</button>
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
        AddingPatient: [],
        errors: [],
        hospitals: [],
        selectedHospital: "",
        departments: [],
        newPatient: {
        firstName: "",
         lastName: "",
         pesel: "",
         birthDate: "",
         age: "",
         gender: "",
         priority: "",
         departmentId: "",
},
      }
    },
    methods: {
      getHospitalById: function(selectedHospital){
      axios.get(`https://patient-service-api.herokuapp.com/hospital/${selectedHospital}`)
    .then(response => {
      this.departments = response.data.departments
    })
    .catch(e => {
      this.errors.push(e)
    })
      },
      addPatient: function(){
        axios.post('https://patient-service-api.herokuapp.com/patient/add',this.newPatient)
        .then(response=>{
          if (response.status==200) this.$router.push({path: "/patients"}) 
          this.newPatient = {};
          })
      },
        wyczysc: function(){
        document.getElementById("adding-patient").reset();
        document.getElementById("poleImie").innerHTML = "";
        document.getElementById("poleNazwisko").innerHTML = "";
        document.getElementById("polePesel").innerHTML = "";
        document.getElementById("polePlec").innerHTML = "";
        document.getElementById("polePriorytet").innerHTML = "";
        this.newPatient = {};
        },
      sprawdzImie: function(){
        const imie=document.getElementById("IMIE").value;
        if(imie=="") document.getElementById("poleImie").innerHTML="Nie wprowadzono imienia";
        else document.getElementById("poleImie").innerHTML = "";
        this.sprawdzNazwisko();
      },
      sprawdzNazwisko: function(){
        const nazwisko = document.getElementById("NAZWISKO").value;
        if(nazwisko=="") document.getElementById("poleNazwisko").innerHTML="Nie wprowadzono nazwiska";
        else document.getElementById("poleNazwisko").innerHTML = "";
        this.sprawdzPesel();
      },
      sprawdzPesel: function(){
        const pesel = document.getElementById("PESEL").value;
        let czyPeselPrawidlowy = false;
        let czyZnakiToCyfry = this.czyZnakiToCyfry();
        let czySumaKontrolna = this.czySumaKontrolna();
        if(pesel == "") document.getElementById("polePesel").innerHTML="Nie wprowadzono numeru PESEL";
        else if(pesel.length != 11) 
        document.getElementById("polePesel").innerHTML="Wprowadz 11 cyfr";
        else if(!czyZnakiToCyfry) document.getElementById("polePesel").innerHTML="Wprowadzono znak inny niż cyfra";
        else if(!czySumaKontrolna) document.getElementById("polePesel").innerHTML="Suma kontrolna jest nieprawidłowa";
        else{
        czyPeselPrawidlowy = true;
        document.getElementById("polePesel").innerHTML="";
        this.ustawDateUrodzenia();
        this.ustawPlec();
        }
        this.sprawdzDateUrodzenia();
        return czyPeselPrawidlowy;
      },
      czyZnakiToCyfry: function(){
        const pesel = document.getElementById("PESEL").value;
        let i = 0;
        let array = new Array();
        for(i=0; i<11; i++)
        {
        array[i] = parseInt(pesel.substring(i,i+1));
        if(isNaN(array[i])) return false;
        }
        return true;
        },
      czySumaKontrolna: function(){
        const pesel = document.getElementById("PESEL").value;
        let wagi = [1,3,7,9,1,3,7,9,1,3,1];
        let array = new Array();
        let i = 0;
        for(i=0; i<11; i++)
        array[i] = parseInt(pesel.substring(i,i+1));
        let sum = 0;
        for(i=0; i<11; i++)
        sum+=wagi[i]*array[i];
        if(sum%10==0) return true;
        return false;
      },
      ustawDateUrodzenia: function(){
        const pesel = document.getElementById("PESEL").value;
        let i = 0;
        let array = new Array();
        for(i=0; i<11; i++)
        array[i] = parseInt(pesel.substring(i,i+1));
        let year = 1900+array[0]*10+array[1];
        if (array[2]>=2 && array[2]<8) year += Math.floor(array[2]/2)*100;
        if (array[2]>=8) year-=100;
        let month = (array[2]%2)*10+array[3];
        if(month<10) month = "0"+ month;
        let day = array[4]*10+array[5];
        if(day<10) day = "0"+day;
        let date = year + "-" + month + "-" + day;
        this.newPatient.birthDate = date+"T00:00:00";
        document.getElementById("DATURO").value = date;
        this.ustawWiek(year, month, day);
      },
      ustawWiek: function(y,m,d){
        let bday = new Date(y, m, d);
        let today = new Date();
        const ytoday = today.getFullYear();
        const mtoday = today.getMonth()+1;
        const dtoday = today.getDate();
        let age = ytoday - y;
        if(mtoday<m || (mtoday==m && dtoday<d)) age--;
        if(bday) document.getElementById("WIEK").value = age;
        this.newPatient.age = age;
      },
      ustawPlec: function(){
        const pesel = document.getElementById("PESEL").value;
        let array = new Array();
        let i = 0;
        for(i=0; i<11; i++)
        array[i] = parseInt(pesel.substring(i,i+1));
        let plec = (array[9]%2==1)?"M":"K";
        if(plec=="K") {
          document.getElementById("kobieta").checked = true;
          this.newPatient.gender = "FEMALE";
        }
        else 
        {
          document.getElementById("mezczyzna").checked = true;
          this.newPatient.gender = "MALE";
        }
      }, 
      sprawdzDateUrodzenia: function(){
        let date = document.getElementById("DATURO").value;
        let year = date.slice(0,4);
        let month = date.slice(5,7);
        let day = date.slice(8,10);
        if(date) this.ustawWiek(year, month, day);
        this.sprawdzPlec();
      },
      sprawdzPlec: function(){
        const m = document.getElementById("mezczyzna").checked;
        const k = document.getElementById("kobieta").checked;
        if(!(m || k)) document.getElementById("polePlec").innerHTML = "Proszę wybrać płeć";
        else document.getElementById("polePlec").innerHTML = "";
        this.sprawdzPriorytet();
      },
      sprawdzPriorytet: function(){
        const n = document.getElementById("niski").checked;
        const w = document.getElementById("wysoki").checked;
        if(!(n||w)) document.getElementById("polePriorytet").innerHTML = "Proszę wybrać priorytet";
        else document.getElementById("polePriorytet").innerHTML = "";
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