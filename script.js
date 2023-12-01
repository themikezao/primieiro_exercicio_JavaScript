let Nome = "Miguel Ângelo";
let Idade = 19;

console.log("Nome:", Nome);
console.log("Idade:", Idade);

let idadeMultiplicadapor7 = Idade * 7;
console.log("Idade multiplicada por 7:", idadeMultiplicadapor7);

let minhasCaracteristicas = {
    nome: Nome,
    idade: Idade,
    cidade: "Penafiel",
    interesses: ["música", "comer", "dormir"],
    estudante: true 
  };
  console.log("Minhas características:", minhasCaracteristicas);

var nomesdosAmigos = ["Tiago", "Pedro", "Xico"];
console.log("Nomes dos amigos:", nomesdosAmigos);



var amigo1 = {
    nome: "Tiago",
    idade: 18,
    cidade: "Penafiel",
    interesses: ["futebol", "música", "dormir"],
    estudante: true
  };

  var amigo2 = {
    nome: "Pedro",
    idade: 19,
    cidade: "Penafiel",
    interesses: ["viagens", "ginásio", "tecnologia"],
    estudante: false,
  };
  
  var amigo3 = {
    nome: "Xico",
    idade: 19,
    cidade: "Penafiel",
    interesses: ["música", "ginásio", "fórmula 1"],
    estudante: true,
  };
  
  console.log("Amigo 1: ", amigo1);  
  console.log("Amigo 2: ", amigo2);  
  console.log("Amigo 3: ", amigo3);  
  console.log("Amigo 1: " + amigo1.nome);
  console.log("Amigo 2: " + amigo2.nome);
  console.log("Amigo 3: " + amigo3.nome);
  console.log("Idade do Amigo 1: " + amigo1.idade);
  console.log("Idade do Amigo 2: " + amigo2.idade);
  console.log("Idade do Amigo 3: " + amigo3.idade);
  console.log("Cidade do Amigo 1: " + amigo1.cidade);
  console.log("Cidade do Amigo 2: " + amigo2.cidade);
  console.log("Cidade do Amigo 3: " + amigo3.cidade);
  console.log("Interesses do Amigo 1: " + amigo1.interesses.join(", "));
  console.log("Interesses do Amigo 2: " + amigo2.interesses.join(", "));
  console.log("Interesses do Amigo 3: " + amigo3.interesses.join(", "));
  console.log("O Amigo 1 é estudante?: " + amigo1.estudante);
  console.log("O Amigo 2 é estudante?: " + amigo2.estudante);
  console.log("O Amigo 3 é estudante?: " + amigo3.estudante);
  
let amigos = [
  {
    nome: "Tiago",
    idade: 18,
    cidade: "Penafiel",
    interesses: ["futebol", "música", "dormir"],
    estudante: true
  },
  {
    nome: "Pedro",
    idade: 19,
    cidade: "Penafiel",
    interesses: ["viagens", "ginásio", "tecnologia"],
    estudante: false,
  },
  {
    nome: "Xico",
    idade: 19,
    cidade: "Penafiel",
    interesses: ["música", "ginásio", "fórmula 1"],
    estudante: true,
  }
];

console.log("Características dos amigos (array de objetos): ",amigos);
console.log("Características do amigo 1 : ",amigos[0]);
console.log("Características do amigo 2 : ",amigos[1]);
console.log("Características do amigo 3 : ",amigos[2]);

