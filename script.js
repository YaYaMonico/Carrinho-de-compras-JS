// -----------------Variáveis/Dados----------------- //
// selecionar o elemento soma
let btnAdiconarProduto01 = document.getElementById("btn-adicionar-produto-01");
console.log(btnAdiconarProduto01);
 
// selecionar o elemento subtrai
let btnSubtrairProduto01 = document.getElementById("btn-subtrair-produto-01");
 
//selecionar a qtd do input
let quantidadeProduto01 = document.querySelector("#quantidade-produto-01");
console.log(quantidadeProduto01);
 
// criar o objeto do subtotalInfo
let subtotalInfo = {
    quantidade: 1,
    valor: 40.00,
};
 
let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
console.log(quantidadeSubtotal);
let valorSubtotal = document.getElementById("valor-subtotal");
console.log(valorSubtotal);
 
// -----------------Função----------------- //
// Função para atualizar o subtotal no DOM
function atualizarSubtotal(){
    quantidadeSubtotal.innerText = subtotalInfo.quantidade;
    valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
};
 
// Função para adicionar produto
function adicionarUm(){
    quantidadeProduto01.value = Number(quantidadeProduto01.value) + 1;
 
    // calcular o subtotal
    subtotalInfo.quantidade += 1;
 
    subtotalInfo.valor = 40.00 * subtotalInfo.quantidade;
 
    atualizarSubtotal();
   
};
 // Função para retirar um produto
 function subtrairUm(){
 
    if(subtotalInfo.quantidade > 0 && quantidadeProduto01.value > 0){

        quantidadeProduto01.value = Number(quantidadeProduto01.value) - 1;
        subtotalInfo.quantidade -= 1;
 
        subtotalInfo.valor = 40.00 * subtotalInfo.quantidade;
 
        atualizarSubtotal();
    }
 
}
 
console.log(typeof quantidadeProduto01.value);
 
// -----------------Eventos----------------- //
btnAdiconarProduto01.addEventListener("click", adicionarUm);
btnSubtrairProduto01.addEventListener("click", subtrairUm);
atualizarSubtotal();
 