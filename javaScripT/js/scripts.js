$(document).ready(function(){
     
    //**Aula 2 - 

//soltar a mensagem na caixa de dialogo;
//--alert("Mensagem enviada pelo alert");
//Escrever no console e será exibido no console ao pressionar F12;
//--console.log("Mensagem pelo Console");   

    //**Aula 3 - Variaveis;

//Craindo a variavel latitude;
//--var latitude = 40.87663;
//--console.log(latitude);

//Craindo a variavel longitude;
//--var longitude = -8.08373;
//--console.log(longitude);

    //**Aula 4 - Strings;

//--var nome = "João";  // podem ser usadas aspas duplas
//--var sobrenome = 'Gomes';  // ou aspas simples
//--var cpf = '111.111.111-11';  
//--var telefone = "998887655";
//--var ddd = '21';
//--var email = 'joao@gmail.com';
//--var biografia = "João começou a sua carreira como desenvolvedor web em 2010 e já participou de importantes projetos, como...";

//Imprimindo o nome e o sobrenome;
//--console.log('Nome Completo: ' + nome + ' ' + sobrenome + ' Telefone: (' + ddd + ')' + telefone);
//Pegando a primeira letro da variavel nome;
//--console.log('Primeira letra do nome: ' + nome[0]);
//Pegando o tamanho de uma string;
//--console.log('Tamanho de uma string: ' + telefone.length);

    //**Aula 5 - Numbers;

//--var ano_nascimento = 1986;
//--var preco = 16.99;  // floats devem ser usadas com ponto, nunca com vírgula.
//--var temperatura = -5;
//--var numero_grande = 2.2e45; /* números muito grandes podem ser representados em Javascript pela notação exponencial. 
//Neste exemplo, este número significa 2.2 x 1045 */

//--var num1 = 20;
//--var num2 = 3;

//--var soma = num1 + num2;
//--var subtracao = num1 - num2;
//--var divisao = num1 / num2;
//--var multiplicacao = num1 * num2;
//--var media = (num1 + num2) / 2;

//--var potencia = Math.pow(2,4);  /*Neste caso usamos o método pow do objeto Math, que faz potenciação.
//Este método requer duas informações separadas por vírgula entre parênteses: o número base, e a potência.
//Isso significa que temos 24, que dá 16.*/

//--var arredonda = Math.round(2.7); //Arredondamento. Resultado: 3
//--var arredonda_cima = Math.ceil(4.3) //Arredondamento para cima. Resultado: 5
//--var arredonda_baixo = Math.floor(4.6) //Arredondamento para baixo. Resultado: 4
//--var raiz = Math.sqrt(36) //Raiz quadrada. Resultado: 6

//--console.log('A média é: ' + media);
//--console.log('2 elevado a 4ª potencia: ' + Math.pow(2,4));

//--var increment = 20;
//--increment = increment + 5; //redefinimos o valor dela, para o valor que ela já possuía, mais 5.
//--console.log(increment); //O console mostrará 25

//esta estrutura variável = variável + valor, pode ser simplificada com o operador incremental +=

//--increment = 1;
//--increment += 5;
//podemos também usar *=, /= e -= para multiplicação, divisão e subtração
//--console.log(increment); //O console mostrará 6

//--var ddd = 21;
//--var telefone = 998887655;
//Convertendo o ddd e o telefone para string para poder concatenar;
//--var ddd_string = ddd.toString();
//--var telefone_string = telefone.toString();
//--console.log(ddd_string+telefone_string)
//Voltando o DDD para Numero;
//--var ddd_number = parseInt(ddd_string);
//--console.log(ddd_number);

    //** Aula 6 - Tipos de Dados Primitivos;

//--var teste = 65 < 60;
//--console.log(teste);//Imprime False
//Dois iguais para comparar valores;
//--var verificarIgualdade = 60 == 60;

//--var teste1 = 20 > 2; // true
//--var teste2 = 2 >= 2; // true
//--var teste3 = 5 < 5; // false
//--var teste4 = 5 <= 10; // true
//--var teste5 = 20 == 20; // true
//--var teste6 = 'ivan' == 'joão' // false
//--var teste7 = 20 === "20"; // false - valor é igual mas o tipo não. O primeiro é número, o segundo é string.
//--var teste8 = 20 != 10; // true
//--var teste9 = 10 != 10; // false
//--var teste10 = "10" !== 10; // true - o tipo não é igual
//--var teste11 = "9" !== 10; // false - o tipo nem o valor são iguais.

//Consultando o tipo de uma variavel;
//--var vType = "true";
//--console.log(typeof vType == "number");

//--var v_string = "teste";
//--var v_numero = 4.55;
//--var idade = 21;
//--var v_boolean = idade > 18 ;

//--console.log(typeof v_string);  // retorna string
//--console.log(typeof v_numero);  // retorna number
//--console.log(typeof v_boolean);  // retorna boolean

   //** Aula 7 - Tipos de Dados Null e Undefined;

//--var undf;
//--console.log(undf);
//--console.log(typeof undf);
//--var nome = 'Pedro';
//--console.log(nome[5]);//retorna undefined;

//--var temperatura = 35;
//--console.log(temperatura);
//Melhor jeito de zerar uma variavel, setando ela para zero;
//--temperatura = null;
//--console.log(temperatura);
//--console.log(temperatura == undefined);//retorna true;
//--console.log(temperatura === undefined);//retorna false;

   //** Aula 11 - Trabalhando com o DOM;

//Pegando o conteudo do elemento;
//--var conteudo_caixa = document.getElementById("caixa_azul").innerHTML; 
//--console.log(conteudo_caixa);  
//Passando o conteudo da variavel "conteudo_caixa" para o elemento com id "caixa_amarela";
//--document.getElementById("caixa_amarela").innerHTML = conteudo_caixa;

//Acrescentando o <h1> no conteudo da caixa Azul;
//--document.getElementById("caixa_azul").innerHTML = '<h1>' + conteudo_caixa + '</h1>';
//Mudando o conteudo do elemento "caixa_amarela";
//--document.getElementById("caixa_amarela").innerHTML = '<h1>' + 'Caixa Amarela' + '</h1>';

   //** Aula 12 - Funções;

//Funcao SOMA;
//--function soma_numeros() {
       //--var x = 5;
       //--var y = 2;
       //--var soma = x + y;
       //--console.log(soma);
   //--}
//--soma_numeros();

//Funcao SOMA com ARGUMENTOS;
//--function soma_args(num1, num2){
    //--var soma = num1 + num2;
    //--return soma;    
//--}
//--console.log('Resultado da soma: ' + soma_args(1000,375));

//Funcao IMC;
//--function valor_imc(peso,altura){
    //--var imc = peso / (altura * altura);
     //Ajustando para duas casas Decimais;
    //--return imc.toFixed(2);
//--}
//                                                       Convertendo o conteudo do elemento para Float;
//--document.getElementById("imc").innerHTML = valor_imc(parseFloat(document.getElementById("peso").innerHTML), parseFloat(document.getElementById("altura").innerHTML));

   //** Aula 13 - Arrays;

//--var alunos = [ "João" , "Maria", "José" ];
//--var num_primos = [ 2, 3, 5, 7, 11, 13 ];

//Pegando o tamanho do Array Alunos; retorna 3
//--console.log(alunos.length);
//Pegando o numero '5' do array; retorna 5
//--console.log(num_primos[2]);

//--var grupos = [ 
//--    [ "João" , "Maria" ],
//--    [ "Pedro" , "Joana", "André", "Júlio" ],
//--    [ "Carolina" , "Helena", "Marcelo" ]
//--];
//retorna 3;
//--console.log(grupos.length);
//retorna [ "Pedro" , "Joana", "André", "Júlio" ];
//--console.log(grupos[2]);
//retorna Joana;
//--console.log(grupos[1][1]);

//--var cursos = [ "HTML", "Python", "PHP" ];

//PUSH; Adiciona no final da lista;
//--cursos.push("Javascript");
//--console.log(cursos);// O console mostrará [ "HTML", "Python", "PHP", "Javascript" ]

//UNSHIFT; Adiciona no comeco da lista;
//--cursos.unshift("Bootstrap");
//--console.log(cursos);// O console mostrará [ "Bootstrap", "HTML", "Python", "PHP", "Javascript" ]

//POP; Remove o ultimo da lista;
//--cursos.pop();
//--console.log(cursos);// O console mostrará [ "Bootstrap", "HTML", "Python", "PHP" ]

//SHIFT; Remove o primeiro da lista;
//--cursos.shift();
//--console.log(cursos);// O console mostrará [ "HTML", "Python", "PHP" ]

//Método SLICE(comeco do array)
//--var alunos = [ "João" , "Maria", "José", "Fernanda", "Pedro", "Elisa" ];
//--console.log('------------------------');
//--console.log(alunos.slice(0,3));// O console mostrará [ "João" , "Maria", "José" ];
//--console.log(alunos.slice(-2,));// O console mostrará [ "Pedro", "Elisa" ];
//--console.log(alunos.slice(4,6));// O console mostrará [ "Pedro", "Elisa" ];

   //** Aula 14 - Objetos;

//--var funcionario = {
    //--'nome': 'Pedro Souza Gomes',
    //--'ano_nasc': 1972,
    //--'cpf': '111.111.111.11',
    //--'cargo': 'Analista de Sistemas'};

//Pegando a propriedade nome do objeto;
//--console.log(funcionario['nome']);
//--console.log(funcionario.nome);//DOT NOTATION;

//Mudando o atributo de uma propriedade;
//--funcionario.cargo = 'Gerente de TI';
//Criando uma nova propriedade;
//--funcionario.cnh = '12345667';
//Mostrando o Objeto;
//--console.log(funcionario);

//--var cursos = [{
        //--'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
        //--'avaliacoes': 680,
        //--'alunos': 2300,
        //--'categorias': ['programacao', 'tecnologia']
    //--},
    //--{
        //--'titulo': 'Aprenda PHP e faça sites dinâmicos',
        //--'avaliacoes': 180,
        //--'alunos': 350,
        //--'categorias': ['desenvolvimento web', 'programacao']
    //--},
    //--{
        //--'titulo': 'Excel do Zero ao Avançado',
        //--'avaliacoes': 420,
        //--'alunos': 1800,
        //--'categorias': ['produtividade', 'gestão']
    //--}];

//--console.log('------------------------');
//Pegando a primeira categoria do segundo arrary;
//--console.log(cursos[1].categorias[0]);
            
   //** Aula 15 - Métodos de Objetos;

//--var aluno = {
    //--'nome': 'Maria',
    //--'sobrenome': 'Pereira',
    //--'ano_nasc': 1992,
    //Funcao de objeto: Concatena o Nome Completo;  
    //--'nome_completo': function() {
        //--var nomeCompleto = this.nome + ' ' + this.sobrenome;
        //--return nomeCompleto;},
    //Funcao de objeto: Calcula Idade;    
    //--'idade': function(){
        //--var idade = 2019 - parseInt(this.ano_nasc)
        //--return idade;}
//--}
//Chamando os metodos do objeto criado;
//--console.log('nome: ' + aluno.nome_completo() + '. Idade: ' + aluno.idade());

   //** Aula 19 - Eventos;

//Ao clicar no botão, exibe a msg;
//--document.getElementById('click-me').onclick = function() {
    //--alert('Você clicou no botão!');
//--}
//Ao passar no botão, exibe a msg;
//--document.getElementById('hover-me').onmouseover = function() {
    //--alert('Você passou com o cursor no botão!');
//--}

//Ao sair do botão, exibe a msg;
//--document.getElementById('leave-me').onmouseout = function() {
    //--alert('Você saiu com o cursor no botão!');
//--}

//monitorando o documento se é pressionado alguma tecla;
//--document.onkeydown = function() {
    //--alert('Você apertou alguma tecla;');
    //Pegando o codigo da tecla pressionada!!!;
    //--alert('Você apertou a tecla: ' + event.keyCode);
//--}

//Funcao colocada no HTML;
//--function button_clicked() {
    //--alert('Você clickou no botão');
//--}

   //** Aula 20 - Manipulação do CSS;

//Mudando o tamanho de um botao ao ser clicado;
//--document.getElementById('botao_cor').onclick = function() {
    //Aumantando em 100px a altura do botao;
    //--this.style.height = '100px';
    //Mudando para purple o background do botão;
    //--this.style['background-color'] = 'purple';
    //Fazendo o botão se mover para a direita;
    //--this.style.transform = 'translateX(100px)';
//--}

   //** Aula 21 - getElement[getElementsByClassName/getElementsByTagName];

//Pegando todos elementos com a classe 'exemplo';
//--var exemplo = document.getElementsByClassName('exemplo');

//--console.log(exemplo);//Retorna um array com todos os elementos da classe 'exemplo';
//--exemplo[0].innerHTML = 'teste_1';//Alterando o elemento na primeira posicao do array exemplo;

//Pegando todos elementos com a tag 'p'<p><p/> 'paragrafo';
//--exemplo = document.getElementsByTagName('p');
//--console.log(exemplo);//Retorna um array com todos os elementos da tag '<p>';

   //** Aula 22 - Loops[for/for/in];

//imprimindo 'a' 5 vezes;
//--for (var a = 0; a < 5; a ++) {
    //--console.log(a);}   

//--var alunos = ['Pedro', 'Maria', 'José', 'João', 'Carlos'];
//Passando no vetor alunos e imprimindo na posição 'b';
//--for (var b = 0; b < alunos.length; b++) {
    //--console.log(alunos[b]);}

//Criando o objeto 'carro';
//--var carro = {
    //--'Ano': 2018,
    //--'Modelo': 'Fox',
    //--'Cilindradas': '1.8',
    //--'Combustível': 'Gasolina'}
//For in percorrendo o objeto 'carro' e imprimindo a key 'prop' e o value 'carro[prop]';
//--for (var prop in carro) {
    //--console.log( prop + ': ' + carro[prop] );}

//--var elementos = document.getElementsByClassName('exemplo');//Retorna um array com todos os elementos da classe 'exemplo';
//--var elementos = document.getElementsByTagName('p');//Retorna um array com todos os elementos da Tag 'p';

//Looping mudando a cor e o estilo da fonte de todos os elementos do array elemento;
//--for (var c = 0; c < elementos.length; c++){
    //--elementos[c].style.color = 'orange';
    //--elementos[c].style['font-weight'] = 'bold';
//--}

   //** Aula 23 - Loops[while/do/while];

//Aprendendo o while;
//--var count = 0;
//--while (count < 5) {
    //--console.log(count);
    //--count ++;}

//Aprendendo o do/while; 
//Que roda pelo menos uma vez antes de testar a condição;  
//--var count = 10;
//--do {
    //--console.log(count);
    //--count++;
//--}while(count < 5);

   //** Aula 23 - Condicionais;

//Validando a Maior Idade;
//--var idade = 18;

//--if (idade < 18){
    //--console.log('Menor de idade');}
//--else if (idade == 18) {
    //--console.log('Tem 18');}
//--else{
    //--console.log('Maior de idade');}

//--var nota = 7,  faltas = 1;
//Comparando com o E (&&)
//--if (nota >= 7 && faltas <= 4){
    //--console.log('aprovado');}
//--else{
    //--console.log('reprovado');}

//Comparando com o OU (||)
//--if (nota < 7 || faltas > 4){
    //--console.log('reprovado');}
//--else{
    //--console.log('aprovado');}   
    
//Comparando se uma variavel string está vazia;
//--var nome = 'marc';//Retorna nome se estiver preeenchida;
//--var nome = null;//Retorna nome nao informado se for null ou ''(vazio) ou undefined;

//--if (nome){
    //--console.log(nome);}
//--else{
    //--console.log('nome nao informado')}

   //** Aula 25 - Aninhamento de Loops (Nesting);
   
//--var socio = true, idade = 21;
//Se socio ou Maior igual a 65 de idade = gratis; Nao socio: menor de 18 = '$6.00' maior q 18 = '$12.0'
//--if (socio || idade >= 65){
    //--console.log('grátis');}
//--else{
    //--if (idade < 18){
        //--console.log('$6.00');}
    //--else{
        //--console.log('$12.0');}}

//--var funcionarios = [
//--{   'nome': 'Carlos Henrique da Silva',
    //--'idade': 45,
    //--'filhos': ['Mariana Alves da Silva', 'Fernanda Alves da Silva']},

//--{   'nome': 'Maria Helena Pereira',
    //--'idade': 32,
    //--'filhos': ['João Pedro Pereira de Souza']},

//--{   'nome': 'José Feliciano Maia',
    //--'idade': 39,
    //--'filhos': undefined}];        

//--var list_element = document.getElementById('filhos');
//--list_element.innerHTML = '';
//Percorrendo o objeto e preenchedo uma lista com o nome dos filhos e dos pai respectivos;
//--for (var a = 0; a < funcionarios.length; a ++){
    //Verifica se o funcionario tem filho, e só coloca na lista caso TRUE;
    //--if (funcionarios[a].filhos){
    //--var lista_filhos = funcionarios[a].filhos;
    //--for (var b = 0; b < lista_filhos.length; b++ ){
        //--list_element.innerHTML += '<li>' + lista_filhos[b]  + ' Filho de: ' + funcionarios[a].nome;}}}

   //** Aula 36 - BOM (Browser Object Model);

//Pegando o tamanho da Tela;
//--var tamanhoTela = window.innerWidth;

//Pegando o movimento do mouse
//Soltando pop-ups caso o usuario saia da page;
//--window.onmousemove = function(e) {
    //--console.log('mouse move: eixo y: ' + e.pageY + ' eixo x: ' + e.pageX);
    //--if (e.pageY < 5){
        //--alert('não saia da pagina');}}

   //** Aula 37 - Local Storage;

//Guardar tupla de chave(key) e valor(value)
//--window.localStorage.setItem('nome', 'Joao');

//Pegando a chave(key) 'nome' passada;
//--console.log(localStorage['nome']);

//Removendo uma informacao do localStorage
//--window.localStorage.removeItem('nome');

//--document.getElementById('enviar-nome').onclick = function () {
    //Pegando o texto digitado no input 'nome-usuario' e guardando na chave(key) do LocalStorage;
    //--localStorage.setItem('nome',document.getElementById('nome-usuario').value);
    //Desaparecendo com o campo de nome 'name-field' quando o usuario clicar no botao 'enviar-nome';
    //--document.getElementById('name-field').style.display = 'none';
     //Exibindo a mensagem: OLá tal tal tal...
    //--document.getElementById('welcome-text').innerHTML = 'Olá ' + localStorage['nome'] + '. Bem Vindo, Queridão!';
    //Exibindo o Span não é o ususario;
    //--document.getElementById('not-me').innerHTML = 'Não é ' + localStorage['nome'] + ', Queridão?';
    //Fazendo o elemento 'welcome-area' aparecer;
    //--document.getElementById('welcome-area').style.display = 'initial';
//--}

//Verificando se existe algum nome no Localstorage;
//--if (localStorage.nome){
    //Desaparecendo com o campo de nome 'name-field' quando o usuario clicar no botao 'enviar-nome';
    //--document.getElementById('name-field').style.display = 'none';
    //Exibindo a mensagem: OLá tal tal tal...
    //--document.getElementById('welcome-text').innerHTML = 'Olá ' + localStorage['nome'] + '. Bem Vindo, Queridão!';
    //Exibindo o Span não é o ususario;
    //--document.getElementById('not-me').innerHTML = 'Não é ' + localStorage['nome'] + ', Queridão?';
    //Fazendo o elemento 'welcome-area' aparecer;
    //--document.getElementById('welcome-area').style.display = 'initial';
//--}

//Funcao do span não é o usuario;
//--document.getElementById('not-me').onclick = function () {
    //Limpando a key 'nome' do localStorage;
    //--localStorage.removeItem('nome');
    //Aparecendo com o campo de nome 'name-field' quando o usuario clicar no botao 'enviar-nome';
    //--document.getElementById('name-field').style.display = 'initial';
    //Fazendo o elemento 'welcome-area' desaparecer;
    //--document.getElementById('welcome-area').style.display = 'none';
//--}

   //** Aula 38 - Data e Hora;

//Criando e exibindo a Data Atual;
//--var dataHoraHoje = new Date();
//Pegando o dia do mes;
//--var dataHoraHoje = new Date().getDate();
//--var dataHoraHoje = new Date(2019,11,11);
//Pegando de uma base de Dados;
//--var dataNasc = new Date('1980-03-01');
//Calculando a idade de alguem;
//--console.log(new Date().getFullYear() - dataNasc.getFullYear());

//Calculando a diferenca em dias entre duas datas;
//--function calculaDiasDeEntrega(d1,d2){
    //--return (new Date(d2).getTime() - new Date (d1).getTime()) / 86400000;}

//Chamando a funcao 'calculaDiasDeEntrega' passando duas datas como String;
//--document.getElementById('dias_entrega').innerHTML = calculaDiasDeEntrega('2018-03-20', '2018-04-06') + ' days;';

   //** Aula 39 - Métodos de Tempo;

//--console.log('Mensagem 1');

//Setando o tempo de 3000 milisegundos/ 3 segundos e exibir a mensagem;
//--window.setTimeout(function(){
    //--console.log('Mensagem 2');},3000)

//Mostrando um carregador por 5 segundos quando o botao 'mostrar-loader' é clicado;
//--document.getElementById('mostrar-loader').onclick = function () { 
    //--document.getElementById('spinner-loader').style.display = 'initial';
    //--window.setTimeout(function(){
        //--document.getElementById('spinner-loader').style.display = 'none';},5000)
//--}

//--var count = 0;

//Usando o setInterval e imprimindo no console de 1 em 1 segundo;
//--var interval = window.setInterval(function(){
    //--console.log(count);
    //--count ++;
    //--if (count > 10){
        //Parando o setInterval com o clearInterval citando a variavel criada 'interval';
        //--window.clearInterval(interval);}},1000);

    //** Aula 39 - Métodos de Tempo;

//Adicionado o zero a esquerda, caso o numero seja menor que 10;
function add_left_zero(number) {
    if (number < 10) {
        return '0' + number.toString();
    }
    else{
        return number.toString();
    }
}

//Funcao que formata os dias, meseses e anos;
function format_date (timeStamp){
    var dia = add_left_zero(new Date(timeStamp).getDate());
    var mes = add_left_zero(new Date(timeStamp).getMonth() + 1);
    var ano = add_left_zero(new Date(timeStamp).getFullYear());
    return dia + '-' + mes + '-' + ano;
}

//Setando o intervalo de 1 segundo e atualizando o relogio;
//--window.setInterval(function() {

    //--var horaAtual = new Date();    
    //--var horas = horaAtual.getHours();
    //--var minutos = horaAtual.getMinutes();
    //--var segundos = horaAtual.getSeconds();

    //--document.getElementById('relogio').innerHTML = format_time(horas.toString()) + 
                                                               //--' : ' +  
                                                               //--format_time(minutos.toString()) + 
                                                               //--' : ' + 
                                                               //--format_time(segundos.toString());
//--}, 1000)

    //** Aula 41 - Comando Switch;

//--function valorPedagio(categoria) {

    //--switch(categoria) {
        //--case '1':
            //--return 11.22;
            //--break;

        //--case '2':
            //--return 22.45;
            //--break;

        //--case '3':
            //--return 16.88;
            //--break;

        //--case '4':
            //--return 33.65;
            //--break;

        //--default:
            //--return 'categoria nao encontrada';}
//--} 

//--console.log(valorPedagio('1'));
//--console.log(valorPedagio('2'));
//--console.log(valorPedagio('3'));
//--console.log(valorPedagio('4'));
//--console.log(valorPedagio('525'));

    //** Aula 42 - Break and Continue;

//--var x = 0;

//--while (x < 10){
    //--console.log(x);
    //--x ++;

    //--if (x == 5){
        //--break;}
//--}

//--var lista = [1,5,9,33,56,89,100,122,145,189,190,199,205,290];
//Procurando o valor na lista e parando 'break', quando acha!;
//--for (var a = 0; a < lista.length; a ++){

    //--if (lista[a] == 33){
        //--break;}

    //--console.log('tentativa: ' + a);
//--}

//--var num = 0;

//--while (num < 20) {

    //--if (num == 3){
        //--num++;
        //--continue;
    //--}

    //--console.log(num);
    //--num++;
//--}

//--num = 0;

//--while (num <= 20){

    //--if (num % 2 != 0){       
        //--num++;
        //--continue;
    //--}

    //--console.log(num);
    //--num++;
//--}

    //** Aula 43 - Formularios;

    //Trabalhando com DropDownList;
//--document.getElementById('mostrar_opcao').onclick = function() {

    //Pegando o index selecionado;
    //--var index = document.getElementById('options').options.selectedIndex;

    //Imprimindo no console o valor do index selecionado;
    //--console.log(document.getElementById('options').options[index].innerHTML);

    //Atribuindo a uma label na tela o valor selecionado no drop down list;
    //--document.getElementById('opcao_selecionada').innerHTML = document.getElementById('options').options[index].innerHTML;

    //Pegando o valor de um dropo down list;
    //--(document.getElementById('options').value)
//--}

    //Trabalhando com Radio Button;

//--document.getElementById('mostrar_radio').onclick = function () {
    //Pegando as variaveis do Radio
    //--var radio = document.getElementsByName('genero');

    //--var radio_selected;
    //Fazendo um for para ver o valor selecionado;
    //--for (var a = 0; a < radio.length; a++){
        //--if(radio[a].checked){
            //--radio_selected = radio[a].value;
            //--break;
        //--}
    //--}
//Atribuindo a uma label na tela o valor selecionado no Radio Button;
//--document.getElementById('radio_selecionado').innerHTML = radio_selected;
//--}

    //Trabalhando com CheckBox;

//--document.getElementById('mostrar_check').onclick = function () {

    //Limpando a lista na tela;
    //--document.getElementById('check_selecionado').innerHTML = '';

    //Pegando as variaveis do CheckBox;
    //--var check = document.getElementsByName('interesse');

    //Fazendo um for para ver os checkBoxes selecionados;
    //--for (var b = 0; b < check.length; b++){
        //--if(check[b].checked){
            //Atribuindo a uma lista na tela os valores selecionados nos CheckBoxes;
            //--document.getElementById('check_selecionado').innerHTML += '<li>' + check[b].value;
        //--}
    //--}
//--}

    //Trabalhando com Datas;

//--document.getElementById('mostrar_data').onclick = function () {
    //Pegando a data selecionada
    //--var data_select = document.getElementById('data_evento').value;
    //Criando um objeto com a Data Selecionada;
    //--var data_completa = new Date(data_select);
    //Exibindo a data Completa;
    //--document.getElementById('data_selecionada').innerHTML = data_completa;
//--}

    //** Aula 45 - OnChanges;

//--document.getElementById('escolaridade').onchange = function () {

    //Pegando o index selecionado;
    //--var index = document.getElementById('escolaridade').options.selectedIndex;
    //Atribuindo a uma label na tela o valor selecionado no drop down list;
    //--document.getElementById('escolaridade_selecionada').innerHTML = document.getElementById('escolaridade').options[index].innerHTML;
//--}

        //Trabalhando com OnChange e CheckBoxes;

//--var check = document.getElementsByName('lanche');
    //--for (var a = 0; a < check.length; a++){

        //--check[a].onchange = function() {

            //--document.getElementById('check_selecionado').innerHTML = '';

            //--for (var b = 0; b <check.length; b++){
                //--if (check[b].checked) {
                    //--document.getElementById('check_selecionado').innerHTML += '<li>' + check[b].value;
            //--}
        //--}
    //--}
//--}

    //** Aula 52 - jQuery;

//Escondendo os botões da classe exemplo ao clicar no botão de id 'esconder';
//--$("#esconder").click(function (){
    //--$(".exemplo").hide();
//--});

//Pegando o conteudo com jQuery;
//--var conteudo_html = $('#paragrafo-html').html();
//--var conteudo_text = $('#paragrafo-html').text();
//--console.log(conteudo_html);
//--console.log(conteudo_text);

//Mudando o conteudo do id 'paragrafo';
//--$('#paragrafo-html').html("Mudar o conteudo");

//Pegando um atributo especifico;
//--var urlLink = $('#paragrafo-link').attr('href');
//--console.log(urlLink);
//Mudando o hRef de um link;
//--$('#paragrafo-link').attr('href','http://www.udemy.com');
//Imprimindo o novo hRef;
//--console.log($('#paragrafo-link').attr('href'));

//Mudando o source de uma imagem com jQuery;
//--$("#mudar_imagem").click( function() {
    //--$("#imagem_js").attr("src", "https://cdn.tutsplus.com/net/uploads/2013/12/managing-async-nodejs-retina-preview.png");
    //--$("#mudar_imagem").hide();
//--});

// Remover o conteúdo, mantendo o elemento:
//--$("#paragrafo-empty").empty();

// Remover o elemento:
//--$("#paragrafo-empty").remove();

    //** Aula 54 - Loop Each;

//--var lista = ['HTML','CSS','Javascript','jQuery','PHP'];

//--$.each(lista,function(index,value){
    //--console.log('O elemento: ' + index + ' tem o valor de: ' + value);
//--});

//--var pessoa = {
    //--'nome': 'João Pedro',
    //--'dataNasc': '20/01/1990',
    //--'CPF': '111.111.111-11'
//--};

//--$.each(pessoa, function( chave, valor ) {
    //console.log('O elemento de chave [' + chave + '] tem o valor de ' + valor);
//--});

//Pegando uma lista html
//--var interesses = $('#interesses li');

//--$.each(interesses, function( chave, valor ) {
    //Pegando apenas o text do elemento html da lista;
    //--console.log($(valor).text());
//--});

    //** Aula 54 - Formulario jQuery;

//Pegando o valor
//--var conteudoInput = $('#campo_nome').val();
//--console.log(conteudoInput);
//Mudando uma label de Ivan Dias para Marcio Biason em jQuery;
//--$('#campo_nome').val('Marcio Biason');
//Pegando o value de um Drop Down List;
//--$('#options').val();
//Pegando o text selecionado em um Drop Down;
//--console.log($('#options').find(':selected').text());
//OnChange em jQuery. Pegando quando o Drop Down Muda;
//--$('#options').change(function () {
    //--console.log($('#options').find(':selected').text());
//--});

//Radio Buttons em jQuery, Pegando o valor Checkado;
//--console.log($("input[name='genero']:checked").val());
//Radio Buttons em jQuery, Pegando o texto do radio Checkado;
//--console.log($("input[name='genero']:checked").parent('span').text());

//Trabalhando com Check Boxes em jQuery;
//--$("input[name='interesse']").change(function() {

    //--var checkboxes_selecionados = $("input[name='interesse']:checked");
    //--var textos = [];    

    //--$.each(checkboxes_selecionados, function( index, value ) {        
        //--textos.push($(value).parent("span").text());    
    //--});        
    //--console.log(textos);    
//--});

    //** Aula 54 - Manipulando CSS em jQuery;

//--$('#adicionar_classe').click(function(){
    //--$('#paragrafo-classes').addClass('styling');
//--});

//--$('#remover_classe').click(function(){
    //--$('#paragrafo-classes').removeClass('styling');
//--});

//--$('#alternar_classe').click(function(){
    //--$('#paragrafo-classes').toggleClass('styling');
//--});

        //** Aula 54 - Eventos em jQuery;

//--$("elemento").on({

    //--click: function(){
        // Código a ser executado no evento click
    //--}, 
    //--mouseenter: function(){
        // Código a ser executado no evento mouseenter
    //--}, 
    //--mouseleave: function(){
        // Código a ser executado no evento mouseleave
    //--} 
//--});

//Mostrando e escondendo o botão em tempo de execução;
//--$('#nome').keyup(function(){
    //--if ($('#nome').val()){
        //--$('#confirmar').css('display','initial');
    //--}else{
        //--$('#confirmar').css('display','none');
    //--}
//--});

        //** Aula 54 - Efeitos em jQuery;

//Escondendo o botão com Time e só depois escreve o 'texto-escondido';
//--$('#botao-esconder').click(function(){
    //--$(this).hide(1000,function(){
        //--$('#texto-escondido').show();
        //--});    
//--});

//Escondendo e girando o botão com Time mudando a classe para 'flip';
//--$('#toggle-tab').click(function(){
    //$('#tab-content').fadeToggle(500,function(){
    //--$('#tab-content').slideToggle(500,function(){
        //--$('#toggle-tab').toggleClass('flip');
    //--});   
//--});

    //** Aula 54 - Animate em jQuery;

//--$('#animar').click(function(){
    //--$('#quadrado').animate({
        //--width: '+=20px'
    //--},5000);

    //--$('#quadrado').animate({
        //--height: '+=20px'
    //--},5000);
//--});

    //** Aula 54 - Metodo em Cadeia em jQuery;

//--$("#animar").click(function(){

    //--$("#quadrado").animate({
        //--width: '+=20px'
    //--},500).animate({
        //--height: '+=20px'
    //--},500, function() {
        //--$("#quadrado").css('background-color', 'green')
    //--});
//--});

    //** Aula 68 - Funções Callback;

    //--function pegar_usuario(callback){
        //Setando TimeOut de 2 segundos;
        //--window.setTimeout(function(){
        //--var u = {'nome': 'João'};

        //--callback(u);

        //--},2000);}
            
    //--pegar_usuario(function(user){
        //--console.log('Olá ' + user.nome + ', como vai?');
    //--});


    //** Aula 69 - Lidando com erros;

    //--function pegar_usuario(){

        //--window.setTimeout(function(){
            //--var u = {'nome': 'João'};
            //--return u;
        //--}, 1000);
        
    //--}
            
    //--function saudar_usuario(user) {
        //--console.log('Olá ' + user.nome + ', como vai?');
    //--}
    
    //--var user = {'nome': ''};

    //--try{

        //--if (user.nome == ''){
            //--throw 'Nome em branco';
        //--}
        
        //--saudar_usuario(user);

    //--} catch (err) {
        //--console.log('Olá, *** como vai? ')
        //--console.log('Erro: ' + err);
    //--} //--finally{
        //--console.log('Esse comando será sempre executado!')
    //--}

    //** Aula 70 - Operador Ternario;

//--var mensagem;
//--var nome = 'Marc';

//Condicao ? True : False;
//--mensagem = nome ? 'Ola ' + nome : 'erro';

//--console.log(mensagem);

//--nome = "";
//--idade = 32;

//Ternario com mais de uma condição;
//--mensagem = (nome && idade) ? 'Olá ' + nome + ', você tem ' + idade + ' anos.' 
    //--: (!nome && !idade) ? "Nome e idade não informados"
    //--: (!idade) ? "Idade não informada"
    //--: "Nome não informado";
    
    //--console.log(mensagem);

    //** Aula 71 - Escopo;

    //--function criar_nome() {
        //--var nome = 'Maria';
        //--console.log(nome); // O console mostrará 'Maria'
    //--}

    //--if (x == 0){
        //Let cria uma variavel local em if's, while's, for's;
        //--let nome = 'Mariana';
    //--}

    //Criando a variavel let nas estruturas de blocos!!!
    //--for(let a = 0; a < 5; a++){        
    //--}

    //--criar_nome();
    //--console.log(nome); // Este comando gerará um erro, 

    //** Aula 72 - NameSpaces;

//--var meuWebApp = {

//--'nome': 'Felipe',

//--'ver_nome' : function () {
    //--console.log(meuWebApp.nome)
//--}
//--};

//meuWebApp.ver_nome();

//--var meuWebApp = (function() {

    //--var nome= "Felipe";
    
    //--return {
        //--ver_nome: function() {
            //--return nome;    
        //--},
        //--mudar_nome(novo_nome) {
            //--nome = novo_nome;
        //--},
        //--apagar_nome: function() {
            //--nome = null;
        //--}
    //--};  
//--})();   

//--console.log(meuWebApp.ver_nome());
//--meuWebApp.mudar_nome('Marcos');
//--console.log( meuWebApp.ver_nome() );
//--meuWebApp.apagar_nome();

    //** Aula 73 - JSON;

//--var funcionario = {
    //--'nome': "Fernanda Costa",
    //--'d_nascimento': '1988-10-01',
    //--'CPF': '111.111.111-11'};

//Convertendo o objeto para JSON;
//--var funcionarioJson = JSON.stringify(funcionario);
//--console.log(funcionarioJson);

//Convertendo JSON para Objeto;
//--var funcionarioObjeto = JSON.parse(funcionarioJson);
//--console.log(funcionarioObjeto);

    //** Aula 75 - AJAX Request;

//--var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

//--xhttp.onreadystatechange = function() {
    //State4 = Requisição finalizada e resposta recebida Status200 = OK - Resposta recebida sem problemas
    //--if (this.readyState == 4 && this.status == 200) {
        //Capturando o JSON;
        //--console.log(this.responseText);
    //--}
//--};

//Fazendo uma Requisição para o openWearther;
//--xhttp.open("GET", "https://openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22");
//--xhttp.send();

    //** Aula 76 - AJAX Response;

//--function mostrarTemperatura(dados){
    //--var dadosObj = JSON.parse(dados);
    //--console.log(dadosObj);
//--}

//--function tempo_londres(callback) {
    //--var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
                    
    //--xhttp.onreadystatechange = function() {
        //--if (this.readyState == 4 && this.status == 200) {
            //--callback(this.responseText);}};

    //--xhttp.open("GET", "https://openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22");
    //--xhttp.send();
//--}

//Chamando funcao com CallBack;
//--tempo_londres(mostrarTemperatura);

        //** Aula 77 - AJAX com jQuery;

function apresentarDados(data) {
    $('#temp_atual').html(data.main.temp);
    $('#temp_max').html(data.main.temp_max);
    $('#temp_min').html(data.main.temp_min);
}

function pegarDados (callback) {
$.ajax({
    url: 'https://openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22',
    type: 'GET',
    dataType:'json',
    success: function(data) {
        callback(data);
    },
    error: function() {
        console.log('Erro na requisição');
    }
    });
}

pegarDados(apresentarDados);


});