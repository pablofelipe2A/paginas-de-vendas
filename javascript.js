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
        carrinho.forEach((item, index) => {
            const itemCarrinho = document.createElement('div');
            itemCarrinho.className = 'item-carrinho';

            const descricao = document.createElement('p');
            descricao.textContent = `${item.produto} - R$ ${item.preco}`;
            itemCarrinho.appendChild(descricao);

            const botaoRemover = document.createElement('button');
            botaoRemover.textContent = 'Remover';
            botaoRemover.className = 'botao-remover';
            botaoRemover.onclick = () => removerDoCarrinho(index);
            itemCarrinho.appendChild(botaoRemover);

            listaCarrinho.appendChild(itemCarrinho);
        });
    }

    calcularTotal();
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1); // Remove o item do carrinho
    contadorCarrinho--;
    atualizarCarrinho(); // Atualiza o carrinho na interface
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
