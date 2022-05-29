<template>

<section class="d-flex flex-column flex-lg-row vh-100">
    <div class="h-100 w-100 d-flex justify-content-center align-items-center bg-main">
        <img class="img-fluid p-lg-1 mw-sm-450" src="../assets/medical-doctor.svg">
    </div>

    <div class="h-100 w-100 d-flex justify-content-center align-items-center bg-white">
    <section class="bg-white position-relative d-flex flex-column align-items-center justify-content-center h-100">

    <section class="w-100" >
        <div class="d-flex p-1 mt-2 w-100 mx-auto justify-content-center flex-row flex-md-row menu-hospital-box">
            <form id="adding-patient" class="pt-2 pb-2 p-1 d-flex-row">
			<h1>Wprowadź dane pacjenta:</h1>
			
            <div class="color-grey mt-2 font-small">*Imię</div>
            <div><input class="input-user" type="text" id="IMIE"></div>
			<span style="color: red" id="poleImie"></span>
			
            <div class="color-grey mt-2 font-small">*Nazwisko</div>
            <div><input class="input-user" type="text" id="NAZWISKO"></div>
            <span style="color: red" id="poleNazwisko"></span>
			
            <div class="color-grey mt-2 font-small">Numer PESEL</div>
            <div><input class="input-user" id="PESEL" type="text" size="11"></div>
            <span style="color: red" id="polePesel"></span>
			
            <div class="color-grey mt-2 font-small">Data urodzenia</div>
            <div><input class="input-user" type="date" id="DATURO"></div>
			
            <div class="color-grey mt-2 font-small">*Wiek</div>
            <div><input class="input-user" type="number" id="WIEK" min="0" max="122"></div>
            <span style="color: red" id="poleWiek"></span>
			
            <div class="color-grey mt-2 font-small">*Płeć</div>
            <div class="d-flex flex-row justify-content-around mt-1">
                <div class="align-items-center font-small"><input class="input-user-radio" value="mezczyzna" type="radio" name="plec"> Mężczyzna</div>
                <div class="align-items-center font-small"><input class="input-user-radio" value="kobieta" type="radio" name="plec"> Kobieta</div>
            </div>
            <span style="color: red" id="polePlec"></span>
			
            <div class="color-grey mt-2 font-small">*Priorytet</div>
             <div class="d-flex flex-row justify-content-around mt-1">
                <div class="align-items-center font-small"><input class="input-user-radio" value="niski" type="radio" name="priorytet"> Niski</div>
                <div class="align-items-center font-small"><input class="input-user-radio" value="sredni" type="radio" name="priorytet"> Średni</div>
                <div class="align-items-center font-small"><input class="input-user-radio" value="wysoki" type="radio" name="priorytet"> Wysoki</div>
            </div>
            <span style="color: red" id="polePriorytet"></span>
            
            
            <div class="d-flex flex-row-reverse justify-content-around ">
                        <button class="btn-add font-small mt-2 p-3 text-decoration-none mt-2">Zatwierdź</button>
                        <button class="btn-back font-small mt-2 p-3 text-decoration-none mt-2">Kasuj</button>
                    </div>
			

		</form>        
        </div>
        </section>
         
    </section>
    </div>
</section>
</template>

<script>
//proszę nie edytować w dniu dzisiejszym tego kodu 29/05/2022 Radek
import axios from 'axios';
export default {
  data() {
    return {
      AddingPatient: [],
      errors: []
    }
  },

  mounted() {
  axios.get('hospital')
    .then(response => {
    this.hospitals.push(response)
    })
    .catch(e => {
      this.errors.push(e)
    })
},
}
</script>