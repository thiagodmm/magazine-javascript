import { AdicionarAoCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidades";

export function renderizarCatalogo() {

    for ( const produtoCatalogo of catalogo) {

        const cartaoProduto = `<div class="w-48 m-2 bg-white flex flex-col items-center justify-between text-sm p-1 group shadow-lg shadow-slate-350 rounded-md ${produtoCatalogo.nacional ? 'nacional' : 'importado'}" id="card-produto-${produtoCatalogo.id}">
        <img src="assets/img/${produtoCatalogo.nomeArquivoImagem}" alt="" class="group-hover:scale-110 duration-300 my-3 rounded-md" />
        <p class="nome-revista font-bold">${produtoCatalogo.nome}</p>
        <p>${produtoCatalogo.editora}</p>
        <p>R$ ${produtoCatalogo.preco}</p>
        <button id='adicionar-${produtoCatalogo.id}' class="rounded-md p-1 border-2 hover:bg-yellow-300 text-xs bg-slate-200"><i class="fa-solid fa-cart-plus"></i> Adicionar ao Carrinho</button>
        </div>`;
    
    document.getElementById("container-produto").innerHTML += cartaoProduto;
    document.getElementById(`adicionar-${produtoCatalogo.id}`)
    
    }

    for (const produtoCatalogo of catalogo) {
        document.getElementById(`adicionar-${produtoCatalogo.id}`)
        .addEventListener("click", () => AdicionarAoCarrinho(produtoCatalogo.id));
    }

}