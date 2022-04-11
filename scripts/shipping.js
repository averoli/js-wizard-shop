///FECHAS DE ENVIOS///
const hoy = new Date();
const fecha = hoy.getDate() + ' de Abril ' + hoy.getFullYear();
const fechaDeEnvio = hoy.getDate() + 1 + ' de Abril ' + hoy.getFullYear() + " 20:00hs";
const fechaDeEnvioGratis =hoy.getDate() + 2 + ' de Abril ' + hoy.getFullYear() + " 20:00hs";
const datePremium = fecha + " 09:00hs" + " and " + fecha + " 20:00hs";
const dateExtra = fecha + " 09:00hs" + " and " + fechaDeEnvio;
const dateFree = fecha + " 09:00hs" + " and " + fechaDeEnvioGratis;

const inputPremium = document.querySelectorAll(".radioImput input[type='radio']");

///FECHA DE ENVIO PREMIUM ///

for (const radio of inputPremium) {
    radio.addEventListener("change" , showPremium);
}

const prueba = document.querySelector(".containerPrueba");

function showPremium(e) {
    console.log(e.target);
    if(e.target.id === "shipping-premium"){
        prueba.style.display = "block";
        const premiumDate = document.getElementById("premiumDate");
        premiumDate.textContent = `Between: ${datePremium}`;

    }
    else{
        prueba.style.display = "none";
    }
}


///FECHA DE ENVIO 48HS ///

for (const radio of inputPremium) {
    radio.addEventListener("change" , showExtra);
}

const sendExtra = document.querySelector(".containerExtra");

function showExtra(e) {
    console.log(e.target);
    if(e.target.id === "extra"){
        sendExtra.style.display = "block";
        const extraDate = document.getElementById("extraDate");
        extraDate.textContent = `Between: ${dateExtra}`;
    }
    else{
        sendExtra.style.display = "none";
    }
}

///FECHA DE ENVIO FREE ///

for (const radio of inputPremium) {
    radio.addEventListener("change" , showFree);
}

const sendFree = document.querySelector(".containerFree");

function showFree(e) {
    console.log(e.target);
    if(e.target.id === "free"){
        sendFree.style.display = "block";
        const freeDate = document.getElementById("freeDate");
        freeDate.textContent = `Between: ${dateFree}`;
    }
    else{
        sendFree.style.display = "none";
    }
}