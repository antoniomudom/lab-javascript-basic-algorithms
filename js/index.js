// Iteration 1: Names and Input
let hacker1 = "antonio";
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "paco";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)

}else{
    console.log(`Wow, you both have equally long names, it has ${hacker2.length} characters`)
}

// Iteration 3: Loops


let resultado = "";

for (let i = 0; i < hacker1.length; i++) {
  resultado += hacker1[i].toUpperCase() + " ";
}
console.log(resultado);

let nombreReverso = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
  nombreReverso += hacker1[i];
}

console.log(nombreReverso);




if(hacker1[0]< hacker2[0]){
    console.log("The driver's name goes firs")
}else if(hacker1[0]>hacker2[0]){
    console.log("Yo, the navigator goes first definitely");
}else if(
    hacker1 === hacker2){
        console.log("What?! You both have the same name?");
}else{
    console.log("Nada")
}




