$(document).ready(function(){

        //** Exercicio 1;
function popularSelectComPaises(data) {
    for (var a = 0; a < data.length; a++){
        document.getElementById('paises').innerHTML += '<option value="'+ data[a].alpha3code +'">' + data[a].name + '</option>';
    }
}

function pegarPaises(callback) {
    $.ajax({
    url: 'https://restcountries.eu/rest/v2/all',
    type: 'GET',
    dataType:'json'
    }).done(function(data){
        callback(data);
    }).fail(function(){
        console.log('Erro na requisição');        
    });
}

pegarPaises(popularSelectComPaises);

    //** Exercicio 2;
var cursos = [
{   "titulo": "PHP",
    "aval": []
},
{   "titulo": "Javascript",
    "aval": [5,5,4.5,4,5,5,5,4.5]
},
{   "titulo": "Python",
    "aval": [5,5,4,4,5,3,5,4,4,5]
},
{   "titulo": "Machine Learning",
    "aval": [5,5,4.5]
}];

function media_aval(listaCursos) {

    for(var a = 0; a < listaCursos.length; a++){
        try{
            if (listaCursos[a].aval.length == 0) {
                throw 'Curso: ' + listaCursos[a].titulo + ' não possui avaliações;';      
            } else if (listaCursos[a].aval.length < 5) {
                throw 'Curso: ' + listaCursos[a].titulo + ' possui menos de 5 avaliações;';  
            } 

            var soma = 0;

            for (var b = 0; b < listaCursos[a].aval.length; b++){
                soma += listaCursos[a].aval[b];
            }

            var media = soma / listaCursos[a].aval.length;

            console.log('Curso: ' +  listaCursos[a].titulo + ' tem média de: ' + media.toFixed(2));
        }
        catch(err){
            console.log(err);
        }
    }
}

media_aval(cursos);

    //** Exercicio 3;
var userNameSpace = {

    'usuarios' : {
        '33884h': 'João Gomes',
        '43585f': 'Maria Luisa',
        '93661h': 'Pedro Henqrique',
        '23172g': 'Paula Carvalho'},
    
    'acessos': [{
        "usuario": "33884h",
        "data": "10/07/18"},
        {   "usuario": "33884h",
            "data": "11/07/18"
        },
        {   "usuario": "43585f",
            "data": "19/07/18"
        },
        {   "usuario": "93661h",
            "data": "24/07/18"
        },
        {   "usuario": "23172g",
            "data": "13/08/18"
        },
        {   "usuario": "93661h",
            "data": "14/08/18"
        }],

    'imprimirAcessos': function(){
        for (var a = 0; a < this.acessos.length; a++){
            $('#acessos').append('<li> Acesso de '+ this.usuarios[this.acessos[a].usuario] +', no dia ' + this.acessos[a].data)
        }
    }
}

userNameSpace.imprimirAcessos();

    //** Exercicio 4;
function shuffle(array) {

var currentIndex = array.length, temporaryValue, randomIndex;
    
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    
    return array;
}

function pegarPergunta(callback) {
    $.ajax({
    url: 'https://opentdb.com/api.php?amount=1&category=11&difficulty=hard&type=multiple',
    type: 'GET',
    dataType:'json'
    }).done(function(data){
        callback(data.results[0])
    }).fail(function(){
        console.log('Erro na requisição');        
    });
}

$('#novaPergunta').click(function(){

    $('#opcoes').html('');
    $('#erroAcerto').html('');
    $('#pergunta').html('');
    $('#novaPergunta').hide();
    pegarPergunta(gerarPergunta);
    
})

function gerarPergunta(pergunta) {

    $('#pergunta').html(pergunta.question);
    var resposta_correta = pergunta.correct_answer;
    var respostas = pergunta.incorrect_answers;
    respostas.push(resposta_correta);
    respostas = shuffle(respostas);
    
    for(var a =0; a < respostas.length; a++){
        $('#opcoes').append('<input type="radio" name="opcao" value="'+ respostas[a] +'"> ' + respostas[a] + ' <br>');
    }

    $('#opcoes input[name="opcao"]').change(function(){
        $('#submeter').show();
    });

    $('#submeter').click(function(){

        var resposta_escolhida = $('#opcoes input[name="opcao"]:checked').val();
        $('#submeter').hide();

        if (resposta_escolhida == resposta_correta){
            $('#erroAcerto').html('<span style="color: green; font-weight: bold"> Parabéns, você acertou! </span>');
        } else{
            $('#erroAcerto').html('<span style="color: red; font-weight: bold"> Erou! </span>');
        }

        $('#opcoes input[name="opcao"]').attr('disabled',true);
        $('#novaPergunta').show();
    })  

}

pegarPergunta(gerarPergunta);

});