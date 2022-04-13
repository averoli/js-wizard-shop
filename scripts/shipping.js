//FECHAS DE ENVIO
const hoy = new Date();
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const meses = month[hoy.getMonth()];
const fecha = hoy.getDate() + " " + meses + " " + hoy.getFullYear();
const fechaDeEnvio = hoy.getDate() + 1 + " " + meses + " " + hoy.getFullYear() + " 20:00hs";
const fechaDeEnvioGratis =hoy.getDate() + 2 + " " + meses + " " + hoy.getFullYear() + " 20:00hs";
const datePremium = fecha + " 09:00hs" + " and " + fecha + " 20:00hs";
const dateExtra = fecha + " 09:00hs" + " and " + fechaDeEnvio;
const dateFree = fecha + " 09:00hs" + " and " + fechaDeEnvioGratis;
console.log(hoy.meses);

const inputPremium = document.querySelectorAll(".radioImput input[type='radio']");

///FECHA DE ENVIO PREMIUM ///

for (const radio of inputPremium) {
    radio.addEventListener("change" , showPremium);
}

const prueba = document.querySelector(".containerPremium");

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

// VALIDAR GIFT

const giftvalue = document.getElementById("gift-value");
const textAreaShipping = document.getElementById("textAreaShipping");


giftvalue.addEventListener("change" , showTextArea)

function showTextArea() {
    console.log("Gift " + giftvalue);
    console.log("textarea " + textAreaShipping);
    if(giftvalue.checked){
        textAreaShipping.disabled = false;
    }
    else{
        textAreaShipping.disabled = true;
    }

}

//NEXT BUTTON VALIDATIO

const buttonRadioFree = document.getElementById("free");
const buttonRadioExtra = document.getElementById("extra");
const buttonRadioPremium = document.getElementById("shipping-premium");

const nextButton = document.getElementById("nextButton");

nextButton.addEventListener("click", ButtonValidationShipping)

function ButtonValidationShipping(e){
    if(buttonRadioFree.checked || buttonRadioExtra.checked || buttonRadioPremium.checked ){
    }
    else{return alert('You must choose your shipping type')}
}

