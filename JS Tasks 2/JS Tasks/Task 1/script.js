/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
function getInput() {
    let kilos = document.getElementById('search').value;
    let pounds = kilos * 2.2046;
    let grams = kilos / 0.0010000;
    let ounces = kilos * 35.274;


    document.getElementById('Pounds').innerHTML = pounds;
    document.getElementById('Grams').innerHTML = grams;
    document.getElementById('Ounces').innerHTML = ounces;

}