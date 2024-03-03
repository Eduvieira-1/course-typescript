abstract class Pessoa{
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

    protected abstract profissao: string;
    public abstract qualSuaProfissao(): string;
}

class Edu extends Pessoa{
    protected profissao: string = "programador"; 
    constructor(nome: string, idade: number){
        super(nome, idade);
    }

    public qualSuaProfissao(): string{
        return `Sua profissao é ${this.profissao}`
    }
}


const edu = new Edu("Edu", 23);
console.log(edu.nome);
