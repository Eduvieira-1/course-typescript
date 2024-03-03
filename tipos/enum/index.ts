enum Mes {
    JAN = "janeiro",
    FEV = "Fevereiro",
    MAR = "Março"
}

const pessoa: { nome: string; mesAniversario: string} = {
    nome: "Edu",
    mesAniversario: Mes.JAN
};

if(pessoa.mesAniversario === Mes.JAN){
    console.log(pessoa);
}