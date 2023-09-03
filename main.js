// const produto1 = {
//     id: 1,
//     nome: 'Harley Quinn nº1',
//     editora: 'DC Comics',
//     preco: 25,
//     nomeArquivoImagem: 'dc-harley-quinn.jpg',
// };
// const produto2 = {
//     id: 2,
//     nome: 'Batman nº 1',
//     editora: 'DC Comics',
//     preco: 35,
//     nomeArquivoImagem: 'dc-batman.jpg',
// };

import { renderizarCatalogo } from "./src/cartaoProduto";
import { inicializarFiltros } from "./src/filtrosCatalogo";
import { atualizarPrecoCarrinho, inicializarCarrinho, renderizarProdutosCarrinho, } from "./src/menuCarrinho";

renderizarCatalogo();
inicializarCarrinho();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros();



