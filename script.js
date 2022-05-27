'use strict';

const preencherCard = (endereco) => {
    document.getElementById('logradouro').value = endereco.logradouro;
    window.alert(endereco.logradouro)
    
    //document.getElementById('bairro').value = endereco.bairro;
    //document.getElementById('localidade').value = endereco.localidade;
    
    console.log(endereco.logradouro);
    //console.log(endereco.bairro);
    //console.log(endereco.localidade)
    
}

const pesquisarCep = async() => {
    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    
    const dados = await fetch(url);
    const endereco = await dados.json();
    preencherCard(endereco);
}
 
document.getElementById('cep').addEventListener('click', pesquisarCep);


