const error = (): never => {
  throw new Error("Algo deu errado");
};

const loop = () => {
  while (true) {
    console.log("olá");
  }
};

const validate = (value: any) => {
  if (typeof value === "string") {
    return console.log("E string");
  } else if (typeof value === "number") {
    return console.log("É um number");
  }

  console.log(error());
};
