<template>

    <section class="bg-white position-relative d-flex flex-column align-items-center justify-content-center h-100">

        <header
            class="d-flex flex-column justify-content-center w-100 bg-for-menu bg-main menu-header p-3 position-fixed top-0">
            <form class="d-flex justify-content-center w-100">

                <div class="w-75 w-lg-50 d-flex flex-row justify-content-center">
                    <input class="input-search h-100 p-0 m-0 outline-none border-0" v-model="search" type="text"
                        placeholder="Wyszukaj pacjenta">
                </div>

            </form>
        </header>

        <section class="my-5 w-75" v-if="patients?.length && patients">
            <div v-for="patient in filteredList" v-bind:key="patient.firstName"
                class="d-flex p-4 mt-3 w-100 mx-auto justify-content-center flex-row flex-md-row menu-hospital-box">
                <div class="w-100 py-1 p-lg-3">
                    <div class="w-100 d-flex flex-column flex-lg-row p-2 justify-content-center align-items-center">
                        <div class="w-100 my-2">
                            <div class="w-100 d-flex flex-row p-2 justify-content-center align-items-center"
                                style="gap:0.6rem">
                                <svg width="30" fill="#05a081" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path
                                        d="M292.7 342.3C289.7 345.3 288 349.4 288 353.7V416h62.34c4.264 0 8.35-1.703 11.35-4.727l156.9-158l-67.88-67.88L292.7 342.3zM568.5 167.4L536.6 135.5c-9.875-10-26-10-36 0l-27.25 27.25l67.88 67.88l27.25-27.25C578.5 193.4 578.5 177.3 568.5 167.4zM256 0v128h128L256 0zM256 448c-16.07-.2852-30.62-9.359-37.88-23.88c-2.875-5.875-8-6.5-10.12-6.5s-7.25 .625-10 6.125l-7.749 15.38C187.6 444.6 181.1 448 176 448H174.9c-6.5-.5-12-4.75-14-11L144 386.6L133.4 418.5C127.5 436.1 111 448 92.45 448H80C71.13 448 64 440.9 64 432S71.13 416 80 416h12.4c4.875 0 9.102-3.125 10.6-7.625l18.25-54.63C124.5 343.9 133.6 337.3 144 337.3s19.5 6.625 22.75 16.5l13.88 41.63c19.75-16.25 54.13-9.75 66 14.12C248.5 413.2 252.2 415.6 256 415.9V347c0-8.523 3.402-16.7 9.451-22.71L384 206.5V160H256c-17.67 0-32-14.33-32-32L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V448H256z" />
                                </svg>
                                <p class="m-0" style="color:#626466">Imię</p>


                            </div>
                            <div class="p-2 w-100 patient-name">{{patient.firstName}}</div>
                        </div>


                        <div class="w-100 my-2">
                            <div class="w-100 d-flex flex-row p-2 justify-content-center align-items-center"
                                style="gap:0.6rem">
                                <svg width="30" fill="#05a081" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path
                                        d="M192 160C192 177.7 177.7 192 160 192C142.3 192 128 177.7 128 160V128C128 74.98 170.1 32 224 32C277 32 320 74.98 320 128V135.8C320 156.6 318.8 177.4 316.4 198.1L438.8 161.3C450.2 157.9 462.6 161.1 470.1 169.7C479.3 178.3 482.1 190.8 478.4 202.1L460.4 255.1H544C561.7 255.1 576 270.3 576 287.1C576 305.7 561.7 319.1 544 319.1H416C405.7 319.1 396.1 315.1 390 306.7C384 298.4 382.4 287.6 385.6 277.9L398.1 240.4L303.7 268.7C291.9 321.5 272.2 372.2 245.3 419.2L231.4 443.5C218.5 466.1 194.5 480 168.5 480C128.5 480 95.1 447.5 95.1 407.5V335.6C95.1 293.2 123.8 255.8 164.4 243.7L248.8 218.3C253.6 191.1 255.1 163.5 255.1 135.8V128C255.1 110.3 241.7 96 223.1 96C206.3 96 191.1 110.3 191.1 128L192 160zM160 335.6V407.5C160 412.2 163.8 416 168.5 416C171.5 416 174.4 414.4 175.9 411.7L189.8 387.4C207.3 356.6 221.4 324.1 231.8 290.3L182.8 304.1C169.3 309 160 321.5 160 335.6V335.6zM24 368H64V407.5C64 410.4 64.11 413.2 64.34 416H24C10.75 416 0 405.3 0 392C0 378.7 10.75 368 24 368zM616 416H283.5C291.7 400.3 299.2 384.3 305.9 368H616C629.3 368 640 378.7 640 392C640 405.3 629.3 416 616 416z" />
                                </svg>
                                <p class="m-0" style="color:#626466">Nazwisko</p>
                            </div>
                            <div class="p-2 w-100 patient-name">{{patient.lastName}}</div>

                        </div>
                        <div class="w-100 my-2">
                            <div class="w-100 d-flex flex-row p-2 justify-content-center align-items-center"
                                style="gap:0.6rem">
                                <svg width="30" fill="#05a081" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path
                                        d="M320 192c0 17.69 14.31 31.1 32 31.1L416 224c17.69 0 32-14.31 32-32s-14.31-32-32-32V63.98c0-11.19-5.844-21.53-15.38-27.34c-9.531-5.781-21.41-6.188-31.34-1.062l-32 16.59c-15.69 8.125-21.81 27.44-13.69 43.13C329.3 106.3 340.4 112.6 352 112.6V160C334.3 160 320 174.3 320 192zM392 255.6c-48.6 0-88 39.4-88 88c0 36.44 22.15 67.7 53.71 81.07l-7.682 8.004c-10.72 11.16-10.34 28.88 .8125 39.56C356.3 477.4 363.3 480 370.2 480c7.344 0 14.72-2.875 20.19-8.625c69.61-72.53 89.6-85.39 89.6-127.8C480 294.1 440.6 255.6 392 255.6zM392 367.6c-13.23 0-24-10.77-24-24s10.77-24 24-24s24 10.77 24 24S405.2 367.6 392 367.6zM39.99 191.7c8.672 0 17.3-3.5 23.61-10.38L96 145.9v302c0 17.7 14.33 32.03 31.1 32.03s32-14.33 32-32.03V145.9L192.4 181.3C204.4 194.3 224.6 195.2 237.6 183.3c13.03-11.95 13.9-32.22 1.969-45.27L151.6 41.94c-12.12-13.26-35.06-13.26-47.19 0l-87.1 96.09C4.475 151.1 5.35 171.3 18.38 183.3C24.52 188.9 32.27 191.7 39.99 191.7z" />
                                </svg>
                                <p class="m-0" style="color:#626466">Pesel</p>
                            </div>
                            <div class="p-2 w-100 patient-name">{{patient.pesel}}</div>

                        </div>
                        <div class="w-100 my-2">
                            <div class="w-100 d-flex flex-row p-2 justify-content-center align-items-center"
                                style="gap:0.6rem">
                                <svg width="30" fill="#05a081" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path
                                        d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM80 256C71.16 256 64 263.2 64 272V368C64 376.8 71.16 384 80 384H176C184.8 384 192 376.8 192 368V272C192 263.2 184.8 256 176 256H80z" />
                                </svg>
                                <p class="m-0" style="color:#626466">Data urodzenia</p>
                            </div>
                            <div class="p-2 w-100 patient-name">{{patient.birthDate}}</div>

                        </div>
                        <div class="w-100 my-2">
                            <div class="w-100 d-flex flex-row p-2 justify-content-center align-items-center"
                                style="gap:0.6rem">
                                <svg width="30" fill="#05a081" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                    <path
                                        d="M256 384H208v-35.05C289.9 333.9 352 262.3 352 176c0-97.2-78.8-176-176-176c-97.2 0-176 78.8-176 176c0 86.26 62.1 157.9 144 172.1v35.05H96c-8.836 0-16 7.162-16 16v32c0 8.836 7.164 16 16 16h48v48c0 8.836 7.164 16 16 16h32c8.838 0 16-7.164 16-16v-48H256c8.838 0 16-7.164 16-16v-32C272 391.2 264.8 384 256 384zM176 272c-52.93 0-96-43.07-96-96c0-52.94 43.07-96 96-96c52.94 0 96 43.06 96 96C272 228.9 228.9 272 176 272zM624 0h-112.4c-21.38 0-32.09 25.85-16.97 40.97l29.56 29.56l-24.55 24.55c-29.97-20.66-64.81-31.05-99.74-31.05c-15.18 0-30.42 2.225-45.19 6.132c13.55 22.8 22.82 48.36 26.82 75.67c6.088-1.184 12.27-1.785 18.45-1.785c24.58 0 49.17 9.357 67.88 28.07c37.43 37.43 37.43 98.33 0 135.8c-18.71 18.71-43.3 28.07-67.88 28.07c-23.55 0-46.96-8.832-65.35-26.01c-15.92 18.84-34.93 35.1-56.75 47.35c11.45 5.898 20.17 16.3 23.97 28.82C331.5 406 365.7 416 400 416c45.04 0 90.08-17.18 124.5-51.55c60.99-60.99 67.73-155.6 20.47-224.1l24.55-24.55l29.56 29.56c4.889 4.889 10.9 7.078 16.8 7.078C628.2 152.4 640 142.8 640 128.4V16C640 7.164 632.8 0 624 0z" />
                                </svg>
                                <p class="m-0" style="color:#626466">Płeć</p>
                            </div>
                            <div class="p-2 w-100 patient-name">{{patient.gender}}</div>

                        </div>
                    </div>
                </div>
            </div>

        </section>

        <section
            class="fixed-bottom d-flex flex-row justify-content-center align-items-center w-100 p-1 bg-transparent">

            <div
                class="bg-for-menu bg-main justify-content-center align-items-center d-flex flex-row menu-fixed-bottom-inner px-4 w-max-content">
                <div class="d-flex flex-column justify-content-center">
                    <a href="" class="bg-transparent mt-2">
                        <svg class="menu-fixed-button" fill="#fff" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512">
                            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                d="M192 48C192 21.49 213.5 0 240 0H400C426.5 0 448 21.49 448 48V512H368V432C368 405.5 346.5 384 320 384C293.5 384 272 405.5 272 432V512H192V48zM312 64C303.2 64 296 71.16 296 80V104H272C263.2 104 256 111.2 256 120V136C256 144.8 263.2 152 272 152H296V176C296 184.8 303.2 192 312 192H328C336.8 192 344 184.8 344 176V152H368C376.8 152 384 144.8 384 136V120C384 111.2 376.8 104 368 104H344V80C344 71.16 336.8 64 328 64H312zM160 96V512H48C21.49 512 0 490.5 0 464V320H80C88.84 320 96 312.8 96 304C96 295.2 88.84 288 80 288H0V224H80C88.84 224 96 216.8 96 208C96 199.2 88.84 192 80 192H0V144C0 117.5 21.49 96 48 96H160zM592 96C618.5 96 640 117.5 640 144V192H560C551.2 192 544 199.2 544 208C544 216.8 551.2 224 560 224H640V288H560C551.2 288 544 295.2 544 304C544 312.8 551.2 320 560 320H640V464C640 490.5 618.5 512 592 512H480V96H592z" />
                        </svg>
                    </a>
                    <h2 class="font-small color-white font-weight-normal text-center "
                        style="font-size: 0.75rem;">Dodaj szpital</h2>
                </div>

                <div class="d-flex flex-column justify-content-center">
                    <a href="" class="bg-transparent mt-2">
                        <svg class="menu-fixed-button" fill="#fff" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512">
                            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM616 200h-48v-48C568 138.8 557.3 128 544 128s-24 10.75-24 24v48h-48C458.8 200 448 210.8 448 224s10.75 24 24 24h48v48C520 309.3 530.8 320 544 320s24-10.75 24-24v-48h48C629.3 248 640 237.3 640 224S629.3 200 616 200z" />
                        </svg>
                    </a>
                    <h2 class="font-small color-white font-weight-normal text-center"
                        style="font-size: 0.75rem;">Dodaj pacjenta</h2>
                </div>
            </div>

        </section>
    </section>



</template>

<script>
    // import {ref} from "vue";
    // let search = document.getElementById('search')

    import axios from 'axios';
    // import cors from 'cors';
    // import app from 'vue';
    export default {
        data() {
            return {
                patients: [],
                search: ""
            }
        },



        mounted() {
            axios.get('https://patient-service-api.herokuapp.com/patient')
                .then(response => {
                    this.patients = response.data
                    // console.log(this.patients[0])
                })
        },

        computed: {
            filteredList() {
                return this.patients.filter(patient => {
                    return patient.firstName.toLowerCase().includes(this.search.toLowerCase())
                })
            }
        }
    }
</script>