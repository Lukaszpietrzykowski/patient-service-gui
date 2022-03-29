<template>

    <section class="bg-white d-flex flex-column align-items-center justify-content-center">
        
        <header class="d-flex flex-column justify-content-center w-100 p-3 " style="background: #05a081; box-shadow: 2px 2px 1em grey; border-radius: 0 0 6rem 6rem; width:1000px;">
            <h1 class="font-medium color-white font-weight-bold text-center mt-1 p-2">Witaj!</h1>
            <form class="d-flex flex-wrap justify-content-center w-100">

                <div class="w-50 d-flex flex-row">
                    <input class="form-control form-control-sm mb-3" style="background-color: #fff; opacity: 0.75; color: #000; border-radius: 10pc 0 0 10pc; border:0;" type="text" id="searchhospital" name="searchhospital" placeholder="Wyszukaj szpital">
                    <button class="btn mb-3" style="background: #fff; border-radius: 0 10pc 10pc 0; width:50px; opacity:0.75; border:0;" type="submit" name="submit"> <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg> </button>
                </div> 

            </form>
        </header>

        <section class="fixed-bottom d-flex flex-row justify-content-center align-items-center w-75 p-2" style="gap: 3rem; background: #05a081; box-shadow: -2px -2px 1em grey; border-radius: 6rem 6rem 0px 0px; width:1000px; margin-right:auto; margin-left: auto;">
              
                <div class="d-flex flex-column justify-content-center">
                    <a href="" class=" mt-2" style="background: transparent; border-radius: 10pc 10pc 10pc 10pc; width:45px; height:45px;"> <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M192 48C192 21.49 213.5 0 240 0H400C426.5 0 448 21.49 448 48V512H368V432C368 405.5 346.5 384 320 384C293.5 384 272 405.5 272 432V512H192V48zM312 64C303.2 64 296 71.16 296 80V104H272C263.2 104 256 111.2 256 120V136C256 144.8 263.2 152 272 152H296V176C296 184.8 303.2 192 312 192H328C336.8 192 344 184.8 344 176V152H368C376.8 152 384 144.8 384 136V120C384 111.2 376.8 104 368 104H344V80C344 71.16 336.8 64 328 64H312zM160 96V512H48C21.49 512 0 490.5 0 464V320H80C88.84 320 96 312.8 96 304C96 295.2 88.84 288 80 288H0V224H80C88.84 224 96 216.8 96 208C96 199.2 88.84 192 80 192H0V144C0 117.5 21.49 96 48 96H160zM592 96C618.5 96 640 117.5 640 144V192H560C551.2 192 544 199.2 544 208C544 216.8 551.2 224 560 224H640V288H560C551.2 288 544 295.2 544 304C544 312.8 551.2 320 560 320H640V464C640 490.5 618.5 512 592 512H480V96H592z"/></svg> </a>
                    <h2 class="font-small color-white font-weight-normal text-center " style="font-size: 6px; letter-spacing: 0.5px">Dodaj szpital</h2>
                </div>
    
                <div class="d-flex flex-column justify-content-center">
                <a href="" class=" mt-2" style="background: transparent; border-radius: 10pc 10pc 10pc 10pc; width:45px; height:45px;"> <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM616 200h-48v-48C568 138.8 557.3 128 544 128s-24 10.75-24 24v48h-48C458.8 200 448 210.8 448 224s10.75 24 24 24h48v48C520 309.3 530.8 320 544 320s24-10.75 24-24v-48h48C629.3 248 640 237.3 640 224S629.3 200 616 200z"/></svg> </a>
                <h2 class="font-small color-white font-weight-normal text-center " style="font-size: 6px; letter-spacing: 0.5px">Dodaj pacjenta</h2>
                </div>
            </section>
        </section>
       

</template>

