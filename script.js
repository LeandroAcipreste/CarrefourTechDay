'use strict';
// Consultar CEP

const btn = document.getElementById('sendCep')

btn.addEventListener("click", function(e) {
    e.preventDefault();
    const cep = document.getElementById('cep').value;
    pesquisarCep(cep)
})

const pesquisarCep = async(cep) => {
    
    const url = `https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode=${cep}`;
    const dados = await fetch(url, {mode: 'cors'});
    const endereco = await dados.json();
    preencherCard(endereco);

}

const preencherCard = (endereco) => {
    
   
    //document.getElementById('logradouro').innerHTML = "Logradouro: " + endereco.sellers[0];
    //document.getElementById('bairro').innerText = "Bairro: " + endereco.sellers.name;
    //document.getElementById('localidade').innerText = "Cidade:  " + endereco.sellers.logo;
    
    console.log(endereco);
    //console.log(endereco.bairro);
    //console.log(endereco.localidade)
    
}


