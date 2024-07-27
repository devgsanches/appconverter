const button = document.querySelector('button')
const select = document.getElementById('currency-select')

const dolar = 5.2
const euro = 5.9
const bitcoin = 384662.88

// Arrow function
const convertValues = () => {

  const inputReais = document.getElementById('input-price').value

  const realValueText = document.getElementById('real-value-text')

  const currencyValueText = document.getElementById('currency-value-text')


  realValueText.innerText = new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency: 'BRL' }
  ).format(inputReais)


  if (select.value === 'US$ Dólar Americano') {
    currencyValueText.innerText = new Intl.NumberFormat('en-US',
      { style: 'currency', currency: 'USD' }
    ).format(inputReais / dolar)
  }


  if (select.value === '€ Euro') {
    currencyValueText.innerText = new Intl.NumberFormat('de-DE',
      { style: 'currency', currency: 'EUR' }
    ).format(inputReais / euro)
  }

  if (select.value === 'Bitcoin') {
    currencyValueText.innerText = (inputReais / bitcoin)
  }
}

const changeCurrency = () => {
  const currencyName = document.getElementById('currency-name')
  const currencyImg = document.getElementById('currency-img')

  if (select.value === '€ Euro') {
    currencyName.innerText = "Euro"
    currencyImg.src = "./assets/euro.svg"
  }

  if (select.value === 'US$ Dólar Americano') {
    currencyName.innerText = "Dólar Americano"
    currencyImg.src = "./assets/estados-unidos.svg"
  }

  if (select.value === 'Bitcoin') {
    currencyName.innerText = "Bitcoin"
    currencyImg.src = "./assets/bitcoin.png"
  }


  convertValues()
}

/*
  temos que colocar o addEventListener depois da arrow function, porque se for antes, o JS irá tentar chamar uma função que segundo ele ainda não existe, pois lê de cima p baixo

  Quando uso uma arrow function (ou qualquer expressão de função), crio uma variável que armazena a função. Diferente das declarações de função, essas funções não são "hoisted" (elevadas) para o topo do escopo. 
  !Em vez disso, a variável é apenas declarada, e a função é atribuída a ela quando o código atinge essa linha.
*/

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)








