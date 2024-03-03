let array1: [string, string, number, boolean] = [
  "Eduardo cesar",
  "edu",
  123,
  false,
];

let array2: Array<string | number | boolean> = [true, "Edu", 123, "dudu"];

let obj1: {
  nome: string;
  sobrenome: string;
  idade: number;
  sucesso: boolean;
} = {
  nome: "Edu",
  sobrenome: "cesar",
  idade: 23,
  sucesso: true,
};

let obj2: Array<{
  nome: string;
  sobrenome: string;
  idade: number;
  sucesso: boolean;
}> = [
    {
        nome: "Edu",
        sobrenome: "cesar",
        idade: 23,
        sucesso: true,
    },
    {
        nome: "Edu",
        sobrenome: "cesar",
        idade: 23,
        sucesso: true,
    },
    {
        nome: "Edu",
        sobrenome: "cesar",
        idade: 23,
        sucesso: true,
      }
];
