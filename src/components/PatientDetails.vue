<template>
  <div class="patient-details">
    <div class="patient-details-box">
      <div class="patient-basic-data">
        <div class="patient-basic">
          <div>
            <div>Imię:</div>
            <div>{{PatientData.firstName}}</div>
          </div>
          <div >
            <div>Nazwisko:</div>
            <div>{{PatientData.lastName}}</div>
          </div>
          <div >
            <div>PESEL:</div>
            <div>{{PatientData.pesel}}</div>
          </div>
          <div >
            <div>Data urodzenia:</div>
            <div>{{PatientData.birthDate}}</div>
          </div>
          <div >
            <div>Wiek:</div>
            <div>{{PatientData.age}}</div>
          </div>
          <div >
            <div>Płeć:</div>
            <div>{{PatientData.gender}}</div>
          </div>
          <div >
            <div>Data wypisania:</div>
            <div>{{PatientData.dischargeDate}}</div>
          </div>
          <div >
            <div>Data rejestracji:</div>
            <div>{{PatientData.registrationDate}}</div>
          </div>
        </div>
        <div class="medical-history">
            <div>Historia choroby:</div>
            Lorem Ipsum
          {{PatientData.medicalHistory}}
        </div>
      </div>

      <div>
        <button>Cofnij</button>
        <button>Zapisz</button>
      </div>
      
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      patientId: "",
      PatientData: {},
    }
  },
  created(){
    this.patientId = this.$route.params.id
  },
  mounted(){
    axios.get(`https://patient-service-api.herokuapp.com/patient/${this.patientId}`)
    .then(response=>{
      if(response.status === 200){
        this.PatientData = response.data
        this.PatientData.birthDate = this.PatientData.birthDate.split("T")[0]
      }
    })
  }
}
</script>

<style scoped>
.patient-basic{
  display: flex;
  width: 100%;
  flex-direction: column;
}
.medical-history{
  display: flex;
  width: 100%;
  flex-direction: column;
}
.patient-basic-data{
  display: flex;
  width: 100%;
}
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
</style>