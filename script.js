// Cotação de moedas do dia
const USD = 5.13
const EUR = 5.96
const GBP = 6.93

// Obtendo os elemeentos do formulário
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const footer = document.querySelector('main footer')

// Manipulando o input amount para receber somente números.
amount.addEventListener('input', () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, '')
})

// Captando o evento de submit (enviando) do formulário
form.onsubmit =  () => {
 event.preventDefault()

 switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "USD$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "EUR€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "GBP£")
      break
 }
}

// função para converter a moeda

function convertCurrency(amount, price, symbol) {
  try {
    //Aplica a classe que exibe o footer para mostar o resultado

    footer.classList.add("show-result")
  } catch (error) {

    // Remove a classe do footer removendo ele da tela

    console.log(error)
    footer.classList.remove("show-result")
    alert("Ocorreu um erro ao tentar converter a moeda. Tente novamente mais tarde.")
  }
}