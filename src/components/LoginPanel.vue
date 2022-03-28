<template>

<section>

<div id="container">
    <div id="left">
        <div id="image"></div>
    </div>
    <div id="right">
        <div id="login">
        <h1>Dzień dobry.</h1>
        <p>Wprowadź login i hasło.</p>
        <form>
            <input type="text" placeholder="login" onfocus="this.placeholder=''" onblur="this.placeholder='login'"><br/>
            <input type="password" placeholder="hasło" onfocus="this.placeholder=''" onblur="this.placeholder='hasło'"><br/>
            <input type="submit" value="Zaloguj się">
        </form>
        </div>
    </div>
</div>
</section>

</template>

<style>
/*do uzupełnienia:
- logo SOP
- napis obok logo nad szpitalem SYSTEM OBSŁUGI PACJENTÓW
*/
#container{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
#left{
    float:left;
    width: 50%;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color: #00bfba;
    text-align: left;
    z-index: 1;
    box-shadow: 5px 5px 10px;
}
#right{
    float: right;
    width: 50%;
    height: 100vh;
    background-color: #3075ff;
    margin: 0 auto;
    padding: 0;
    display: flex;
    justify-content: center;
	align-items: center;
    z-index: 2;
    box-shadow: 10px 10px 5px lightblue;
}
#image {
    width: 100%;
    height: 100%;
    background: url('../assets/img02.svg') no-repeat center;
    background-size: 80%;
}
#login
{
    text-align: left;
    margin: 0 auto;
    background-color: #00bfba;
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
    background-color: #055040;
}
input::-webkit-input-placeholder
{
    color:#999;
}
p{
    font-size: x-large;
}
</style>