///FECHAS DE ENVIOS///
const hoy = new Date();
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const meses = month[hoy.getMonth()];
const fecha = hoy.getDate() + " " + meses + " " + hoy.getFullYear();
const fechaDeEnvio = hoy.getDate() + 1 + " " + meses + " " + hoy.getFullYear() + " 20:00hs";
const fechaDeEnvioGratis =hoy.getDate() + 2 + " " + meses + " " + hoy.getFullYear() + " 20:00hs";

///FECHAS DE EXTRA///
const extraDateSend = document.getElementById("extraDateSend");
const datePremium = fecha + " 09:00hs"
const dateFinally = fecha + " 20:00hs"

///FECHAS DE FREE//
const freeDateSend = document.getElementById("freeDateSend")
const dateExtra = fecha + " 09:00hs" ;
const dateExtraFinally = fechaDeEnvio;

///FECHAS DE PREMIUM///
const premiumDateSend = document.getElementById("premiumDateSend");
const dateFree = fecha + " 09:00hs" ;
const freeDateFinally = fechaDeEnvioGratis;

const inputPremium = document.querySelectorAll(".radioImput input[type='radio']");

///FECHA DE ENVIO PREMIUM ///

for (const radio of inputPremium) {
    radio.addEventListener("change" , showPremium);
}

const containerPremium = document.querySelector(".containerPremium");

function showPremium(e) {
    console.log(e.target);
    if(e.target.id === "shipping-premium"){
        containerPremium.style.display = "block";
        const premiumDate = document.getElementById("premiumDate");
        premiumDate.textContent = `Between: ${datePremium}`;
        premiumDateSend.textContent = `and ${dateFinally}`;
    }
    else{
        containerPremium.style.display = "none";
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
        extraDateSend.textContent = `and ${dateExtraFinally}`;
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
        freeDateSend.textContent = `and ${freeDateFinally}`;
    }
    else{
        sendFree.style.display = "none";
    }
}

// VALIDARCION SHIPPING

function validar(){
    let radioInputCheck= inputPremium.value

    if( radioInputCheck == null || radioInputCheck.length == 0) {
        alert('Error, rellena el campo nombre');
    return false;
    }

    if(!registro.checked ){
        alert('Debe aceptar el registro');
        return false;
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

// CHANGE BUTTON INPUT FILE

function inputChangeFile(){
    const inputFile = document.getElementById('file-button').files[0].name;
    document.getElementById('info').innerHTML = inputFile;
}

