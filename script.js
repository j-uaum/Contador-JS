//função op do onclick
function op(){
    //variaveis iniciais
    let inicio = document.getElementById('number')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res') 

    // condição: se os espaços estiverem vazios, ele alerta um erro
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {  //== significa "igual" e || significa "ou"
        res.innerHTML = 'Faltam dados necessários'
            alert("Erro por favor insira um número")

    } else{ // else é para se estiver tudo preenchido, ele continua a operação 

    res.innerHTML = 'Contando:<br>'
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)  // transformando as var dos inputs em variaveis de numeros 

    if(p<=0){ // se o passo for 0, ele redefine pra 1 
    alert('Passo inválido, valor redefinido para 1')
    p = 1
}
    if(i<f){ // contagem crescente
        for (let c = i; c<= f; c+= p )  //let recebe a variavel i, se i for menor ou igual a f, o contador recebe ele mesmo mais o numero do passo
        res.innerHTML += ` ${c} \u{1F449}`  // esse mais é de concatenação, nao confundir com adição...... o res.innerhtml vai ser o que ele ja tem (+) com o let c
    } else{ // contagem regressiva

        for(let c= i; c>=f; c-=p){  // c começa no inicio por ser um numero maior, ou seja, enquanto c for maior ou igual a f, o contador perde passo
            res.innerHTML += ` ${c} \u{1F449}`
        }

    }
    
            res.innerHTML += `\u{1F3C1}`  // nao esquecer de contatenar, se nao concatenar ele substitui o texto da tela ao inves de add o elemento ao elemento de cima, no caso o resultado com o emoji de bandeirinha
    }










} 