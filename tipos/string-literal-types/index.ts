const fn = ((nome: string, idade?:number) => {
    if(!idade){
        return `nomeL ${nome}, idade: sem valor definido`
    }

    return `nome ${nome}, idade: ${idade}`;
})

console.log(fn("edu", 23));
console.log(fn("edu"));

