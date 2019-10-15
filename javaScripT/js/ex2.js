    // Exercicio 1;
var soma = parseInt(document.getElementById('num_1').innerHTML) + parseInt(document.getElementById('num_2').innerHTML);
document.getElementById('resultado').innerHTML = '<strong>' + soma + '<strong/>';

    // Exercicio 2;
function celsiusFahrenheit(c){
    return (9 * parseInt(c) / 5) + 32
}
document.getElementById('caixa_amarela').innerHTML = celsiusFahrenheit(document.getElementById('caixa_azul').innerHTML);

    // Exercicio 3;
var grupos = [ 
    [ "João" , "Maria" ],
    [ "Pedro" , "Joana", "André", "Júlio" ],
    [ "Carolina" , "Helena", "Marcelo" ]
]; 
var newGroup = grupos.slice(-2,);
newGroup.push(["Mariana", "Felipe",  "Carla"]);
console.log(newGroup);

    // Exercicio 4;
var curso = {
    'titulo': "Aprenda programação em Python",
    'categoria': ['programação', 'tecnologia', 'python'],
    'n_aval_5_estrelas': 420,
    'n_aval_4_estrelas': 80,
    'n_aval_3_estrelas': 33,
    'n_aval_2_estrelas': 20,
    'n_aval_1_estrela': 4,
    'total_aval': function(){
        return parseInt(this.n_aval_5_estrelas) + 
               parseInt(this.n_aval_4_estrelas) + 
               parseInt(this.n_aval_3_estrelas) + 
               parseInt(this.n_aval_2_estrelas) + 
               parseInt(this.n_aval_1_estrela)},
    'average' : function(){
            var med1 = parseInt(this.n_aval_5_estrelas * 5) + 
                       parseInt(this.n_aval_4_estrelas * 4) + 
                       parseInt(this.n_aval_3_estrelas * 3) + 
                       parseInt(this.n_aval_2_estrelas * 2) + 
                       parseInt(this.n_aval_1_estrela * 1);

            //Truncando para uma casa decimal;
            return (med1 / this.total_aval()).toFixed(1);
            }
        }
document.getElementById('categoria_principal').innerHTML = curso.titulo;
document.getElementById('total_aval').innerHTML = curso.total_aval();
document.getElementById('media_aval').innerHTML = curso.average();

    // Exercicio 5;
var pessoa = {
    'nome': 'Marc',
    'sobrenome': 'Biason',
    'email': 'marciobiason333@gmail.com',
    'nomeCompleto': function(){
        return this.nome + ' ' + this.sobrenome;
    }
}

function retornaHTML(obj){
    return  '<div class="tableBox">' +
                '<table>' +
                    '<tr>' +
                        '<th> Nome Completo </th>' +
                        '<th> Email </th>' +
                    '</tr>' +
                    '<tr>' +
                        '<td>' + obj.nomeCompleto() + '</td>' +
                        '<td>' + obj.email + '</td>' +
                    '</tr>' +
                '</table>' +
            '</div>';} 

document.getElementById('tabela').innerHTML = retornaHTML(pessoa);