function consultaCEP() {
    var $CEP = document.getElementById("cep").value.replace(/\D/g, '');
    var url = 'https://viacep.com.br/ws/' + $CEP + '/json';
    var request = new XMLHttpRequest();

    request.open('GET', url)
    request.onerror = function (e) {
        document.getElementById("resposta").innerHTML = 'API OFFLINE ou CEP INVALIDO'
    }

    request.onload = () => {
        var resp = JSON.parse(request.responseText);

        if (resp.erro === true) {
            document.getElementById('resposta').innerHTML = 'CEP Não Encontrado';
        } else {
            document.getElementById('resposta').innerHTML = 'CEP: ' + resp.cep + '<br/>' +
                                            'Logradouro: ' + resp.logradouro + '<br/>' +
                                            'bairro: ' + resp.bairro + '<br/>' +
                                            'Cidade/UF: ' + resp.localidade + '/' + resp.uf; 
        }
    }
    request.send();
}