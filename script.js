//Condições com && (and) todas as condições devem ser TRUE(VERDADEIRO)

//Comentar o código todo - CRTL + K + C

var nome = prompt("Informe seu nome: ")
var sobrenome = prompt("Informe seu sobrenome: ")

//Criar uma validação para exibir apenas se o usuario informar nome e senha

if ( (nome !="") && (sobrenome !="") ){
    alert("Nome: " + nome + "\nSobrenome: " + sobrenome)

}

else{

    alert("Informações invalidas")
}

/*------------------------------*/

/* Condições com || - apenas uma condição seja TRUE(VERDADEIRA)*/

if(nome == "LUIS" || nome == "Luis" || nome == "luis"){
    alert("Nome inserido é Luis")
}
else{
    alert("O nome inserido não é 'Luis'")
}

//Condição com !(NOT)

var eVazio = (nome =="") //true ou false.
 /* !NOT = negativa a condição*/

 if(!eVazio){
    alert("Nome: " + nome)
 }
else{
    alert("Nome é vazio")
}

/*------------------------------*/

function numeroPar(){

var numero = prompt ("Insira um número: ")

if(numero % 2 == 0){
alert ("Esse número é par")
}

else{
    alert("Esse número é impar")
}
}
numeroPar()
numeroPar()
numeroPar()

//Declaração de variável para armazenar o resultado da soma
var resultado = 0

function somar(primeiroNumero, segundoNumero) {
 resultado = primeiroNumero + segundoNumero
}

function mostrar(mensagem) {
 console.log(mensagem)
}
//Chamamos primeiro para somar e depois para mostrar
somar(6,3)
mostrar(resultado)
alert(resultado)

//CALCULADORA

function calculadora(primeiroNumero, segundoNumero, operacao){
    if( operacao == "+"){
        return primeiroNumero + segundoNumero
    }
    if( operacao == "-"){
        return primeiroNumero - segundoNumero
    }

    if( operacao == "*"){
        return primeiroNumero * segundoNumero
    }

    if( operacao == "/"){
        return primeiroNumero / segundoNumero
    }

    else{
        return 0;
    }
}

console.log(calculadora(30, 10, "-"))

//***************************//


