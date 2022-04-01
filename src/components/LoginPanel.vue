<template>

<section class="d-flex flex-column flex-lg-row vh-100">
    <div class="left h-100 w-100 d-flex justify-content-center align-items-center bg-default">
        <img class="img-fluid p-lg-5" src="../assets/hospital_logo_v.2(red).svg">
    </div>
    <div class="right h-100 w-100 d-flex justify-content-center align-items-center bg-default">
        <div class="login">
        <h1 class="font-medium">Dzień dobry.</h1>
        <p class="font-small">Wprowadź login i hasło.</p>
        <form>
            <input type="text" placeholder="login" onfocus="this.placeholder=''" onblur="this.placeholder='login'"><br/>
            <input type="password" placeholder="hasło" onfocus="this.placeholder=''" onblur="this.placeholder='hasło'"><br/>
            <input type="submit" value="Zaloguj się">
        </form>
        </div>
    </div>
    <!--    <div class="footer font-smallest">System Obsługi Pacjentów &copy; 2022</div>-->
</section>
</template>

<style>

.login
{
    text-align: left;
    margin: 0 auto;
    background-color: #548cff;
    width: 75%;
    padding: 5%;
    border-radius: 15px;
    -webkit-box-shadow: 10px 9px 9px 0px rgba(66, 68, 90, 1);
    -moz-box-shadow: 10px 9px 9px 0px rgba(66, 68, 90, 1);
    box-shadow: 10px 9px 9px 0px rgba(66, 68, 90, 1);
}
input[type=text],
input[type=password]
{
    width: 100%;
    background-color: #efefef;
    border: 2px solid #ddd;
    border-radius: 5px;
    padding: 2%;
    box-sizing: border-box;
    outline: none; /* wyłączenie czarnej obwódki */
    margin-top: 2%;
}
input[type=text]:focus,
input[type=password]:focus
{
    border: 2px solid #077262;
    background-color: ##bdbdbd;
}
input[type=submit]
{
    width: 100%;
    background-color: #077262;
    color: white;
    padding: 2%;
    margin-top: 3%;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    letter-spacing: 3%;
    outline: none;
}
input[type=submit]:hover
{
    background-color: #c43d48;
}
input::-webkit-input-placeholder
{
    color:#999;
}
</style>