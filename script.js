'use strict';

//Evento do botão pesqusiar CEP
const btn = document.getElementById('sendCep');

btn.addEventListener("click", function(e) {
    e.preventDefault();
    const cep = document.getElementById('cep').value;
    pesquisarCep(cep)
})

const pesquisarCep = async(cep) => {
//Incluindo CEP na página
    document.getElementById('retornoCep').innerHTML = "Cep: " + cep;

//Buscando CEP na API
    const url = `https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode=${cep}`;
    const dados = await fetch(url, {mode: 'cors'});
    const lojas = await dados.json();
    selecionarLoja(lojas);

//Limpando CEP no formulário e na Página com o botão Alterar
    const btnAlterar = document.getElementById('alterarCep');

    btnAlterar.addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('cep').value = '';
    document.getElementById('retornoCep').innerHTML = '';

})
}

//Selenionar o primeiro array de lojas que a API retornou
const selecionarLoja = (lojas) => {
    if (lojas.length > 1 ){
        let lojasProx = lojas[0]
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

//Filtrando Produtos
const listaProdutos = (produto) =>{

    //Filtrando Primeiro Produto
    const primeiroProduto =[produto[0]]
    primeiroProduto.forEach(itens =>{
        
        const nomeProduto = itens.productName
        console.log (nomeProduto)
        
    })

    //Filtrando Primeiro Preço
   primeiroProduto.forEach(itens => {
        const items = itens.items
        items.forEach (sellers => {
            const Sellers = sellers.sellers
            Sellers.forEach(commertialOffer =>{
                const CommertialOffer = commertialOffer.commertialOffer.Price;
                console.log (CommertialOffer)
            })
        })
    })
    
    //Filtrando Segundo Produto
    const segundoProduto =[produto[1]]
    segundoProduto.forEach(itens =>{
        
        const nomeProduto2 = itens.productName
        console.log(nomeProduto2 ) 
        
    })

    //Filtrando Segundo Preço
   segundoProduto.forEach(itens => {
        const items2 = itens.items
        items2.forEach (sellers2 => {
            const Sellers2 = sellers2.sellers
            Sellers2.forEach(commertialOffer =>{
                const CommertialOffer2 = commertialOffer.commertialOffer.Price;
                console.log(CommertialOffer2) 
            })
        })
    })

    //Filtrando Terceiro Produto
    const terceiroProduto =[produto[2]]
    terceiroProduto.forEach(itens =>{
        
        const nomeProduto3 = itens.productName
        console.log(nomeProduto3)
        
        
    })

    //Filtrando terceiro Preço
   terceiroProduto.forEach(itens => {
        const items3 = itens.items
        items3.forEach (sellers => {
            const Sellers3 = sellers.sellers
            Sellers3.forEach(commertialOffer =>{
                const CommertialOffer3 = commertialOffer.commertialOffer.Price;
                console.log(CommertialOffer3)
            })
        })
    })

    //Filtrando Quarto Produto
    const quartoProduto =[produto[3]]
    quartoProduto.forEach(itens =>{
        
        const nomeProduto4 = itens.productName
        console.log(nomeProduto4)
        
    })

    //Filtrando quarto Preço
   quartoProduto.forEach(itens => {
        const items4 = itens.items
        items4.forEach (sellers => {
            const Sellers4 = sellers.sellers
            Sellers4.forEach(commertialOffer =>{
                const CommertialOffer4 = commertialOffer.commertialOffer.Price;
                console.log(CommertialOffer4)
            })
        })
    })

    //Filtrando QuintoProduto
    const quintoProduto =[produto[4]]
    quintoProduto.forEach(itens =>{
        
        const nomeProduto5 = itens.productName
        console.log(nomeProduto5)
        
    })

    //Filtrando Quinto Preço
   quintoProduto.forEach(itens => {
        const items5 = itens.items
        items5.forEach (sellers => {
            const Sellers5 = sellers.sellers
            Sellers5.forEach(commertialOffer =>{
                const CommertialOffer5 = commertialOffer.commertialOffer.Price;
                console.log(CommertialOffer5)
            })
        })
    })

    //Filtrando Sexto Produto
    const sextoProduto =[produto[5]]
    sextoProduto.forEach(itens =>{
        
        const nomeProduto6 = itens.productName
        console.log(nomeProduto6)
        
    })

    //Filtrando Sexto Preço
   sextoProduto.forEach(itens => {
        const items6 = itens.items
        items6.forEach (sellers => {
            const Sellers6 = sellers.sellers
            Sellers6.forEach(commertialOffer =>{
                const CommertialOffer6 = commertialOffer.commertialOffer.Price;
                console.log(CommertialOffer6)
            })
        })
    })

    //Filtrando Sétimo Produto
    const setimoProduto =[produto[6]]
    setimoProduto.forEach(itens =>{
        
        const nomeProduto7 = itens.productName
        console.log(nomeProduto7)
        
    })

    //Filtrando Sétimo Preço
   setimoProduto.forEach(itens => {
        const items7 = itens.items
        items7.forEach (sellers => {
            const Sellers7 = sellers.sellers
            Sellers7.forEach(commertialOffer =>{
                const CommertialOffer7 = commertialOffer.commertialOffer.Price;
                console.log(CommertialOffer7)
            })
        })
    })

    //Filtrando Oitavo Produto
    const oitavoProduto =[produto[7]]
    oitavoProduto.forEach(itens =>{
        
        const nomeProduto8 = itens.productName
        console.log(nomeProduto8)
        
    })

    //Filtrando oitavo Preço
   oitavoProduto.forEach(itens => {
        const items8 = itens.items
        items8.forEach (sellers => {
            const Sellers8 = sellers.sellers
            Sellers8.forEach(commertialOffer =>{
                const CommertialOffer8 = commertialOffer.commertialOffer.Price;
                console.log(CommertialOffer8)
            })
        })
    })

    //Filtrando Nono Produto
    const nonoProduto =[produto[8]]
    nonoProduto.forEach(itens =>{
        
        const nomeProduto10 = itens.productName
        console.log(nomeProduto10)
        
    })

    //Filtrando Nono Preço
   nonoProduto.forEach(itens => {
        const items9 = itens.items
        items9.forEach (sellers => {
            const Sellers9 = sellers.sellers
            Sellers9.forEach(commertialOffer =>{
                const CommertialOffer10 = commertialOffer.commertialOffer.Price;
                console.log(CommertialOffer10)
            })
        })
    })

    //Filtrando Décimo Produto
    const decimoProduto =[produto[9]]
    decimoProduto.forEach(itens =>{
        
        const nomeProduto10 = itens.productName
        console.log(nomeProduto10)
        
    })

    //Filtrando Décimo Preço
   decimoProduto.forEach(itens => {
        const items10 = itens.items
        items10.forEach (sellers => {
            const Sellers10 = sellers.sellers
            Sellers10.forEach(commertialOffer =>{
                const CommertialOffer10 = commertialOffer.commertialOffer.Price;
                console.log(CommertialOffer10)
            })
        })
    })

   
    const produtos = [{
        produto : "lashdasdh",
        preco : 0.00
    },
    {
        produto : "askdjadj",
        preco   : 0.00
    }]
    
}








 //.items.sellers.commertialOffer.Installments*/
 /*const Installments = installments.Installments
                    console.log(Installments)*/