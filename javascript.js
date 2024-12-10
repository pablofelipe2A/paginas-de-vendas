<script>
    let contadorCarrinho = 0;

    function adicionarAoCarrinho(produto) {
        alert(`"${produto}" foi adicionado ao carrinho!`);
        contadorCarrinho++;
        atualizarContadorCarrinho();
    }

    function comprar(produto) {
        alert(`Você comprou "${produto}"!`);
    }

    function atualizarContadorCarrinho() {
        const contador = document.getElementById('contador-carrinho');
        contador.textContent = contadorCarrinho;
    }
</script>