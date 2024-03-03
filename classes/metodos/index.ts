class Pessoa{
    nome: string = "";
    idade: number = 0;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }


    comer(comida: string){
        return `O ${this.nome} comeu ${comida}`
    }

    fezNiver(){
        return `O ${this.nome} fez tantos anos ${++this.idade}`;
    }
}

const pessoa1 = new Pessoa("Edu", 23);
console.log(pessoa1.nome);
console.log(pessoa1.idade);


const pessoa2 = new Pessoa("Edu", 23);
console.log(pessoa2.comer("Macarrao ao molho branco"));
console.log(pessoa2.fezNiver());