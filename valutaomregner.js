const api_url = 'http://api.exchangeratesapi.io/v1/latest?access_key=808c330fd03e791ededfecee53e2e3e3'
async function omregner(form) {
        const response = await fetch(api_url)
        const data = await response.json()
        let valuta1 = form.list1.selectedIndex, valuta2 = form.list2.selectedIndex, valuta1Name, valuta2Name, valutaValue = form.inputbox1.value, valutaResult

    switch (valuta1) {
        case 0:
            valuta1Name = data.rates.DKK;
            break;
        case 1:
            valuta1Name = data.rates.EUR;
            break;
        case 2:
            valuta1Name = data.rates.USD;
            break;
        case 3:
            valuta1Name = data.rates.GBP;
            break;
    }

    switch (valuta2) {
        case 0:
            valuta2Name = data.rates.DKK;
            break;
        case 1:
            valuta2Name = data.rates.EUR;
            break;
        case 2:
            valuta2Name = data.rates.USD;
            break;
        case 3:
            valuta2Name = data.rates.GBP;
            break;
    }

    valutaResult = valutaValue / valuta1Name * valuta2Name;
    valutaResult = valutaResult.toString().substring(0,6);
    form.inputbox2.value = valutaResult;
}