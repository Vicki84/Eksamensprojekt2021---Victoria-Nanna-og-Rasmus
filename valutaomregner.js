const api_url = 'http://api.exchangeratesapi.io/v1/latest?access_key=808c330fd03e791ededfecee53e2e3e3'
async function rasmus() {
const response = await fetch(api_url)

const data = await response.json();
let {DKK, EUR} = data.rates
let currency = 'DKK= ' + DKK + " EUR= " + EUR
console.log(currency)
}

rasmus()