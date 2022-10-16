const comida = "uva";
const quantidadeComida = 15;
const disponibilidadeComida = true;
const tipoComida = ["italia","thompson","Rubi","benitaka","crimson","niagara","vitoria"]

const comida2 = "banana";
const quantidadeComida2 = 0;
const disponibilidadeComida2 = false;
const tipoComida2 = ["nanica","maça","prata","da terra","ouro"]

const comida3 = "abobora";
const quantidadeComida3 = 9;
const disponibilidadeComida3 = true;
const tipoComida3 = ["cabotian","italia","moranga","paulista","menina"]

//quantidade media de comida

const quantidadeMedia= (quantidadeComida + quantidadeComida2 + quantidadeComida3)/3;
console.log("A quantidade media de comida disponivel é", quantidadeMedia);

//verificar booleans

const verificarDisponibilidade = disponibilidadeComida && disponibilidadeComida2 && disponibilidadeComida3;
console.log(verificarDisponibilidade);

//acrescentar array + console

console.log(" comida=", comida.toUpperCase(),"\n","quantidade=",quantidadeComida,"\n","tem disponibilidade=",disponibilidadeComida,"\n","especie=",tipoComida);
console.log(" comida=", comida2.toUpperCase(),"\n","quantidade=",quantidadeComida2,"\n","tem disponibilidade=",disponibilidadeComida2,"\n","especie=",tipoComida2);
console.log(" comida=", comida3.toUpperCase(),"\n","quantidade=",quantidadeComida3,"\n","tem disponibilidade=",disponibilidadeComida3,"\n","especie=",tipoComida3);




