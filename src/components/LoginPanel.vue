<template>

<section class="d-flex flex-column flex-lg-row vh-100">
    <div class="h-100 w-100 d-flex justify-content-center align-items-center bg-main">
        <img class="img-fluid p-lg-5 mw-sm-450" src="../assets/hospital_green.svg">
    </div>
    <div class="h-100 w-100 d-flex justify-content-center align-items-center bg-login p-4">
        <div class="login bg-white">
        <h1 class="font-medium">Dzień dobry.</h1>
        <p class="font-small mb-0 mt-2">Wprowadź login i hasło.</p>
        <form>
            <input class="input-form" type="email" placeholder="login" onfocus="this.placeholder=''" onblur="this.placeholder='login'"><br/>
            <input class="input-form" type="password" placeholder="hasło" onfocus="this.placeholder=''" onblur="this.placeholder='hasło'"><br/>
                <router-link to="/hospitals">
                    <button class="btn-form btn-form-green p-3 text-decoration-none mt-2" type="submit">Zaloguj się</button>
                </router-link> 
        </form>
        </div>
    </div>
</section>
</template>

<script>
export default {
  name: 'LoginPanel'
}
</script>