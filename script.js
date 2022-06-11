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

    document.getElementById('pro1').innerHTML ='';
    document.getElementById('pro2').innerHTML ='';
    document.getElementById('pro3').innerHTML ='';
    document.getElementById('pro4').innerHTML ='';
    document.getElementById('pro5').innerHTML ='';
    document.getElementById('pro6').innerHTML ='';
    document.getElementById('pro7').innerHTML ='';
    document.getElementById('pro8').innerHTML ='';
    document.getElementById('pro9').innerHTML ='';

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
        const items1 = itens.items
        items1.forEach (sellers2 => {
            produtos.push({
                produto1 : itens.productName,
                preco1 : sellers2.sellers[0].commertialOffer.Price,
                imgUTag: sellers2.images[0].imageUrl
            })
        })
    })
    
//Buscando Nome do Produto e Preço para armazendando no Array Produtos
    const segundoProduto =[produto[1]]
    segundoProduto.forEach(itens =>{
        const items2 = itens.items
        items2.forEach (sellers2 => {
            produtos.push({
                produto2 : itens.productName,
                preco2 : sellers2.sellers[0].commertialOffer.Price,
                imgUTag: sellers2.images[0].imageUrl
            })
        })
    })

//Buscando Nome do Produto e Preço para armazendando no Array Produtos
    const terceiroProduto =[produto[2]]
    terceiroProduto.forEach(itens =>{
        const items3 = itens.items
        items3.forEach (sellers2 => {
            produtos.push({
                produto3 : itens.productName,
                preco3 : sellers2.sellers[0].commertialOffer.Price,
                imgUTag: sellers2.images[0].imageUrl
            })
        })
    })

//Buscando Nome do Produto e Preço para armazendando no Array Produtos
    const quartoProduto =[produto[3]]
    quartoProduto.forEach(itens =>{
        const items4 = itens.items
        items4.forEach (sellers2 => {
            produtos.push({
                produto4 : itens.productName,
                preco4 : sellers2.sellers[0].commertialOffer.Price,
                imgUTag: sellers2.images[0].imageUrl
            })
        })
    })

//Buscando Nome do Produto e Preço para armazendando no Array Produtos
    const quintoProduto =[produto[4]]
    quintoProduto.forEach(itens =>{
        const items5 = itens.items
        items5.forEach (sellers2 => {
            produtos.push({
                produto5 : itens.productName,
                preco5 : sellers2.sellers[0].commertialOffer.Price,
                imgUTag: sellers2.images[0].imageUrl
            })
        })
    })

//Buscando Nome do Produto e Preço para armazendando no Array Produtos
    const sextoProduto =[produto[5]]
    sextoProduto.forEach(itens =>{
        const items6 = itens.items
        items6.forEach (sellers2 => {
            produtos.push({
                produto6 : itens.productName,
                preco6 : sellers2.sellers[0].commertialOffer.Price,
                imgUTag: sellers2.images[0].imageUrl
            })
        })
    })

//Filtrando Nome do Produto e Preço e armazendando no Array Produtos
    const setimoProduto =[produto[6]]
    setimoProduto.forEach(itens =>{
        const items7 = itens.items
        items7.forEach (sellers2 => {
            produtos.push({
                produto7 : itens.productName,
                preco7 : sellers2.sellers[0].commertialOffer.Price,
                imgUTag: sellers2.images[0].imageUrl
            })
        })
    })

//Buscando Nome do Produto e Preço para armazendando no Array Produtos
    const oitavoProduto =[produto[7]]
    oitavoProduto.forEach(itens =>{
        const items8 = itens.items
        items8.forEach (sellers2 => {
            produtos.push({
                produto8 : itens.productName,
                preco8 : sellers2.sellers[0].commertialOffer.Price,
                imgUTag: sellers2.images[0].imageUrl
            })
        })
    })

//Buscando Nome do Produto e Preço para armazendando no Array Produtos
    const nonoProduto =[produto[8]]
    nonoProduto.forEach(itens =>{
        const items9 = itens.items
        items9.forEach (sellers2 => {
            produtos.push({
                produto9 : itens.productName,
                preco9 : sellers2.sellers[0].commertialOffer.Price,
                imgUTag: sellers2.images[0].imageUrl
            })
        })
    })
    
 //Buscando Nome do Produto e Preço para armazendando no Array Produtos
    const decimoProduto =[produto[9]]
    decimoProduto.forEach(itens =>{
        const items10 = itens.items
        items10.forEach (sellers2 => {
            produtos.push({
                produto10 : itens.productName,
                preco10 : sellers2.sellers[0].commertialOffer.Price,
                imgUTag: sellers2.images[0].imageUrl
            })
        })
    })
   
//colocando Produtos, Preços imagem na DOM 

    document.getElementById('produto1').innerHTML = produtos[1].produto1;
    document.getElementById('preco1').innerHTML = produtos[1].preco1.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    
    const pro1 = document.getElementById('pro1')
    const element1 = document.createElement("img") 
    element1.setAttribute('src', produtos[1].imgUTag);
    pro1.appendChild(element1);

    document.getElementById('produto2').innerHTML = produtos[2].produto2;
    document.getElementById('preco2').innerHTML = produtos[2].preco2.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    const pro2 = document.getElementById('pro2')
    const element2 = document.createElement("img") 
    element2.setAttribute('src', produtos[2].imgUTag);
    pro2.appendChild(element2);

    document.getElementById('produto3').innerHTML = produtos[3].produto3;
    document.getElementById('preco3').innerHTML = produtos[3].preco3.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    const pro3 = document.getElementById('pro3')
    const element3 = document.createElement("img") 
    element3.setAttribute('src', produtos[3].imgUTag);
    pro3.appendChild(element3);

    document.getElementById('produto4').innerHTML = produtos[4].produto4;
    document.getElementById('preco4').innerHTML = produtos[4].preco4.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    const pro4 = document.getElementById('pro4')
    const element4 = document.createElement("img") 
    element4.setAttribute('src', produtos[4].imgUTag);
    pro4.appendChild(element4);

    document.getElementById('produto5').innerHTML = produtos[5].produto5;
    document.getElementById('preco5').innerHTML = produtos[5].preco5.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    const pro5 = document.getElementById('pro5')
    const element5 = document.createElement("img") 
    element5.setAttribute('src', produtos[5].imgUTag);
    pro5.appendChild(element5);

    document.getElementById('produto6').innerHTML = produtos[6].produto6;
    //document.getElementById('preco6').innerHTML = produtos[6].preco6.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    const pro6 = document.getElementById('pro6')
    const element6 = document.createElement("img") 
    element6.setAttribute('src', produtos[6].imgUTag);
    pro6.appendChild(element6);

    document.getElementById('produto7').innerHTML = produtos[7].produto7;
    document.getElementById('preco7').innerHTML = produtos[7].preco7.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    const pro7 = document.getElementById('pro7')
    const element7 = document.createElement("img") 
    element7.setAttribute('src', produtos[7].imgUTag);
    pro7.appendChild(element7);

    document.getElementById('produto8').innerHTML = produtos[8].produto8;
    document.getElementById('preco8').innerHTML = produtos[8].preco8.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    
    const pro8 = document.getElementById('pro8')
    const element8 = document.createElement("img") 
    element8.setAttribute('src', produtos[8].imgUTag);
    pro8.appendChild(element8);

    document.getElementById('produto9').innerHTML = produtos[9].produto9;
    document.getElementById('preco9').innerHTML = produtos[9].preco9.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
   
    const pro9 = document.getElementById('pro9')
    const element9 = document.createElement("img") 
    element9.setAttribute('src', produtos[9].imgUTag);
    pro9.appendChild(element9);
}





