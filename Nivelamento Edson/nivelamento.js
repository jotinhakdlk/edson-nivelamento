//1.Exiba a mensagem "Olá Mundo" no console.
console.log("Olá Mundo!");

//2.Crie uma variável com seu nome e exiba um valor no console.
let MeuNome = "João";
console.log(MeuNome); 

//3.Some dois números e exiba o resultado
let soma = 10 + 5;
console.log(soma);

//4.Subtraia dois números e exiba o valor.
let subtracao = 10 - 5;
console.log(subtracao);

//5.Descubra o resto da divsão de um número por outro.
let sobra = 15 % 2;
console.log(sobra);

//6.Crie uma variável booleana (true ou false) e exiba o valor.
let verdade = true;
console.log(verdade);

//7.Verifique se um número é maior que outro e exiba o resultado.
let MaiorQue = 18 > 11;
console.log(MaiorQue);

//8- Crei duas variáveis com algum valor e exiba a concatenação
let nome = 'ben';
let idade = 10;

console.log(`Meu nome é ${nome} e tenho ${idade} anos`);

//9- Descubra o tipo de uma variável
let variavel = "alguma coisa aqui"
console.log(typeof variavel);

//10- Converta número para string
let num = 50;
console.log(String(num));

//11- Converta string em número
let string = "123";
console.log(Number(string));

//12- Exiba  no console números de 0 a 10
console.log("Número de 0 a 10")
for(let i = 0; i <= 10; i++){
    console.log(i);
};

//13- Exiba apenas os número pares até 20
console.log("Números pares até 20")
for(let i = 0; i <= 20; i += 2){
    console.log(i)
}

//14- Mostre no console número de 10 até 1
console.log("Número de 10 a 1")
for(let i = 10; i>=1; i-= 1){
    console.log(i);
}

//15- Some número de 1 a 5
console.log("Soma de 1 a 5")
let somaLoop = 0;
for(let i = 0; i<=5; i++){
    somaLoop +=i;
    console.log(somaLoop);
}

//16- Faça a tabuáda do 3
console.log("Tabuáda do 3")
multiplicador = 3;
for(let i=0; i<=10; i++){
    console.log(`${i} * ${multiplicador} = ${i * multiplicador}`)
}