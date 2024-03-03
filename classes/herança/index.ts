class Pessoa{
    public nome: string = "";
    public idade: number = 0;

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

class Edu extends Pessoa{
    private _profissao: string = "programador"; 
    constructor(nome: string, idade: number){
        super(nome, idade);
    }

    get profissao(){
        return this._profissao;
    }

    set profissao(valor: string){
        this._profissao = valor
    }

}

const pessoa1 = new Pessoa("Edu", 23);
console.log(pessoa1);
console.log(pessoa1.idade);


const pessoa2 = new Pessoa("Edu", 23);
console.log(pessoa2.comer("Macarrao ao molho branco"));
console.log(pessoa2.fezNiver());

const edu = new Edu("Edu", 23);
console.log(edu.nome);
