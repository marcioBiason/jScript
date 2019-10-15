    //Execercio 1    
document.getElementById('estados').onchange = function () {
    //Pegando o index selecionado;
    localStorage.setItem('estado', document.getElementById('estados').value);
}
//Verificando se já existe algum estado no localStorage;
if (localStorage.estado){
    //Selecionando o valor salvo no LocalStorage
    document.getElementById('estados').value = localStorage.estado;    
}

    //Execercio 2
document.getElementById('confirmar_pedido').onclick = function() {
    var data_atual = new Date().getTime();
    var data_entrega;
    //document.getElementById('data_pedido').innerHTML = data_atual.toDateString('dd-MM-yyyy');

    if (document.getElementById('envios').value == 'escolha') {
        document.getElementById('data_pedido').innerHTML = '';
        document.getElementById('data_entrega').innerHTML = '';
        alert('Selecione uma opção válida');        
    }
    else{
    if (document.getElementById('envios').value == 'normal') {
        data_entrega = data_atual + (18 * 86400000)
    }
    else {
        data_entrega = data_atual + (12 * 86400000)
    }
    document.getElementById('data_pedido').innerHTML = format_date(data_atual);
    document.getElementById('data_entrega').innerHTML = format_date(data_entrega);
    }
}

//Calculando a diferenca em dias entre duas datas;
function calculaDiasDeEntrega(data1,data2){
    return (new Date(data2).getTime() - new Date (data1).getTime()) / 86400000;
}

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

    //Execercio 4
var carros = [
    {   'placa': 'AAA-0198',
        'categoria': '1'
    },
    {   'placa': 'HBP-2837',
        'categoria': '2'
    },
    {   'placa': 'PLQ-0928',
        'categoria': '4'
    },
    {   'placa': 'KQE-2093',
        'categoria': '5'
    },
    {   'placa': 'AMR-9087',
        'categoria': '5'
    },
    {   'placa': 'BQE-8111',
        'categoria': '3'
    },
    {   'placa': 'GXL-9001',
        'categoria': '2'
    },
    {   'placa': 'KPM-7740',
        'categoria': '1'}];

function valorPedagio(veiculo) {

    switch(veiculo.categoria) {
        case '1':
            return 11.22;
            break;
        
        case '2':
            return 22.45;
            break;
        
        case '3':
            return 16.88;
            break;
        
        case '4':
            return 33.65;
            break;
        
        default:
            console.log('Veiculo de placa: ' + veiculo.placa + 'e categoria: ' + veiculo.categoria + ' não fez o pagamento :|' );
            return 0.00;
    }
} 

var total_arrecadado = 0;

for (var a = 0; a < carros.length; a++){
    total_arrecadado += valorPedagio(carros[a]);
}

document.getElementById('faturamento_total').innerHTML = total_arrecadado.toFixed(2);