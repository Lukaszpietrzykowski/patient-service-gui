<template>

    <div class="bg-white d-flex flex-column align-items-center justify-content-center">
        
        <div class="d-flex flex-column justify-content-center w-100 " style="background: linear-gradient(90deg, rgba(61,156,186,1) 0%, rgba(5,160, 129, 1) 51%); box-shadow: 2px 2px 1em grey; border-radius: 0 0 60px 60px; height:80px; width:1000px;">
            <h2 class="font-medium color-white font-weight-bold text-center mt-2 pt-2" style="letter-spacing: 1.5px;">Witaj!</h2>
            <form class="d-flex justify-content-center w-100">

                <div class="w-75 d-flex flex-row">
                    <input class="form-control form-control-sm mb-3" style="background-color: white; opacity: 0.8; color: black; border-radius: 10pc 0 0 10pc" type="text" id="searchhospital" name="searchhospital" placeholder="Wyszukaj szpital">
                    <button class="btn mb-3" style="background: white; border-radius: 0 10pc 10pc 0; width:50px; opacity:0.8;" type="submit" name="submit"> <img src="./icons/magnifying-glass-solid.svg"> </button>
                </div> 

            </form>
        </div>

        <div class="fixed-bottom d-flex flex-row justify-content-around align-items-center w-75" style="background: linear-gradient(90deg, rgba(61,156,186,1) 0%, rgba(5,160, 129, 1) 51%); box-shadow: -2px -2px 1em grey; border-radius: 60px 60px 0px 0px; height:60px; width:1000px; margin-right:auto; margin-left: auto;">
              
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

