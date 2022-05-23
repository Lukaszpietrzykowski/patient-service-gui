<template>
<section class="d-flex flex-column flex-lg-row vh-100">
    <div class="h-100 w-100 d-flex justify-content-center align-items-center bg-main">
        <img class="img-fluid p-lg-1 mw-sm-450" src="../assets/hospital_green.svg">
    </div>

    <div class="h-100 w-100 d-flex justify-content-center align-items-center bg-white">
    <section class="bg-white position-relative d-flex flex-column align-items-center justify-content-center h-100">

    <section class="w-100" >
        <div class="d-flex p-1 mt-2 w-100 mx-auto justify-content-center flex-row flex-md-row menu-hospital-box">
                <form class="pt-2 pb-2 p-2 d-flex-row">
                    <h1>Wprowadź zmiany danych:</h1>
                    <div>
                    <div class="color-grey mt-2 font-small" >Nazwa szpitala</div>
                    <div><input class="input-user" type="text" name="nazwa szpitala" placeholder="Szpital"></div>
                    </div>
                    <div class="color-grey mt-2 font-small" >Miejscowość</div>
                    <div><input class="input-user" type="text" name="miasto" placeholder="Warszawa"></div>
                    <div class="color-grey mt-2 font-small" >Ulica</div>
                    <div><input class="input-user" type="text" name="ulica" placeholder="kwiatowa"></div>
                    <div class="color-grey mt-2 font-small" >Kod pocztowy</div>
                    <div><input class="input-user" type="text" name="kod pocztowy" placeholder="00-000"></div>
                    <div class="d-flex mt-2 flex-row-reverse justify-content-around ">
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

