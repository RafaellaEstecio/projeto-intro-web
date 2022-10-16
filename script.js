// const comida = "uva";
// const quantidadeComida = 15;
// const disponibilidadeComida = true;
// const tipoComida = ["italia","thompson","Rubi","benitaka","crimson","niagara","vitoria"]

// const comida2 = "banana";
// const quantidadeComida2 = 0;
// const disponibilidadeComida2 = false;
// const tipoComida2 = ["nanica","maça","prata","da terra","ouro"]

// const comida3 = "abobora";
// const quantidadeComida3 = 9;
// const disponibilidadeComida3 = true;
// const tipoComida3 = ["cabotian","italia","moranga","paulista","menina"]

//quantidade media de comida

// const quantidadeMedia= (quantidadeComida + quantidadeComida2 + quantidadeComida3)/3;
// console.log("A quantidade media de comida disponivel é", quantidadeMedia);

//verificar booleans

// const verificarDisponibilidade = disponibilidadeComida && disponibilidadeComida2 && disponibilidadeComida3;
// console.log(verificarDisponibilidade);

//acrescentar array + console

// console.log(" comida=", comida.toUpperCase(),"\n","quantidade=",quantidadeComida,"\n","tem disponibilidade=",disponibilidadeComida,"\n","especie=",tipoComida);
// console.log(" comida=", comida2.toUpperCase(),"\n","quantidade=",quantidadeComida2,"\n","tem disponibilidade=",disponibilidadeComida2,"\n","especie=",tipoComida2);
// console.log(" comida=", comida3.toUpperCase(),"\n","quantidade=",quantidadeComida3,"\n","tem disponibilidade=",disponibilidadeComida3,"\n","especie=",tipoComida3);

//SEMANA 02
const comida1 = {
    nome: "uva",
    quantidadeComida: 15,
    disponibilidadeComida: true,
    tipoComida:["italia","thompson","Rubi","benitaka","crimson","niagara","vitoria"]
}

const comida2 = {
    nome:"banana",
    quantidadeComida: 2,
    disponibilidadeComida: false,
    tipoComida: ["nanica","maça","prata","da terra","ouro"]

}

const comida3 ={ 
    nome:"abobora",
    quantidadeComida:9,
    disponibilidadeComida: true,
    tipoComida:["cabotian","italia","moranga","paulista","menina"]
}

const listaComida=[];

// listaComida.push(comida1,comida2,comida3);

if(comida1.disponibilidadeComida===true){
    listaComida.push(comida1);
}else {
    alert(`Não há disponibilidade de ${comida1.nome}`)
}
if(comida2.disponibilidadeComida===true){
    listaComida.push(comida2);
}else {
    alert(`Não há disponibilidade de ${comida2.nome}`)
}
if(comida3.disponibilidadeComida===true){
    listaComida.push(comida3);
}else {
    alert(`Não há disponibilidade de ${comida3.nome}`)
}

console.log(listaComida)


