// Cotação de moedas do dia
const USD = 5.13
const EUR = 5.96
const GBP = 6.93

// Obtem os elemeentos do formulário
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const footer = document.querySelector('main footer')
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipula o input amount para receber somente números.
amount.addEventListener('input', () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, '')
})

// Capta o evento de submit (enviando) do formulário
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
    // Mostra a cotação da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    //calcula o total
    let total = amount * price

    // verifica se o resultado é (ou não) um número
    if(isNaN(total)){
      return alert ("Por favor, digite o valor corretamente para converter.")
    }

    //formatar o valor total
    total = formatCurrencyBRL(total).replace("R$", "")

    // mostra resultado total
    result.textContent = `${total} REAIS`

    //Aplica a classe que exibe o footer para mostar o resultado
    footer.classList.add("show-result")
  } catch (error) {

    // Remove a classe do footer removendo ele da tela

    console.log(error)
    footer.classList.remove("show-result")
    alert("Ocorreu um erro ao tentar converter a moeda. Tente novamente mais tarde.")
  }
}

// Formata a moeda em reais.

function formatCurrencyBRL(value){

  //Converte para nùmero para utilizar o to LocaleString para formatar no padrão BRL
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}