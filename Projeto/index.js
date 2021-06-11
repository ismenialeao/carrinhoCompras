console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('     Ismênia Leão                                  ')
console.log('--------------------------------------')


const entrada = require('readline-sync') 
const carrinho = require('./database') 
const {produtos} = carrinho
const carrinhox = []

const categoria = entrada.question (' Gostaria de encontrar produtos por categorias (S/N)?')

if( categoria.toLocaleUpperCase() == 'S'){
    console.log('-------------------------------------------')

    console.log('A taleba com as categorias disponiveis são são:') 

    produtos.sort((a, b) =>a.preco - b.preco)
    console.table(produtos)
    

    console.log('-------------------------------------------')

    const idx = entrada.question('Qual id voce escolhe?')
    const escolha = produtos.filter( item => item.id == idx ) 
    console.table(escolha)
    
    
    //let categorias = entrada.question('Gostaria de mais algum produto?(S/N)')   
  
}  
    
else{
    ( categoria.toLocaleUpperCase() !== 'S' )
    console.log('Essas são todas as categorias e produtos disponiveis:')
    console.table(produtos)
}
const array = new Array() // para contruir um novo elemento

class Pedido {
    constructor(array){
        this.productor = array
        this.subTotal = 0 
        this.valorTotal = 0
        this.totalItens = 0
}    }

let compras
quantidadeItem= parseInt(entrada.question('Digite quantidade desejada:'))
 for( i= 0; i < 1000; i ++){
    if( quantidadeItem > 0 ){
        break;
    }
    else{
    quantidadeItem = parseInt( entrada.question('Digite uma entrada valida:'))}
}

    //const produtosCarrinho = {...findId, quantidade: quantidadeItem}
    // carrinhox.push(produtosCarrinho)

    const comprando = entrada.question('Deseje inserir algo mais? (S/N)')
    const comprandoFormato = comprando .toLowerCase()

    if(comprandoFormato ==='n'){
        cupom = parseInt(entrada.question('Digite o valor de desconto:'))
    }
    else{
        compras()
    }
    for( i = 0; i < 1000; i++){
        if( cupom > 15 || cupom < 0){
            cupom = parseInt(entrada.question('Lamento tente novamente!'))
        }
        else{
            break;
    }    }
compras()
class Order{
    constructor(carrinhox){
        this.newProducts= carrinhox
        this.subTotal = 0 
    }
    calcuSbtotal(){
        this.subTotal = this.newProducts.reduce((acumulator,item) => acumulator + (item.preco* item.quantidade),0)
    }
}
const order = new Order(carrinhox)
console.table(order.newProducts);

order.calcuSbtotal()
console.log(`Valor do pedido ${order.subTotal.toFixed(2)} .`)

const desconto = order.subTotal * (cupom/100)
console.log(`Valor do pedido $ ${desconto.toFixed(2)}.`)
const total = order.subTotal - desconto
console.log(` Valoe do pedido$ ${total.toFixed(2)}.`)

console.log('Obrigada por comprar conosco')


