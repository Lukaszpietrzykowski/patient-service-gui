<template>
  <div class="patient-details" style="background-color: #05a081">
    <div class="patient-details-box" style="background-color: white">
      <div class="patient-graphic">
        <div class="patient-basic">
          <div class="patient-headers">
            <div>Imię:</div>
            <div>Nazwisko:</div>
            <div>PESEL:</div>
            <div>Data urodzenia:</div>
            <div>Wiek:</div>
            <div>Płeć:</div>
            <div>Data rejestracji:</div>
            <div>Data wypisania:</div>
          </div>
          <div class="patient-data">
            <div>{{convertFirstName(PatientData.firstName)}}</div>
            <div>{{convertLastName(PatientData.lastName)}}</div>
            <div>{{convertPESEL(PatientData.pesel)}}</div>
            <div>{{convertDateNoTime(PatientData.birthDate)}}</div>
            <div>{{PatientData.age}}</div>
            <div>{{convertGender(PatientData.gender)}}</div>
            <div>{{convertDateWithTime(PatientData.registrationDate)}}</div>
            <div>{{convertDateWithTime(PatientData.dischargeDate)}}</div>
          </div>
        </div>        
        <div class="graphic">
          <img class="img-fluid" src="../assets/patient-details-graphic.png">
        </div>
      </div>
      <form id="edit-patient-details">
        <div class="medical-history p-2">
          <div>Historia choroby:</div>
            <textarea v-model="PatientData.medicalHistory" cols="2" rows="7">{{}}</textarea>
          </div>
        <div class="m-2">
          <div class="d-flex flex-row justify-content-around gap-3 w-100">
            <router-link style="text-decoration: none; color: inherit;" class="btn-back-add font-small p-2 w-100" to="/patients">Powrót</router-link>
            <button type="submit" class="btn-add font-small text-decoration-none p-2 w-100">Zapisz</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      patientId: "",
      hospitalId: "",
      departmentId: "",
      PatientData: {},
    }
  },
  methods: {
    convertFirstName(f){
      if(f!="") return f
      return  "brak danych"
    },
    convertLastName(l){
      if(l!="") return l
      return "brak danych"
    },
    convertPESEL(p){
      if(p!="") return p
      return "brak danych"
    },
    convertGender(g) {
      if(g=="FEMALE") return "Kobieta";
      return "Mężczyzna";
    },
    convertDateNoTime(fullDate){
      if(fullDate != null) return fullDate.substring(0,10)
      return "brak danych"
    },
    convertDateWithTime(fullDate){
      let formatedDate = "";
      if(fullDate != null) {
        formatedDate = fullDate.substring(0,19)
        formatedDate = formatedDate.replace('T',' ')
        return formatedDate
      }
      return "-"
    },
    getPatientData: function(){
      axios.get(`https://patient-service-api.herokuapp.com/patient/${this.patientId}`)
      .then(response=>{
      if(response.status === 200){
        this.PatientData = response.data
        this.PatientData.birthDate = this.PatientData.birthDate.split("T")[0]
      }
     })
    }
  },
  created(){
    this.patientId = this.$route.params.id
    this.getPatientData()
  },
}
</script>

<style scoped>
.patient-details {
  display: flex;
  background-color: rgba(0, 0, 0, 0.031372549);
  height: 100vh;
  align-items: center;
  justify-content: center;
}
.patient-details-box {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 80%;
  width: 80%;
  border-radius: 1pc 1pc 1pc 1pc;
  box-shadow: 0 0.46875rem 2.1875rem rgb(90 97 105 / 10%), 0 0.9375rem 1.40625rem rgb(90 97 105 / 10%), 0 0.25rem 0.53125rem rgb(90 97 105 / 12%), 0 0.125rem 0.1875rem rgb(90 97 105 / 10%);
}
.patient-graphic{
  display: flex;
  width: 100%;
}
.patient-basic{
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: row;
  padding: 1%;
  margin: 1%;
  border-radius: 1pc 1pc 1pc 1pc;
  box-shadow: 0 0.46875rem 2.1875rem rgb(90 97 105 / 10%), 0 0.9375rem 1.40625rem rgb(90 97 105 / 10%), 0 0.25rem 0.53125rem rgb(90 97 105 / 12%), 0 0.125rem 0.1875rem rgb(90 97 105 / 10%);
}
.patient-headers{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.patient-data{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-weight: bold;
}
.graphic{
  width: 100%;
  display:flex;
  align-items: center;
  justify-content: center;
}
#edit-patient-details{
  width: 100%;
}
.medical-history{
  display: flex;
  width: 100%;
  flex-direction: column;
}
.img-fluid {
    max-width: 40%;
}



</style>