   // Exercicio 1;

document.getElementById('converter').onclick = function(){
    document.getElementById('temp_fahr').innerHTML = celsiusFahrenheit(parseInt(document.getElementById('temp_celsius').value));}

function celsiusFahrenheit(c){
    if (c){
        return (9 * parseInt(c) / 5) + 32;}
    else{
        return null;}}

   // Exercicio 2;

var list_element = document.getElementById('anos_copa');
list_element.innerHTML = '';

//Incremento de 4 em 4 anos e imprimindo os anos de Copa; 
   for (var ano = 1930; ano <= 2018; ano += 4){
        list_element.innerHTML += '<li> Ano: ' + ano;}

   // Exercicio 3;

document.getElementById('calcular').onclick = function(){
    document.getElementById('result').innerHTML = '';
    document.getElementById('result').innerHTML = calcularAprovacao(parseFloat(document.getElementById('nota1').value),
                                                                    parseFloat(document.getElementById('nota2').value),
                                                                    parseFloat(document.getElementById('n_faltas').value));}
function calcularAprovacao(n1,n2,f){
    var media = (parseInt(n1) + parseInt(n2)) /2;
    //Foramula para calcular a porcentagem de faltas; Onde 20 é o Total de aulas!!!!!;
    var presenca = (20 - f) / 20;
    if (media >= 6.5 && presenca >= 0.7){
        return 'Aprovado com ' + media + ' de média e ' + f + ' faltas.' ;}
    else if (media < 6.5 && presenca < 0.7){
        return 'Reprovado por ' + f + ' faltas e média de ' + media + '.';}
    else if (presenca < 0.7){
        return 'Reprovado por ' + f + ' faltas.';}
    else{
        return 'Reprovado por média de ' + media + '.';}}

   // Exercicio 4;

var vendas_cursos = [
    {   'aluno': 'Emmanuel Gomes',
        'data': '10/06/2018',
        'valor': 34.99,
        'reembolso': null},

    {   'aluno': 'Carla Dias',
        'data': '10/06/2018',
        'valor': 29.99,
        'reembolso': null},

    {   'aluno': 'Rafael Marques',
        'data': '11/06/2018',
        'valor': 39.99,
        'reembolso': '13/06/2018'},

    {   'aluno': 'Maria Isabel Pereira',
        'data': '11/06/2018',
        'valor': 29.99,
        'reembolso': null},

    {   'aluno': 'Andre Luis Silva',
        'data': '12/06/2018',
        'valor': 34.99,
        'reembolso': '13/06/2018'}];

function retornaAlunos(obj){
    //Percorrendo o objeto e preenchedo uma lista com o nome os e dos pai respectivos;]
    var tdHTML = ''
    for (var a = 0; a < obj.length; a ++){
    //Verifica se o aluno solicitou reembolso;
    if (!obj[a].reembolso){
         tdHTML +=  '<tr>' +
                        '<td>' + obj[a].aluno + '</td>' +
                        '<td>' + obj[a].data + '</td>' +
                        '<td>' + obj[a].valor + '</td>' +
                    '</tr>';}}
    return  tdHTML;}

function retornaTotal(obj){
    var total = 0;
    for (var a = 0; a < obj.length; a ++){
        if (!obj[a].reembolso){
            total += obj[a].valor;}}
    return total;}

document.getElementById('vendas_cursos').innerHTML =  retornaAlunos(vendas_cursos);
document.getElementById('total_vendas').innerHTML = retornaTotal(vendas_cursos);