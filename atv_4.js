//Somar de valores

var valorProduto = prompt("Informe o valor do produto: ")
valorProduto = parseInt(valorProduto)

var valorICMS = prompt("Informe o valor do ICMS: ")
valorICMS = parseInt(valorICMS)


var valorTotal = (valorProduto + valorICMS)

alert(" O valor do produto é R$ " + valorTotal)


var desconto = prompt ("informe o desconto: ")
desconto = parseInt(desconto)

var valorTotalDesconto = (valorTotal - desconto)

alert("O valor total da compra R$ " + valorTotalDesconto)



  




