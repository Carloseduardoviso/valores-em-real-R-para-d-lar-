function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor)

  var valorEmReal = valorEmDolarNumerico * 5.16
  console.log(valorEmReal);
  
  var elementoValorConvertido = document.getElementById("valorConvertido")
  var valorConvertido = "O resultado em dólar é $" + valorEmReal
  elementoValorConvertido.innerHTML = valorConvertido
}