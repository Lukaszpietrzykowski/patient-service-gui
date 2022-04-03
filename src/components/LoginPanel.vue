<template>

<section class="d-flex flex-column flex-lg-row vh-100">
    <div class="left h-100 w-100 d-flex justify-content-center align-items-center bg-for-menu">
        <img class="img-fluid p-lg-5 mw-sm-450" src="../assets/hospital_green.svg">
    </div>
    <div class="right h-100 w-100 d-flex justify-content-center align-items-center bg-login">
        <div class="login bg-white">
        <h1 class="font-medium">Dzień dobry.</h1>
        <p class="font-small mb-0 mt-2">Wprowadź login i hasło.</p>
        <form>
            <input type="text" placeholder="login" onfocus="this.placeholder=''" onblur="this.placeholder='login'"><br/>
            <input type="password" placeholder="hasło" onfocus="this.placeholder=''" onblur="this.placeholder='hasło'"><br/>
            <input type="submit" value="Zaloguj się">
        </form>
        </div>
    </div>
</section>
</template>