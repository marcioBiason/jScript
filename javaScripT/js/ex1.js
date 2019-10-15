  
    //Execercio 1
console.log("O arquivo 'ex1.js' está funcionando");

    //Execercio 2
var nome = 'Marcio';
var anoNasc = 1989;
console.log('Olá, eu me chamo ' + nome + ' tenho ' + (2019 - anoNasc) + ' anos e estou estudando Javascript');

    //Execercio 3
var nomeAluno = 'Marcelo Biason';
var matriculaAluno = '335144';
var nota1 = 9;
var nota2 = 8;
console.log('O aluno ' + nomeAluno + ' matrícula ' + matriculaAluno + ', obteve a média final ' + ((nota1 + nota2) / 2));

    //Execercio 4
var telefone = '9744061051';
var resultado = telefone.length == 9
console.log("Resultado do teste: " + resultado.toString());

    //Execercio 5
console.log(Math.pow(32,6));

    //Execercio 6
//c) var typeof; -nome reservado;
//d) var nome-aluno; traço não pode;
//f) var 2a_tentativa; não pode comecar com numero;
//g) var nome completo;espaco nao pode;

    //Execercio 7
var quantidade = "25";
var numero = 6;
var pressao;
var temperatura = 40;
temperatura = null;

console.log(quantidade += quantidade);
console.log( (7+5) / numero + 2 ); 
console.log(pressao);
console.log(temperatura);
console.log(typeof pressao);
console.log(typeof temperatura);

    //Execercio 8

var idade = 65;

console.log(idade != 65);//false;
console.log(idade >= 65); //true;
console.log("65" == idade);//true;
console.log(65 !== idade);//false
console.log(typeof (idade > 60));//boolean;
console.log(typeof (idade > 70));//boolean;