// criar o objeto

const pessoa = {
    nome : "Renato",
    sobrenome : "Rodrigues",
    idade : 33,
    genero : "masculino",
    altura: 1.72,
    peso : 107,
    signo : "capricórnio",
    cor : "branca"
} ;

console.log(pessoa);

//criar as ações para o objeto

pessoa.falar = function (){
    
    return "Oi, Tudo bem?"
};

pessoa.gritar = function(){

    return "AAAAAAAHHHHHHH"
} ;

pessoa.andar = function () {

    return "poc,poc,poc,poc"
};

pessoa.comer = function(){

    return "nhac, nhac, nhac, nhac"
} ;

pessoa.risada = function (){

    return "HAHAHAHAHA"
};

console.log(pessoa.nome, pessoa.sobrenome, pessoa.idade, pessoa.genero, pessoa.altura, pessoa.peso, pessoa.signo, pessoa.cor);
console.log(pessoa.falar(), pessoa.grita(), pessoa.andar(), pessoa.comer(), pessoa.risada());