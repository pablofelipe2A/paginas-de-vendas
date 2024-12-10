let carrinho = [];
let contadorCarrinho = 0;

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

function adicionarAoCarrinho(produto, preco) {
    carrinho.push({ produto, preco });
    contadorCarrinho++;
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const contador = document.getElementById('contador-carrinho');
    contador.textContent = contadorCarrinho;

    const listaCarrinho = document.getElementById('lista-carrinho');
    listaCarrinho.innerHTML = ""; // Limpa a lista para atualizar com os novos itens

    if (carrinho.length === 0) {
        listaCarrinho.innerHTML = "<p>Seu carrinho está vazio.</p>";
    } else {
        carrinho.forEach(item => {
            const itemCarrinho = document.createElement('p');
            itemCarrinho.textContent = `${item.produto} - R$ ${item.preco}`;
            listaCarrinho.appendChild(itemCarrinho);
        });
    }

    calcularTotal();
}

function calcularTotal() {
    const totalCompra = document.getElementById('total-compra');
    const total = carrinho.reduce((soma, item) => {
        return soma + parseFloat(item.preco.replace('.', '').replace(',', '.'));
    }, 0);

    totalCompra.textContent = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
}

function finalizarCompra() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
    } else {
        alert('Compra finalizada com sucesso!');
        carrinho = [];  // Limpa o carrinho
        contadorCarrinho = 0;  // Reseta o contador
        atualizarCarrinho();  // Atualiza a interface
    }
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}