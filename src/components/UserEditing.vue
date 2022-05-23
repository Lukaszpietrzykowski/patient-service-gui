<template>
<section class="d-flex flex-column flex-lg-row vh-100">
    <div class="h-100 w-100 d-flex justify-content-center align-items-center bg-main">
        <img class="img-fluid p-lg-1 mw-sm-450" src="../assets/medical-doctor.svg">
    </div>

    <div class="h-100 w-100 d-flex justify-content-center align-items-center bg-white">
    <section class="bg-white position-relative d-flex flex-column align-items-center justify-content-center h-100">

    <section class="w-100" >
        <div class="d-flex p-1 mt-2 w-100 mx-auto justify-content-center flex-row flex-md-row menu-hospital-box">
                <form class="pt-2 pb-2 p-1 w-100 d-flex-row">
                    <div><h1>Wprowadź zmiany danych:</h1></div>
                    <div>
                    <div class="color-grey mt-2 font-small" >Imię</div>
                    <div><input class="input-user" type="text" name="imie" placeholder="Jan"></div>
                    </div>
                    <div class="color-grey mt-2 font-small" >Nazwisko</div>
                    <div><input class="input-user" type="text" name="nazwisko" placeholder="Kowalski"></div>
                    <div class="color-grey mt-2 font-small" >Hasło</div>
                    <div><input class="input-user" type="text" name="hasło" placeholder="Hasło"></div>
                    <div class="color-grey mt-2 font-small" >Uprawnienia</div>
                    <div class="d-flex flex-row justify-content-around mt-1">
                        <div class="align-items-center font-small"><input class="input-user-radio" value="dyspozytor" type="radio" name="rola"> Dyspozytor</div>
                        <div class="align-items-center font-small"><input class="input-user-radio" value="ratownik" type="radio" name="rola"> Ratownik</div>
                        <div class="align-items-center font-small"><input class="input-user-radio" value="admin" type="radio" name="rola"> Administrator</div>
                    </div>
                    <div class="d-flex flex-row-reverse justify-content-around ">
                        <button class="btn-add font-small mt-2 p-3 text-decoration-none mt-2">Zapisz zmiany</button>
                        <button class="btn-back font-small mt-2 p-3 text-decoration-none mt-2">Powrót</button>
                    </div>
                </form>        
        </div>
        </section>
         
    </section>
    </div>
</section>
    
       

</template>