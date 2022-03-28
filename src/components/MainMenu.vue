<template>

    <div class="bg-white d-flex flex-column align-items-center justify-content-center">
        
        <div class="d-flex flex-column justify-content-center w-100 " style="background-color:#05a081; box-shadow: 2px 2px 1em grey; border-radius: 0 0 60px 60px; width:1000px;">
            <h2 class="font-medium color-white font-weight-bold text-center mt-2 pt-2" style="letter-spacing: 1.5px;">Witaj!</h2>
            <form class="d-flex justify-content-center w-100">

                <div class="w-75 d-flex flex-row">
                    <input class="form-control form-control-sm mb-3" style="background-color: white; opacity: 0.8; color: black; border-radius: 10pc 0 0 10pc" type="text" id="searchhospital" name="searchhospital" placeholder="Wyszukaj szpital">
                    <button class="btn mb-3" style="background: white; border-radius: 0 10pc 10pc 0; width:50px; opacity:0.8;" type="submit" name="submit"> <img src="./icons/magnifying-glass-solid.svg"> </button>
                </div> 

            </form>
        </div>
            <section class="d-flex justify-content-center align-items-center flex-column w-75" style="background-color: #D4D9DB;padding:3%; border-radius: 0pc 0pc 1pc 1pc; box-shadow: 0 0.46875rem 2.1875rem rgb(90 97 105 / 10%), 0 0.9375rem 1.40625rem rgb(90 97 105 / 10%), 0 0.25rem 0.53125rem rgb(90 97 105 / 12%), 0 0.125rem 0.1875rem rgb(90 97 105 / 10%);">
                    <div class="" style="color: black;font-weight:bold; padding-bottom:1rem;">Nazwa szpitala</div>
                    <div class="" style="color: black;padding-bottom:2rem;">-</div> 
                    <div class="" style="color: black;font-weight:bold;padding-bottom:1rem;"> Miejscowość </div> 
                    <div class="" style="color: black;padding-bottom:2rem;float:left;"> - </div> 
                    <div class="" style="color: black;font-weight:bold;float:left;padding-bottom:1rem;"> Adres </div> 
                    <div class="" style="color: black;padding-bottom:2rem;float:left;"> - </div> 
                    <div class="" style="color: black;float:left; font-weight:bold;padding-bottom:1rem;"> Oddziały </div>
                    <div class="" style="width:30%;color: black;float:left;">
                    <div class="" style="float:left; width:50%;">-</div>
                    <div class="" style="float:left; width:50%;"><svg width="15px" style="margin-left:50px" fill="green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/></svg>
                   </div>
                    </div>
            </section>

        <div class="fixed-bottom d-flex flex-row justify-content-around align-items-center w-75" style="background-color: #05a081; box-shadow: -2px -2px 1em grey; border-radius: 60px 60px 0px 0px; height:60px; width:1000px; margin-right:auto; margin-left: auto;">
              
                <div class="d-flex flex-column justify-content-center">
                    <button class="btn" style="background: transparent; border-radius: 10pc 10pc 10pc 10pc; width:55px; height:45px;" type="button" name="addhospital"> <img src="./icons/hospital-solid.svg"> </button>
                    <h2 class="font-small color-white font-weight-normal text-center " style="font-size: 6px; letter-spacing: 1px;">Dodaj szpital</h2>
                </div>
    
                <div>
                <button class="btn" style="background: transparent; border-radius: 10pc 10pc 10pc 10pc; width:55px; height:45px;" type="button" name="addpatient"> <img src="./icons/user-plus-solid.svg"> </button>
                <h2 class="font-small color-white font-weight-normal text-center " style="font-size: 6px; letter-spacing: 1px;">Dodaj pacjenta</h2>
                </div>
            </div>
        </div>
       

</template>

