<template>

  <section class="bg-white position-relative d-flex flex-column align-items-center justify-content-center h-100">

    <header
        class="d-flex flex-column justify-content-center w-100 bg-for-menu bg-main menu-header p-3 position-fixed top-0">
      <form class="d-flex justify-content-center w-100">

        <div class="w-75 w-lg-50 d-flex flex-row justify-content-center">
          <input class="input-search h-100 p-0 m-0 outline-none border-0 " type="text" placeholder="Wyszukaj szpital"
                 v-model="search">
        </div>

      </form>

    </header>

    <div class="d-flex flex-column justify-content-center menu-logout">
      <a href="" class="bg-white-transparent border-round mt-2">
        <svg class="logout-btn" fill="#05a081" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
              d="M160 48C160 21.49 181.5 0 208 0C234.5 0 256 21.49 256 48C256 74.51 234.5 96 208 96C181.5 96 160 74.51 160 48V48zM112.7 205.4C97.41 212.2 85.42 224.6 79.22 240.1L77.71 243.9C71.15 260.3 52.53 268.3 36.12 261.7C19.71 255.1 11.73 236.5 18.29 220.1L19.8 216.3C32.19 185.4 56.18 160.5 86.66 146.9L97.66 142C118.5 132.8 140.1 128 163.7 128C208.3 128 248.5 154.8 265.6 195.9L280.1 232.7L302.3 243.4C318.1 251.3 324.5 270.5 316.6 286.3C308.7 302.1 289.5 308.5 273.7 300.6L247 287.3C236.7 282.1 228.6 273.4 224.2 262.8L214.6 239.8L195.3 305.3L244.8 359.4C250.2 365.3 254.1 372.4 256 380.2L279 472.2C283.3 489.4 272.9 506.8 255.8 511C238.6 515.3 221.2 504.9 216.1 487.8L194.9 399.6L124.3 322.5C109.5 306.4 103.1 283.9 109.6 262.8L126.5 199.3C125.6 199.7 124.6 200.1 123.7 200.5L112.7 205.4zM100.7 344.2L141.4 388.6L126.9 424.8C124.5 430.9 120.9 436.4 116.3 440.9L54.63 502.6C42.13 515.1 21.87 515.1 9.372 502.6C-3.124 490.1-3.124 469.9 9.372 457.4L68.73 398L93.69 335.6C95.84 338.6 98.17 341.4 100.7 344.2H100.7zM630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L550.6 358.6C538.1 371.1 517.9 371.1 505.4 358.6C492.9 346.1 492.9 325.9 505.4 313.4L530.7 288H384C366.3 288 352 273.7 352 256C352 238.3 366.3 224 384 224H530.7L505.4 198.6C492.9 186.1 492.9 165.9 505.4 153.4C517.9 140.9 538.1 140.9 550.6 153.4L630.6 233.4z"/>
        </svg>
      </a>
      <h2 class="font-small color-white font-weight-normal text-center " style="font-size: 9px; letter-spacing: 0.5px">
        Wyloguj</h2>
    </div>

<div class="mt-5 w-lg-75">
    <section class="my-5 w-100" v-if="hospitals?.length && hospitals">
      <div v-for="hospital in filteredList" v-bind:key="hospital.name"
           class="d-flex align-items-center p-3 my-3 w-100 mx-auto justify-content-center flex-column flex-md-row menu-hospital-box gap-lg-3">

        <div class="w-100 py-1 p-lg-3">
          <div class="w-100 d-flex flex-row p-2 justify-content-center align-items-center" style="gap:0.75rem">
            <svg width="30" fill="#05a081" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                  d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM368 360c0 13.25-10.75 24-24 24S320 373.3 320 360v-80H192v80C192 373.3 181.3 384 168 384S144 373.3 144 360v-208C144 138.8 154.8 128 168 128S192 138.8 192 152v80h128v-80C320 138.8 330.8 128 344 128s24 10.75 24 24V360z"/>
            </svg>
            <p style="margin: 0;">Nazwa szpitala</p>
          </div>
          <div style="font-weight:600" class="w-100 p-2 mt-1">{{ hospital.name }}</div>
        </div>

        <div class="w-100 py-1 p-lg-3">
          <div class="w-100 d-flex flex-row p-2 justify-content-center align-items-center" style="gap:0.75rem">
            <svg width="30" fill="#05a081" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                  d="M480 192H592C618.5 192 640 213.5 640 240V464C640 490.5 618.5 512 592 512H48C21.49 512 0 490.5 0 464V144C0 117.5 21.49 96 48 96H64V24C64 10.75 74.75 0 88 0C101.3 0 112 10.75 112 24V96H176V24C176 10.75 186.7 0 200 0C213.3 0 224 10.75 224 24V96H288V48C288 21.49 309.5 0 336 0H432C458.5 0 480 21.49 480 48V192zM576 368C576 359.2 568.8 352 560 352H528C519.2 352 512 359.2 512 368V400C512 408.8 519.2 416 528 416H560C568.8 416 576 408.8 576 400V368zM240 416C248.8 416 256 408.8 256 400V368C256 359.2 248.8 352 240 352H208C199.2 352 192 359.2 192 368V400C192 408.8 199.2 416 208 416H240zM128 368C128 359.2 120.8 352 112 352H80C71.16 352 64 359.2 64 368V400C64 408.8 71.16 416 80 416H112C120.8 416 128 408.8 128 400V368zM528 256C519.2 256 512 263.2 512 272V304C512 312.8 519.2 320 528 320H560C568.8 320 576 312.8 576 304V272C576 263.2 568.8 256 560 256H528zM256 176C256 167.2 248.8 160 240 160H208C199.2 160 192 167.2 192 176V208C192 216.8 199.2 224 208 224H240C248.8 224 256 216.8 256 208V176zM80 160C71.16 160 64 167.2 64 176V208C64 216.8 71.16 224 80 224H112C120.8 224 128 216.8 128 208V176C128 167.2 120.8 160 112 160H80zM256 272C256 263.2 248.8 256 240 256H208C199.2 256 192 263.2 192 272V304C192 312.8 199.2 320 208 320H240C248.8 320 256 312.8 256 304V272zM112 320C120.8 320 128 312.8 128 304V272C128 263.2 120.8 256 112 256H80C71.16 256 64 263.2 64 272V304C64 312.8 71.16 320 80 320H112zM416 272C416 263.2 408.8 256 400 256H368C359.2 256 352 263.2 352 272V304C352 312.8 359.2 320 368 320H400C408.8 320 416 312.8 416 304V272zM368 64C359.2 64 352 71.16 352 80V112C352 120.8 359.2 128 368 128H400C408.8 128 416 120.8 416 112V80C416 71.16 408.8 64 400 64H368zM416 176C416 167.2 408.8 160 400 160H368C359.2 160 352 167.2 352 176V208C352 216.8 359.2 224 368 224H400C408.8 224 416 216.8 416 208V176z"/>
            </svg>
            <p style="margin: 0;">Miejscowość</p>
          </div>
          <div style="font-weight:600" class="w-100 p-2 mt-1">{{ hospital.address.city }}</div>
        </div>

        <div class="w-100 py-1 p-lg-3">
          <div class="w-100 d-flex flex-row p-2 justify-content-center align-items-center" style="gap:0.75rem">
            <svg width="30" fill="#05a081" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                  d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/>
            </svg>
            <p style="margin: 0;">Adres</p>
          </div>
          <div style="font-weight:600" class="w-100 p-2 mt-1">ul. {{ hospital.address.street }} {{ hospital.address.streetNumber }} <br>
            {{ hospital.address.postalCode }}
          </div>
        </div>

        <div class="w-100 py-1 p-lg-3">
          <div class="w-100 d-flex flex-row p-2 justify-content-center align-items-center" style="gap:0.75rem">
            <svg width="30" fill="#05a081" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                  d="M160 80C160 112.8 140.3 140.1 112 153.3V241.1C130.8 230.2 152.7 224 176 224H272C307.3 224 336 195.3 336 160V153.3C307.7 140.1 288 112.8 288 80C288 35.82 323.8 0 368 0C412.2 0 448 35.82 448 80C448 112.8 428.3 140.1 400 153.3V160C400 230.7 342.7 288 272 288H176C140.7 288 112 316.7 112 352V358.7C140.3 371 160 399.2 160 432C160 476.2 124.2 512 80 512C35.82 512 0 476.2 0 432C0 399.2 19.75 371 48 358.7V153.3C19.75 140.1 0 112.8 0 80C0 35.82 35.82 0 80 0C124.2 0 160 35.82 160 80V80zM80 104C93.25 104 104 93.25 104 80C104 66.75 93.25 56 80 56C66.75 56 56 66.75 56 80C56 93.25 66.75 104 80 104zM368 56C354.7 56 344 66.75 344 80C344 93.25 354.7 104 368 104C381.3 104 392 93.25 392 80C392 66.75 381.3 56 368 56zM80 456C93.25 456 104 445.3 104 432C104 418.7 93.25 408 80 408C66.75 408 56 418.7 56 432C56 445.3 66.75 456 80 456z"/>
            </svg>
            <p style="margin: 0;">Oddziały</p>
          </div>
          <div v-for="department in hospital.departments" v-bind:key="department.id" class="">
            <div style="font-weight:600" class="w-100 d-flex flex-row mt-1 p-2 justify-content-center">
              {{ department.name }}
              <div class="ms-3">
                <svg width="15px" fill="green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                      d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex flex-column p-1">
          <div v-on:click="updateHospital(hospital.id)" class="d-flex flex-column justify-content-center action-button">
                        <span class="bg-transparent mt-2">
                            <svg class="menu-admin-form-button" fill="#05a081" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
                                d="M320.5 381.5C324.6 435.5 353 482.6 394.8 512H128.1C92.75 512 64.09 483.3 64.09 448V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L522.1 193.9C513.6 192.7 504.9 192 496 192C453.6 192 414.7 207 384.3 232L384 232H328V176C328 167.2 320.8 160 311.1 160H263.1C255.2 160 247.1 167.2 247.1 176V232H191.1C183.2 232 175.1 239.2 175.1 248V296C175.1 304.8 183.2 312 191.1 312H247.1V368C247.1 376.8 255.2 384 263.1 384H311.1C315.1 384 318 383.1 320.5 381.5H320.5zM328 312H329.1C328.7 313.1 328.4 314.3 328 315.4V312zM352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368zM496 464C509.3 464 520 453.3 520 440C520 426.7 509.3 416 496 416C482.7 416 472 426.7 472 440C472 453.3 482.7 464 496 464zM479.1 288V368C479.1 376.8 487.2 384 495.1 384C504.8 384 511.1 376.8 511.1 368V288C511.1 279.2 504.8 272 495.1 272C487.2 272 479.1 279.2 479.1 288z"/></svg>
                        </span>
            <h2 class="font-small color-wblack font-weight-normal text-center "
                style="font-size: 0.75rem; letter-spacing: 0.5px">Edytuj szpital</h2>
          </div>
          <div v-on:click="removeHospital(hospital.id)" class="d-flex flex-column justify-content-center action-button">
                        <span class="bg-transparent mt-2">
                            <svg class="menu-admin-form-button" fill="#05a081" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
                                d="M320.5 381.5C324.6 435.5 353 482.6 394.8 512H128.1C92.75 512 64.09 483.3 64.09 448V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L522.1 193.9C513.6 192.7 504.9 192 496 192C453.6 192 414.7 207 384.3 232L384 232H328V176C328 167.2 320.8 160 311.1 160H263.1C255.2 160 247.1 167.2 247.1 176V232H191.1C183.2 232 175.1 239.2 175.1 248V296C175.1 304.8 183.2 312 191.1 312H247.1V368C247.1 376.8 255.2 384 263.1 384H311.1C315.1 384 318 383.1 320.5 381.5H320.5zM328 312H329.1C328.7 313.1 328.4 314.3 328 315.4V312zM352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368zM555.3 331.3C561.6 325.1 561.6 314.9 555.3 308.7C549.1 302.4 538.9 302.4 532.7 308.7L496 345.4L459.3 308.7C453.1 302.4 442.9 302.4 436.7 308.7C430.4 314.9 430.4 325.1 436.7 331.3L473.4 368L436.7 404.7C430.4 410.9 430.4 421.1 436.7 427.3C442.9 433.6 453.1 433.6 459.3 427.3L496 390.6L532.7 427.3C538.9 433.6 549.1 433.6 555.3 427.3C561.6 421.1 561.6 410.9 555.3 404.7L518.6 368L555.3 331.3z"/></svg>
                        </span>
            <h2 class="font-small color-black font-weight-normal text-center "
                style="font-size: 0.75rem; letter-spacing: 0.5px">Usuń szpital</h2>
          </div>
          <div v-on:click="managementWards(hospital.id)"
               class="d-flex flex-column justify-content-center action-button">
                        <span class="bg-transparent mt-2">
                            <svg class="menu-admin-form-button" fill="#05a081" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
                                d="M96 318.3v1.689h1.689C97.12 319.4 96.56 318.9 96 318.3zM176 320c44.13 0 80-35.88 80-79.1s-35.88-79.1-80-79.1S96 195.9 96 240S131.9 320 176 320zM256 318.3C255.4 318.9 254.9 319.4 254.3 320H256V318.3zM544 160h-82.1L450.7 183.9C441.5 203.2 421.8 215.8 400 216c-21.23 0-40.97-12.31-50.3-31.35l-12.08-24.64H304c-8.836 0-16 7.161-16 15.1v175.1L64 352V80.01c0-8.834-7.164-15.1-16-15.1h-32c-8.836 0-16 7.163-16 15.1V496C0 504.8 7.164 512 16 512h32C56.84 512 64 504.8 64 496v-47.1h512V496c0 8.836 7.164 16 16 16h32c8.836 0 16-7.164 16-16V256C640 202.1 597 160 544 160zM624 48.01h-115.2l-24.88-37.31c-2.324-3.48-5.539-6.131-9.158-7.977c-1.172-.6016-2.486-.5508-3.738-.9512C468.8 1.035 466.5 0 464.1 0c-.625 0-1.25 .0254-1.875 .0781c-8.625 .6406-16.25 5.876-19.94 13.7l-42.72 90.81l-21.12-43.12c-4.027-8.223-12.39-13.44-21.54-13.44L208 48.02C199.2 48.01 192 55.18 192 64.02v15.99c0 8.836 7.163 15.1 15.1 16l133.1 .0091l36.46 74.55C382.5 178.8 390.8 184 400 184c9.219-.0781 17.78-5.438 21.72-13.78l45.91-97.52l8.406 12.62C480.5 91.1 487.1 96.01 496 96.01h128c8.836 0 16-7.164 16-16V64.01C640 55.18 632.8 48.01 624 48.01z"/></svg>
                        </span>
            <h2 class="font-small color-wblack font-weight-normal text-center "
                style="font-size: 0.75rem; letter-spacing: 0.5px">Zarządzaj oddziałami</h2>
          </div>
        </div>
      </div>
    </section>
    </div>


    <section class="box-hamburger d-lg-none">
      <button class="btn btn-form-green btn-menu" v-on:click="openMenu()">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
              d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/>
        </svg>
      </button>
    </section>
    <section class="h-100 w-100 menu-box fixed-bottom" id="menu" v-on:click="turnOffMenu()">

      <section
          class="d-flex flex-column flex-md-row justify-content-end justify-content-md-center align-items-center w-100 p-1 bg-transparent">
        <button class="btn btn-form-green btn-cross" v-on:click="turnOffMenu()">
          <svg fill="#fff" width="35" height="35" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
                d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
          </svg>

        </button>
        <div
            class="bg-for-menu bg-main justify-content-center align-items-center d-flex flex-column gap-0 flex-md-row menu-fixed-bottom-inner gap-0 gap-md-2 gap-lg-3 px-4 w-max-content">
          <MenuComponent/>
          <div class="d-flex flex-column justify-content-center">
            <a href="/#/adding-hospital" class="bg-transparent mt-2">
              <svg class="menu-fixed-button" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                    d="M192 48C192 21.49 213.5 0 240 0H400C426.5 0 448 21.49 448 48V512H368V432C368 405.5 346.5 384 320 384C293.5 384 272 405.5 272 432V512H192V48zM312 64C303.2 64 296 71.16 296 80V104H272C263.2 104 256 111.2 256 120V136C256 144.8 263.2 152 272 152H296V176C296 184.8 303.2 192 312 192H328C336.8 192 344 184.8 344 176V152H368C376.8 152 384 144.8 384 136V120C384 111.2 376.8 104 368 104H344V80C344 71.16 336.8 64 328 64H312zM160 96V512H48C21.49 512 0 490.5 0 464V320H80C88.84 320 96 312.8 96 304C96 295.2 88.84 288 80 288H0V224H80C88.84 224 96 216.8 96 208C96 199.2 88.84 192 80 192H0V144C0 117.5 21.49 96 48 96H160zM592 96C618.5 96 640 117.5 640 144V192H560C551.2 192 544 199.2 544 208C544 216.8 551.2 224 560 224H640V288H560C551.2 288 544 295.2 544 304C544 312.8 551.2 320 560 320H640V464C640 490.5 618.5 512 592 512H480V96H592z"/>
              </svg>
            </a>
            <h2 class="font-small color-white font-weight-normal text-center "
                style="font-size: 0.75rem; letter-spacing: 0.5px">Dodaj szpital</h2>
          </div>
        </div>
      </section>
    </section>

  </section>


</template>

<script>
import axios from 'axios';
import MenuComponent from "@/components/MenuComponent";

export default {
  components: {MenuComponent},
  data() {
    return {
      hospitals: [],
      search: '',
      userRole: ''
    }
  },

  methods: {
    checkRole() {
      if (this.userRole !== 'ADMIN') {
        this.$router.push({path: '/hospitals'})
      }
    },

    getAllHospitals() {
      axios.get('https://patient-service-api.herokuapp.com/hospital/all/details')
          .then(response => {
            if (response.status === 200)
              this.hospitals = response.data
          })
    },

    removeHospital(id) {
      axios.delete(`https://patient-service-api.herokuapp.com/hospital/delete/${id}`)
          .then(response => {
            if (response.status === 200) {
              this.getAllHospitals()
            }
          })
    },

    updateHospital(id) {
      this.$router.push({name: 'AdminHospitalEditing', params: {id: id}})
    },

    managementWards(id) {
      this.$router.push({name: 'AdminWardManagement', params: {id: id}})
    },
    openMenu() {
      const menu = document.querySelector('#menu')

      menu.style.bottom = "0rem"


    },
    turnOffMenu() {
      const menu = document.querySelector('#menu')

      menu.style.bottom = "-100vh"
    }
  },

  mounted() {
    this.userRole = localStorage.getItem('userRole');
    this.checkRole();
    this.getAllHospitals();
  },

  computed: {
    filteredList() {
      return this.hospitals.filter(hospital => {
        let deps = '';
        hospital.departments.forEach(value => {
          deps = deps + value.name + " "
        })
        return (hospital.name + " " + hospital.address.city + " " + hospital.address.street + " " + hospital.address.streetNumber + " " + hospital.address.postalCode + " " + deps).toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}

</script>

<style scoped>
.action-button:hover {
  cursor: pointer;
}

</style>