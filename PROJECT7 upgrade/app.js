function toCelcius(fahrenheit)
{
    let value = (fahrenheit - 32) * 5 / 9
    return value.toFixed(2) + " Ongsa Celcius";
}
function display(elementID, value)
{
    document.getElementById(elementID).innerHTML = value
}
function toFahrenheit(celcius)
{
    let value = (celcius * 1.8) + 32
    return value.toFixed(2) + " Ongsa Fahrenheit";
}
function toCelciusProgram(value)
{
    alert(toCelcius(value))
}
function toFahrenheitProgram(value)
{
    alert(toFahrenheit(value))
}
