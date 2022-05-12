<template>

    <section class="bg-white position-relative d-flex flex-column align-items-center justify-content-center h-100">
        
        <header class="d-flex flex-column justify-content-center w-100 bg-for-menu bg-main menu-header p-3 position-fixed top-0">
            <form class="d-flex justify-content-center w-100">

                <div class="w-75 w-lg-50 d-flex flex-row justify-content-center">
                    <input class="input-search h-100 p-0 m-0 outline-none border-0 " type="text" placeholder="Wyszukaj szpital" v-model="search">
                </div> 

            </form>
            
        </header>

        <div class="d-flex flex-column justify-content-center menu-logout">
                    <a href="" class="bg-white-transparent border-round mt-2">
                        <svg class="logout-btn" fill="#05a081" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M160 48C160 21.49 181.5 0 208 0C234.5 0 256 21.49 256 48C256 74.51 234.5 96 208 96C181.5 96 160 74.51 160 48V48zM112.7 205.4C97.41 212.2 85.42 224.6 79.22 240.1L77.71 243.9C71.15 260.3 52.53 268.3 36.12 261.7C19.71 255.1 11.73 236.5 18.29 220.1L19.8 216.3C32.19 185.4 56.18 160.5 86.66 146.9L97.66 142C118.5 132.8 140.1 128 163.7 128C208.3 128 248.5 154.8 265.6 195.9L280.1 232.7L302.3 243.4C318.1 251.3 324.5 270.5 316.6 286.3C308.7 302.1 289.5 308.5 273.7 300.6L247 287.3C236.7 282.1 228.6 273.4 224.2 262.8L214.6 239.8L195.3 305.3L244.8 359.4C250.2 365.3 254.1 372.4 256 380.2L279 472.2C283.3 489.4 272.9 506.8 255.8 511C238.6 515.3 221.2 504.9 216.1 487.8L194.9 399.6L124.3 322.5C109.5 306.4 103.1 283.9 109.6 262.8L126.5 199.3C125.6 199.7 124.6 200.1 123.7 200.5L112.7 205.4zM100.7 344.2L141.4 388.6L126.9 424.8C124.5 430.9 120.9 436.4 116.3 440.9L54.63 502.6C42.13 515.1 21.87 515.1 9.372 502.6C-3.124 490.1-3.124 469.9 9.372 457.4L68.73 398L93.69 335.6C95.84 338.6 98.17 341.4 100.7 344.2H100.7zM630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L550.6 358.6C538.1 371.1 517.9 371.1 505.4 358.6C492.9 346.1 492.9 325.9 505.4 313.4L530.7 288H384C366.3 288 352 273.7 352 256C352 238.3 366.3 224 384 224H530.7L505.4 198.6C492.9 186.1 492.9 165.9 505.4 153.4C517.9 140.9 538.1 140.9 550.6 153.4L630.6 233.4z"/></svg>
                    </a>
                    <h2 class="font-small color-white font-weight-normal text-center " style="font-size: 9px; letter-spacing: 0.5px">Wyloguj</h2>
                </div>

    <section class="my-5 w-75" >
        <div class="d-flex p-3 mt-2 w-100 w-lg-75 mx-auto justify-content-center flex-row flex-md-row menu-hospital-box">
                <form class="d-flex-row">
                    <h1>Wprowadź dane szpitala:</h1>
                    <div>
                    <div class="color:#626466 font-small" >Nazwa szpitala</div>
                    <div><input class="input-user" type="text" name="nazwa szpitala" placeholder="Szpital"></div>
                    </div>
                    <div class="color:#626466 font-small" >Miejscowość</div>
                    <div><input class="input-user" type="text" name="nazwisko" placeholder="Warszawa"></div>
                    <div class="color:#626466 font-small" >Ulica</div>
                    <div><input class="input-user" type="text" name="login" placeholder="kwiatowa"></div>
                    <div class="color:#626466 font-small" >Kod pocztowy</div>
                    <div><input class="input-user" type="text" name="hasło" placeholder="00-000"></div>
                    
                    <button class="btn-add-user font-small mt-2 p-3 text-decoration-none mt-2">Dodaj szpital</button>
                </form>        
        </div>
        </section>
        
        <section class="fixed-bottom d-flex flex-row justify-content-center align-items-center w-100 p-1 bg-transparent">
            
            <div class="bg-for-menu bg-main justify-content-center align-items-center d-flex flex-row menu-fixed-bottom-inner px-4 w-max-content">
                <div class="d-flex flex-column justify-content-center">
                    <a href="" class="bg-transparent mt-2">
                        <svg class="menu-fixed-button" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M192 48C192 21.49 213.5 0 240 0H400C426.5 0 448 21.49 448 48V512H368V432C368 405.5 346.5 384 320 384C293.5 384 272 405.5 272 432V512H192V48zM312 64C303.2 64 296 71.16 296 80V104H272C263.2 104 256 111.2 256 120V136C256 144.8 263.2 152 272 152H296V176C296 184.8 303.2 192 312 192H328C336.8 192 344 184.8 344 176V152H368C376.8 152 384 144.8 384 136V120C384 111.2 376.8 104 368 104H344V80C344 71.16 336.8 64 328 64H312zM160 96V512H48C21.49 512 0 490.5 0 464V320H80C88.84 320 96 312.8 96 304C96 295.2 88.84 288 80 288H0V224H80C88.84 224 96 216.8 96 208C96 199.2 88.84 192 80 192H0V144C0 117.5 21.49 96 48 96H160zM592 96C618.5 96 640 117.5 640 144V192H560C551.2 192 544 199.2 544 208C544 216.8 551.2 224 560 224H640V288H560C551.2 288 544 295.2 544 304C544 312.8 551.2 320 560 320H640V464C640 490.5 618.5 512 592 512H480V96H592z"/></svg>
                    </a>
                    <h2 class="font-small color-white font-weight-normal text-center " style="font-size: 0.75rem; letter-spacing: 0.5px">Zarządzaj szpitalami</h2>
                </div>               
            </div>

        </section>
    </section>
             

</template>

