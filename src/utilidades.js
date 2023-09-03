export const catalogo = [
    {
        id: "1",
        nome: 'Batman nº1',
        editora: 'DC Comics',
        preco: 35,
        nomeArquivoImagem: 'dc-batman.jpg',
        nacional: true,
    },
    {
        id: "2",
        nome: 'Crisis on Infinite Earths nº1',
        editora: 'DC Comics',
        preco: 45,
        nomeArquivoImagem: 'dc-crisis.jpg',
        nacional: false,
    },
    {
        id: "3",
        nome: 'Harley Quinn nº1',
        editora: 'DC Comics',
        preco: 40,
        nomeArquivoImagem: 'dc-harley-quinn.jpg',
        nacional: true,
    },
    {
        id: "4",
        nome: 'Wonder Woman nº1',
        editora: 'DC Comics',
        preco: 20,
        nomeArquivoImagem: 'dc-wonder-woman.jpg',
        nacional: false,
    },
    {
        id: "5",
        nome: 'Avengers nº1',
        editora: 'Marvel Comics',
        preco: 35,
        nomeArquivoImagem: 'marvel-avengers.jpg',
        nacional: true,
    },
    {
        id: "6",
        nome: 'Deadpool nº1',
        editora: 'Marvel Comics',
        preco: 30,
        nomeArquivoImagem: 'marvel-deadpool.jpg',
        nacional: false,
    },
    {
        id: "7",
        nome: 'Iron Man nº1',
        editora: 'Marvel Comics',
        preco: 35,
        nomeArquivoImagem: 'marvel-iron-man.jpg',
        nacional: true,
    },
    {
        id: "8",
        nome: 'Secret Wars nº1',
        editora: 'Marvel Comics',
        preco: 45,
        nomeArquivoImagem: 'marvel-secret-wars.jpg',
        nacional: false,
    },
    
];

export function salvarLocalStorage(chave, informacao) {
    localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {
    return JSON.parse(localStorage.getItem(chave));
}

export function apagarDoLocalStorage(chave) {
    localStorage.removeItem(chave);
}


export function desenharProdutoNoCarrinhoSimples(idProduto, idContainerHtml, quantidadeProduto) {

    const produto = catalogo.find((p) => p.id === idProduto);
    const containerProdutosCarrinho = 
        document.getElementById(idContainerHtml);

    const elementoArticle = document.createElement("article"); // cria uma Tag <article></article>
    const articleClasses = [
        'flex', 
        'bg-slate-400', 
        'rounded-lg', 
        'relative', 
        'my-2',
        'p-1',
        'w-96',
    ];

    for (const articleClass of articleClasses) {
        elementoArticle.classList.add(articleClass);
    }
    // adiciona as classes na Tag <article class="flex bg-slate-500 rounded-lg relative my-1"></article>


    const cartaoProdutoCarrinho = `
    <img src="./assets/img/${produto.nomeArquivoImagem}" alt="Carrinho: ${produto.nome}" class="h-24 rounded-lg mr-2">
    <div class="text-sm py-5 flex flex-col justify-between text-slate-200">
      <p class="font-semibold">${produto.nome}</p>
      <p class="text-xs">${produto.editora}</p>
      <p class="text-sm">R$ ${produto.preco}</p>
    </div>
    <div class="flex items-end absolute bottom-0 right-2 text-lg">
        
        <p id="quantidade-${produto.id}" class="ml-2 text-slate-200 font-bold">${quantidadeProduto}</p>
        
    </div>`;

    elementoArticle.innerHTML = cartaoProdutoCarrinho;
    containerProdutosCarrinho.appendChild(elementoArticle);

    // adiciona o código do cartão do produto <article class="flex bg-slate-500 rounded-lg relative my-1">Código do cartão do produto</article>


}