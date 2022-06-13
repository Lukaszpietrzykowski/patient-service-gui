<template>
<section class="d-flex flex-column flex-lg-row vh-100">
    <div class="h-100 w-100 d-flex justify-content-center align-items-center bg-main">
        <img class="img-fluid p-lg-1 mw-sm-450" src="../assets/medical-doctor.svg">
    </div>

    <div class="h-100 w-100 d-flex justify-content-center align-items-center bg-white">
    <section class="bg-white position-relative d-flex flex-column align-items-center justify-content-center h-100">

    <section class="w-100" >
        <div class="d-flex p-1 mt-2 w-100 mx-auto justify-content-center flex-row flex-md-row menu-hospital-box">
                <form class="pt-2 pb-2 p-1 d-flex-row"  v-on:submit.prevent="submit">
                    <h1>Wprowadź dane użytkownika:</h1>
                    <div>
                    <div class="color-grey mt-2 font-small" >E-mail</div>
                    <div><input class="input-user" type="email" v-model="email" placeholder="E-mail"></div>
                    </div>
                    <div class="color-grey mt-2 font-small" >Login</div>
                    <div><input class="input-user" type="text" v-model="login"  placeholder="Login"></div>
                    <div class="color-grey mt-2 font-small" >Hasło</div>
                    <div><input class="input-user" type="password" v-model="password" placeholder="Hasło"></div>
                    <div class="color-grey mt-2 font-small" >Uprawnienia</div>
                    <div class="d-flex flex-row justify-content-around mt-1">
                        <div class="align-items-center font-small"><input class="input-user-radio" value="ADMIN" type="radio" v-model="role"> Admin</div>
                        <div class="align-items-center font-small"><input class="input-user-radio" value="DOCTOR" type="radio" v-model="role"> Doktor</div>
                        <div class="align-items-center font-small"><input class="input-user-radio" value="DISPATCHER" type="radio" v-model="role"> Dyspozytor</div>
                                                <div class="align-items-center font-small"><input class="input-user-radio" value="PARAMEDIC" type="radio" v-model="role"> Ratownik</div>

                    </div>
                    <div class="d-flex flex-row-reverse justify-content-around mt-2">
                        <button class="btn-add font-small mt-2 p-3 text-decoration-none mt-2">Dodaj użytkownika</button>
                        <router-link to="/admin-panel" class="btn-back font-small mt-2 p-3 text-decoration-none mt-2">Powrót</router-link>
                    </div>

                    <div class="mt-4" style="color:#039060 " id="success"></div>
                </form>        
        </div>
        </section>
         
    </section>
    </div>
</section>
    
       

</template>

<script>
import axios from 'axios';


export default 
{ 
 mounted(){ 
  console.log('Component mounted.') 
   axios.get('https://patient-service-api.herokuapp.com/user/all')
        .then(response => {

          this.users = response.data
          console.log(this.users)
        })
 },
 data(){
 return{ 
     users: [],
   email:'', 
   login:'', 
   password: '',
   role: ''


   } 
  }, 
//   created() {
//   // Simple POST request with a JSON body using axios
//   const user = { email: this.email, login: this.login, password: this.password, role: 'DOCTOR' };
//   axios.post("https://patient-service-api.herokuapp.com/user/add", user)
//     .then(response => this.login = response.data.login)
//     .then(console.log(this.users))
//     .then(console.log(this.login));
// }

   methods: {
       
        submit(){
            const user = { email: this.email, login: this.login, password: this.password, role: this.role };
            axios.post('https://patient-service-api.herokuapp.com/user/add', user)
                .then(function( response ){
                  console.log(response)
                  document.getElementById('success').innerHTML = "Dodano użytkownika!"
                }.bind(this));
        }
    }


}


</script>