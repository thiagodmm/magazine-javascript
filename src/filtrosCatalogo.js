const catalogoProdutos = document.getElementById("container-produto");

function exibirTodos() {
    const produtosEscondidos = 
    Array.from(
        catalogoProdutos.getElementsByClassName("hidden")
        );

        for (const produto of produtosEscondidos) {
        produto.classList.remove("hidden");
        }
}

function esconderImportados(){
    exibirTodos();
    const produtosImportados = 
    Array.from(
        catalogoProdutos.getElementsByClassName("importado")
        );
    
        for (const produto of produtosImportados) {
        produto.classList.add("hidden");
         }
}

function esconderNacionais(){
    exibirTodos();
    const produtosNacionais = 
    Array.from(
        catalogoProdutos.getElementsByClassName("nacional")
        );
    
        for(const produto of produtosNacionais) {
        produto.classList.add("hidden");
        }
}

export function inicializarFiltros() {
    document
        .getElementById('exibir-todos')
        .addEventListener("click", exibirTodos);
    document
        .getElementById('exibir-importados')
        .addEventListener("click", esconderNacionais);
    document
        .getElementById('exibir-nacionais')
        .addEventListener("click", esconderImportados);
}