class Pessoa{
    nome: string = "";
    idade: number = 0;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa("Edu", 23);
console.log(pessoa1.nome);
console.log(pessoa1.idade);
