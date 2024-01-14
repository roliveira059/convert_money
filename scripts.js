const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value 
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
    const currencyOption = document.querySelector(".currency-option")
    
    const dolarToday = 5.2
    const euroToday = 6.2

    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", 
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
        // const currencyOptionDolar = document.querySelector(".currency-option")
        currencyOption.innerHTML = "Dólar"
    }
    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", 
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
        currencyOption.innerHTML = "Euro"
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", 
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyOptionName = document.querySelector(".currency-option")
    const currencyOptionImg = document.querySelector(".img-option")

    if(currencySelect.value == "dolar"){
        currencyOptionName.innerHTML = "Dólar americano"
        currencyOptionImg.src = "./assets/dolar.png"
    }

    if(currencySelect.value == "euro"){
        currencyOptionName.innerHTML = "Euro"
        currencyOptionImg.src = "./assets/euro.png"
    }
    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
