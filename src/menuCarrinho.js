import { catalogo, salvarLocalStorage, lerLocalStorage } from "./utilidades";

const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {};

function abrirCarrinho() {
    document.getElementById("carrinho").classList.add("right-[0px]");
    document.getElementById("carrinho").classList.remove("right-[-300px]");
}

function fecharCarrinho() {
    document.getElementById("carrinho").classList.remove("right-[0px]");
    document.getElementById("carrinho").classList.add("right-[-300px]");
}

function irParaCheckout() {
    if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
        return;
    }
    window.location.href = "./checkout.html";
}

export function inicializarCarrinho() {
    const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
    const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");
    const botaoIrParaCheckout = document.getElementById("finalizar-compra");

    botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
    botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
    botaoIrParaCheckout.addEventListener("click", irParaCheckout);
}

function removerDoCarrinho(idProduto) {
    delete idsProdutoCarrinhoComQuantidade[idProduto];
    salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
    atualizarPrecoCarrinho();
    renderizarProdutosCarrinho();
}

function incrementarQuantidadeProduto(idProduto) {
    idsProdutoCarrinhoComQuantidade[idProduto]++;
    salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
    atualizarPrecoCarrinho();
    atualizarInformacaoQuantidade(idProduto);
}

function decrementarQuantidadeProduto(idProduto) {
    if (idsProdutoCarrinhoComQuantidade[idProduto] === 1) {
        removerDoCarrinho(idProduto);
        return;
    }
    idsProdutoCarrinhoComQuantidade[idProduto]--;
    salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
    atualizarPrecoCarrinho();
    atualizarInformacaoQuantidade(idProduto);
}

function atualizarInformacaoQuantidade(idProduto) {
    document.getElementById(`quantidade-${idProduto}`).innerText = idsProdutoCarrinhoComQuantidade[idProduto];
}

function desenharProdutoNoCarrinho(idProduto) {

    const produto = catalogo.find((p) => p.id === idProduto);
    const containerProdutosCarrinho = 
        document.getElementById('produtos-carrinho');

    const elementoArticle = document.createElement("article"); // cria uma Tag <article></article>
    const articleClasses = [
        'flex', 
        'bg-slate-500', 
        'rounded-lg', 
        'relative', 
        'my-1',
    ];

    for (const articleClass of articleClasses) {
        elementoArticle.classList.add(articleClass);
    }
    // adiciona as classes na Tag <article class="flex bg-slate-500 rounded-lg relative my-1"></article>


    const cartaoProdutoCarrinho = `<button id="remover-item-${produto.id}" class="absolute top-0 right-2 hover:text-yellow-300"><i class="fa-solid fa-circle-xmark"></i></button>
    <img src="./assets/img/${produto.nomeArquivoImagem}" alt="Carrinho: ${produto.nome}" class="h-24 rounded-lg mr-2">
    <div class="text-sm py-5 flex flex-col justify-between">
      <p class="font-semibold">${produto.nome}</p>
      <p class="text-xs">${produto.editora}</p>
      <p class="text-sm">R$ ${produto.preco}</p>
    </div>
    <div class="flex items-end absolute bottom-0 right-2 text-lg">
        <button id="decrementar-produto-${produto.id}">-</button>
        <p id="quantidade-${produto.id}" class="ml-2">${idsProdutoCarrinhoComQuantidade[produto.id]}</p>
        <button id="incrementar-produto-${produto.id}" class="ml-2">+</button>
    </div>`;

    elementoArticle.innerHTML = cartaoProdutoCarrinho;
    containerProdutosCarrinho.appendChild(elementoArticle);
    // adiciona o código do cartão do produto <article class="flex bg-slate-500 rounded-lg relative my-1">Código do cartão do produto</article>

    document
        .getElementById(`decrementar-produto-${produto.id}`)
        .addEventListener('click', () => decrementarQuantidadeProduto(produto.id));

    document
        .getElementById(`incrementar-produto-${produto.id}`)
        .addEventListener('click', () => incrementarQuantidadeProduto(produto.id));

    document
        .getElementById(`remover-item-${produto.id}`)
        .addEventListener('click', () => removerDoCarrinho(produto.id));

}

export function renderizarProdutosCarrinho() {
    const containerProdutosCarrinho =
    document.getElementById("produtos-carrinho");
    containerProdutosCarrinho.innerHTML = '';

    for (const idProduto in idsProdutoCarrinhoComQuantidade) {
        desenharProdutoNoCarrinho(idProduto);
    }
}

export function AdicionarAoCarrinho(idProduto) {
    if(idProduto in idsProdutoCarrinhoComQuantidade){
        incrementarQuantidadeProduto(idProduto);
        return;
    }
    idsProdutoCarrinhoComQuantidade[idProduto] = 1;
    salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
    atualizarPrecoCarrinho();
    desenharProdutoNoCarrinho(idProduto);

}

export function atualizarPrecoCarrinho() {
    const precoCarrinho = document.getElementById("preco-total");
    let precoTotalCarrinho = 0;
    for(const idProdutoNoCarrinho in idsProdutoCarrinhoComQuantidade) {
        precoTotalCarrinho += catalogo.find ( (p) => p.id === idProdutoNoCarrinho ).preco * idsProdutoCarrinhoComQuantidade[idProdutoNoCarrinho];
    }
    precoCarrinho.innerText = `Total: R$ ${precoTotalCarrinho}`;
}