'use strict';

//Evento do botão pesqusiar CEP
const btn = document.getElementById('sendCep');

 const pegaCep = btn.addEventListener("click", function(e) {
    e.preventDefault();
    const cep = document.getElementById('cep').value;
    if(cep.length < 1){
        window.alert("O campo está vazio, por favor digite um CEP!")
    }else{
        pesquisarCep(cep)
    }
})

const pesquisarCep = async(cep) => {
//Incluindo CEP na página
    document.getElementById('retornoCep').innerHTML = "Cep: " + cep;

//Buscando CEP na API
    const url = `https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode=${cep}`;
    const dados = await fetch(url, {mode: 'cors'});
    const lojas = await dados.json();
    selecionarLoja(lojas);

//Limpando todos os dados na Página com o botão Alterar
    const btnAlterar = document.getElementById('alterarCep');

    btnAlterar.addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('cep').value = '';
    document.getElementById('retornoCep').innerHTML = '';
    
    document.getElementById('produto1').innerHTML = '';
    document.getElementById('preco1').innerHTML = '';

    document.getElementById('produto2').innerHTML = '';
    document.getElementById('preco2').innerHTML = '';

    document.getElementById('produto3').innerHTML = '';
    document.getElementById('preco3').innerHTML = '';

    document.getElementById('produto4').innerHTML = '';
    document.getElementById('preco4').innerHTML = '';

    document.getElementById('produto5').innerHTML = '';
    document.getElementById('preco5').innerHTML = '';

    document.getElementById('produto6').innerHTML = '';
    //document.getElementById('preco6').innerHTML = '';

    document.getElementById('produto7').innerHTML = '';
    document.getElementById('preco7').innerHTML = '';

    document.getElementById('produto8').innerHTML = '';
    document.getElementById('preco8').innerHTML = '';

    document.getElementById('produto9').innerHTML = '';
    document.getElementById('preco9').innerHTML = '';

})
}

//Selenionar o primeiro array de lojas que a API retornou
const selecionarLoja = (lojas) => {
    if (lojas.length > 1 ){
        const lojasProx = lojas[0]
        selecionarLojaCerta(lojasProx)
    }
}

//Selecionar a primeira loja do array de lojas
const selecionarLojaCerta = (lojasProx) => {
    
    const loja = lojasProx.sellers
    if (loja.length > 1){
        const lojaCerta = loja[0]
        const idLoja = lojaCerta.name
        buscarProdutos(idLoja)
    }
}

//Buscar produtos da Loja na API
const buscarProdutos = async(idLoja)=>{

    const url = `https://mercado.carrefour.com.br/api/catalog_system/pub/products/search?fq=${idLoja}`
    const dados = await fetch(url, {mode: 'cors'});
    const produtos = await dados.json();
    listaProdutos(produtos);
}
//Array que está armazendando a busca 
 
const listaProdutos = (produto) =>{
    const produtos = [{
    }]
    console.log(produtos)

//Buscando Nome do Produto e Preço para armazendando no Array Produtos
    const primeiroProduto =[produto[0]]
    primeiroProduto.forEach(itens =>{
        const items = itens.items
        items.forEach (sellers => {
            const Sellers = sellers.sellers
            Sellers.forEach(commertialOffer =>{
                produtos.push({
                    produto1 : itens.productName,
                    preco1 : commertialOffer.commertialOffer.Price
                })
            })
        }) 
    })
    
//Buscando Nome do Produto e Preço para armazendando no Array Produtos
    const segundoProduto =[produto[1]]
    
    segundoProduto.forEach(itens =>{
        
        const items2 = itens.items
        items2.forEach (sellers2 => {
            const Sellers2 = sellers2.sellers
            Sellers2.forEach(commertialOffer =>{
                produtos.push({
                    produto2 : itens.productName,
                    preco2 : commertialOffer.commertialOffer.Price
                })
            
            })
        })
    })

//Buscando Nome do Produto e Preço para armazendando no Array Produtos
    const terceiroProduto =[produto[2]]
    terceiroProduto.forEach(itens =>{
        
        const items3 = itens.items
        items3.forEach (sellers3 => {
            const Sellers3 = sellers3.sellers
            Sellers3.forEach(commertialOffer =>{
                produtos.push({
                    produto3 : itens.productName,
                    preco3 : commertialOffer.commertialOffer.Price
                })
            })
        })
    })

//Buscando Nome do Produto e Preço para armazendando no Array Produtos
    const quartoProduto =[produto[3]]
    quartoProduto.forEach(itens =>{
        
        const items4 = itens.items
        items4.forEach (sellers2 => {
            const Sellers4 = sellers2.sellers
            Sellers4.forEach(commertialOffer =>{
                produtos.push({
                    produto4 : itens.productName,
                    preco4 : commertialOffer.commertialOffer.Price
                })
            })
        })
    })

//Buscando Nome do Produto e Preço para armazendando no Array Produtos
    const quintoProduto =[produto[4]]
    quintoProduto.forEach(itens =>{
        
        const items5 = itens.items
        items5.forEach (sellers2 => {
            const Sellers5 = sellers2.sellers
            Sellers5.forEach(commertialOffer =>{
                produtos.push({
                    produto5 : itens.productName,
                    preco5 : commertialOffer.commertialOffer.Price
                })
            })
        })
    })

//Buscando Nome do Produto e Preço para armazendando no Array Produtos
    const sextoProduto =[produto[5]]
    sextoProduto.forEach(itens =>{
        
        const items6 = itens.items
        items6.forEach (sellers2 => {
            const Sellers6 = sellers2.sellers
            Sellers6.forEach(commertialOffer =>{
                produtos.push({
                    produto6 : itens.productName,
                    preco6 : commertialOffer.commertialOffer.Price
                })
            })
        })
        
    })

//Filtrando Nome do Produto e Preço e armazendando no Array Produtos
    const setimoProduto =[produto[6]]
    setimoProduto.forEach(itens =>{
        
        const items7 = itens.items
        items7.forEach (sellers2 => {
            const Sellers7 = sellers2.sellers
            Sellers7.forEach(commertialOffer =>{
                produtos.push({
                    produto7 : itens.productName,
                    preco7 : commertialOffer.commertialOffer.Price
                })
            })
        })
    })

//Buscando Nome do Produto e Preço para armazendando no Array Produtos
    const oitavoProduto =[produto[7]]
    oitavoProduto.forEach(itens =>{
        
        const items8 = itens.items
        items8.forEach (sellers2 => {
            const Sellers8 = sellers2.sellers
            Sellers8.forEach(commertialOffer =>{
                produtos.push({
                    produto8 : itens.productName,
                    preco8 : commertialOffer.commertialOffer.Price
                })
            })
        })
    })

//Buscando Nome do Produto e Preço para armazendando no Array Produtos
    const nonoProduto =[produto[8]]
    nonoProduto.forEach(itens =>{
        
        const items9 = itens.items
        items9.forEach (sellers2 => {
            const Sellers9 = sellers2.sellers
            Sellers9.forEach(commertialOffer =>{
                produtos.push({
                    produto9 : itens.productName,
                    preco9 : commertialOffer.commertialOffer.Price
                })
            })
        })
    })
    
 //Buscando Nome do Produto e Preço para armazendando no Array Produtos
    const decimoProduto =[produto[9]]
    decimoProduto.forEach(itens =>{
    
        const items10 = itens.items
        items10.forEach (sellers => {
            const Sellers10 = sellers.sellers
            Sellers10.forEach(commertialOffer =>{
                produtos.push({
                    produto10 : itens.productName,
                    preco10 : commertialOffer.commertialOffer.Price
                })
            })
        })
    })
   
//colocando Produtos e Preços da DOM 

    document.getElementById('produto1').innerHTML = produtos[1].produto1;
    document.getElementById('preco1').innerHTML = produtos[1].preco1.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    document.getElementById('produto2').innerHTML = produtos[2].produto2;
    document.getElementById('preco2').innerHTML = produtos[2].preco2.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    document.getElementById('produto3').innerHTML = produtos[3].produto3;
    document.getElementById('preco3').innerHTML = produtos[3].preco3.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    document.getElementById('produto4').innerHTML = produtos[4].produto4;
    document.getElementById('preco4').innerHTML = produtos[4].preco4.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    document.getElementById('produto5').innerHTML = produtos[5].produto5;
    document.getElementById('preco5').innerHTML = produtos[5].preco5.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    document.getElementById('produto6').innerHTML = produtos[6].produto6;
    //document.getElementById('preco6').innerHTML = produtos[6].preco6.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    document.getElementById('produto7').innerHTML = produtos[7].produto7;
    document.getElementById('preco7').innerHTML = produtos[7].preco7.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    document.getElementById('produto8').innerHTML = produtos[8].produto8;
    document.getElementById('preco8').innerHTML = produtos[8].preco8.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    document.getElementById('produto9').innerHTML = produtos[9].produto9;
    document.getElementById('preco9').innerHTML = produtos[9].preco9.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

}





