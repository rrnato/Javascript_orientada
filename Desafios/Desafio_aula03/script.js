function Conta(agencia=0,numero=0,digito=0,saldo=0,titular="",tipo=""){
    this.agencia = agencia;
    this.numero = numero;
    this.digito = digito;
    this.saldo = saldo;
    this.titular = titular;
    this.tipo = tipo;
    this.lancamentos = new Array();
}

// métodos e props (adicionar ao protótipo do construtor == boa prática)
Conta.prototype.banco = "O banco é: Nubank";

Conta.prototype.depositar = function(valor) {
    this.lancamentos.push(`Depósito efetuado no valor de: R$ ${valor} reais`);
    return `Depositando : ${this.saldo += valor} reais` ;
}
  
Conta.prototype.sacar = function(valor) {
  if (this.saldo >= valor) {
   this.lancamentos.push(` Saque efetuado no valor de: R$ ${valor} reais`)
    return `Sacando : ${this.saldo -= valor} reais`;
  }

  return "Saldo Insuficiente!";
}

Conta.prototype.transferir = function(valor, conta) {
  this.sacar(valor); // origem
  conta.depositar(valor); // destino
  this.lancamentos.push(` Transferência efetuada no valor de: R$ ${valor} reais`)
  return `Transferindo : ${this.saldo} reais`;
}
  
Conta.prototype.extrato = function() {
  return `SEU EXTRATO :  ${this.lancamentos.join("\n")}`
}
    
const contaJoao = new Conta(336, 1234, 0, 1500, "João");
const contaMaria = new Conta(336, 4567, 8, 3000, "Maria", "CP");


// Conta do João
console.log(contaJoao);
console.log(contaJoao.banco);
console.log(contaJoao.depositar(1000));
console.log(contaJoao.sacar(1900));
console.log(contaJoao.sacar(2));
console.log(contaJoao.transferir(98, contaMaria));
console.log(contaJoao.extrato());
console.log(contaJoao.lancamentos);


// Conta da Maria
console.log(contaMaria);
console.log(contaMaria.banco);
console.log(contaMaria.depositar(225));
console.log(contaMaria.sacar(3200));
console.log(contaMaria.sacar(25));
console.log(contaMaria.transferir(50, contaJoao));
console.log(contaMaria.extrato());
console.log(contaMaria.lancamentos);