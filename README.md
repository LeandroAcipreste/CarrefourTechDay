# CarrefourTechDay
Desafio proposto no bootcamp do Carrefour na Dio.me.
Construí meu programa, para buscar as ofertas disponíveis na loja  Carrefour mais próxima, do CEP informado na busca. Tentei construir um ambiente mais próximo possível, do site original do Carrefour.
Eu Utilizei o framework Bootstrap, utilizei o SASS para estilizar os componentes da página. Deixei meu arquivo scrip bem organizado, para fácil leitura do código. 
Implementei uma busca por CEP, na qual o CEP informado pelo usuário, faz uma requisição na API do Carrefour, que retorna a loja mais próxima do CEP informado. Com o retorno da API, meu programa seleciona o ID da primeira loja informada, seguindo a lógica que a primeira loja da lista é a loja mais próxima. Usando o ID da loja mais próxima, meu programa faz uma nova requisição a API, que retorna uma lista de produtos e seus preços. O programa então seleciona o ID do produto, seu preço e sua imagem e mostra na tela para o usuário.
