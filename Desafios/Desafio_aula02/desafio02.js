const pessoa = {
    nome : "Renato",
    peso : 107,
    calorias : {
        min: 0,
        max:7 },
    pedalar : {
        min: 0,
        max:7 },
    consumo : 0,
 
    engordar: function (){
        if( this.consumo == this.calorias.max){
            this.consumo = 0;
            return `Você engordou 1 Quilo, faça algum exercicio para emagrecer, seu peso atual agora é de: ${ ++this.peso } `
        } else{
             return `Cuidado, tu engordou: ${++this.consumo} mil, calorias, faça um exercicio!`

        }
    },
    
    emagrecer: function (){
        this.pedalar.min = 0;
        if(this.pedalar.min == this.pedalar.max){
            return ` Tu perdeste ${this.pedalar.min} mil, por isso perdeu 1 quilo, seu peso atual agora é de: ${--this.peso } `
        } else {
        return ` Tu perdeu:${++ this.pedalar.min} mil caloria(s) `
        } 
    }
}