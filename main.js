var from_value = document.querySelector(".from-value");
var to_value = document.querySelector(".to-value");
var from_select = document.querySelector(".from-select");
var to_select = document.querySelector(".to-select");

from_value.addEventListener("input", handleConversion); //first input field
from_value.addEventListener("change", handleConversion); //when first input field value change
from_select.addEventListener("change", handleConversion); //when the first select field change
to_value.addEventListener("input", handleConversion); //second input field
to_value.addEventListener("change", handleConversion); //when second input field value change
to_select.addEventListener("change", handleConversion); //when the second select field change

function handleConversion() {
    //convert from celcius start
    if (from_select.value == "celcius" & to_select.value == "celcius") {
        to_value.value = celcius(from_value.value, to_select.value);
        //console.log("value in celcius: " + celcius(from_value.value, to_select.value));
    } else if (from_select.value == "celcius" & to_select.value == "fahrenheit") {
        to_value.value = celcius(from_value.value, to_select.value);
        //console.log("value in fahrenheit: " + fahrenheit(from_value.value, to_select.value));
    } else if (from_select.value == "celcius" & to_select.value == "kelvin") {
        to_value.value = celcius(from_value.value, to_select.value);
        //console.log("value in kelvin: " + kelvin(from_value.value, to_select.value));
    }
    //convert from celcius end
    //convert to fahrenheit start
    if (from_select.value == "fahrenheit" & to_select.value == "celcius") {
        to_value.value = fahrenheit(from_value.value, to_select.value);
        //console.log("value in celcius: " + celcius(from_value.value, to_select.value));
    } else if (from_select.value == "fahrenheit" & to_select.value == "fahrenheit") {
        to_value.value = fahrenheit(from_value.value, to_select.value);
        //console.log("value in fahrenheit: " + fahrenheit(from_value.value, to_select.value));
    } else if (from_select.value == "fahrenheit" & to_select.value == "kelvin") {
        to_value.value = fahrenheit(from_value.value, to_select.value);
        //console.log("value in kelvin: " + kelvin(from_value.value, to_select.value));
    }
    //convert to fahrenheit end
    //convert to kelvin start
    if (from_select.value == "kelvin" & to_select.value == "celcius") {
        to_value.value = kelvin(from_value.value, to_select.value);
        //console.log("value in celcius: " + celcius(from_value.value, to_select.value));
    } else if (from_select.value == "kelvin" & to_select.value == "fahrenheit") {
        to_value.value = kelvin(from_value.value, to_select.value);
        //console.log("value in fahrenheit: " + fahrenheit(from_value.value, to_select.value));
    } else if (from_select.value == "kelvin" & to_select.value == "kelvin") {
        to_value.value = kelvin(from_value.value, to_select.value);
        //console.log("value in kelvin: " + kelvin(from_value.value, to_select.value));
    }
}

//function to convert value from celcius
function celcius(value, type) {
    if (type == "fahrenheit") {
        return ((parseFloat(value) * 1.8) + 32);
    } else if (type == "kelvin") {
        return (parseFloat(value) + 273.15);
    } else {
        return parseFloat(value);
    }
}


//function to convert value from fahrenheit
function fahrenheit(value, type) {
    if (type == "celcius") {
        return ((parseFloat(value) - 32) / 1.8);
    } else if (type == "kelvin") {
        return (((parseFloat(value) - 32) / 1.8) + 273.15);
    } else {
        return parseFloat(value);
    }
}

//function to convert value from kelvin
function kelvin(value, type) {
    if (type == "celcius") {
        return (parseFloat(value) - 273.15);
    } else if (type == "fahrenheit") {
        return (((parseFloat(value) - 273.15) * 1.8) + 32);
    } else {
        return parseFloat(value);
    }
}