// Função para buscar produtos
function buscarProduto() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const produtos = document.querySelectorAll('.produto');

    produtos.forEach(produto => {
        const nomeProduto = produto.getAttribute('data-nome');
        if (nomeProduto.includes(searchInput)) {
            produto.style.display = 'block';
        } else {
            produto.style.display = 'none';
        }
    });
}

// Função para limpar a busca
function limparBusca() {
    document.getElementById('search-bar').value = '';  // Limpa o campo de busca
    buscarProduto();  // Reaplica a filtragem (mostrando todos os produtos)
}

// Função de adicionar ao carrinho com animação
function adicionarAoCarrinho(produto) {
    const produtoElement = document.querySelector(`.produto[data-nome="${produto}"]`);
    produtoElement.classList.add('adicionado');
    setTimeout(() => {
        produtoElement.classList.remove('adicionado');
    }, 1000);
    
    // Simulando uma notificação com o nome do produto
    mostrarToast(`"${produto}" foi adicionado ao carrinho!`);
}

// Função para comprar e mostrar modal
function comprar(produto) {
    mostrarModal(`Você comprou "${produto}"!`);
}

// Função para mostrar o modal de confirmação
function mostrarModal(mensagem) {
    const modal = document.getElementById('modal');
    const modalMensagem = document.getElementById('modal-mensagem');
    modalMensagem.textContent = mensagem;
    modal.style.display = 'block';
}

// Função para fechar o modal
function fecharModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Função para mostrar o toast
function mostrarToast(mensagem) {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = mensagem;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Função para rolar até uma seção
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Navbar sticky
window.onscroll = function() { 
    stickyNavbar();
};

const navbar = document.querySelector('header');
const sticky = navbar.offsetTop;

function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}
