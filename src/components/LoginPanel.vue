<template>

<section class="bg-white d-flex justify-content-center vh-100 w-100 align-items-center flex-column flex-md-row-reverse">

    <div class="w-100 d-flex justify-content-center align-items-center h-100">
        <img src="../assets/logo.png" class="img-fluid logo">
    </div>
    
    <div class="w-100 d-flex justify-content-center align-items-center h-100 bg-dark-red flex-column">
        <h1 class="font-medium color-white font-weight-bold text-center text-lg-start w-75 mb-1">Witamy!</h1>
        <h2 class="font-small color-white font-weight-bold text-center text-lg-start w-75 mb-4">Zaloguj się.</h2>
        <form class="d-flex justify-content-center align-items-center flex-column flex-lg-row w-75 w-lg-75" method="POST" action="">
            
            <div class="mr-2 w-100 h-100">
                <input class="form-control mb-2" type="email" id="login" name="login" placeholder="Login" required>
                
                <input class="form-control mt-2" type="password" id="password" name="password" placeholder="Password" required>
            </div>
                
                
            <button class="btn btn-black mx-2 w-100 h-100 mt-3 mt-lg-0 w-lg-50" type="submit" name="submit">Log In</button>

        </form>
    </div>
</section>

</template>