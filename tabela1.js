const formVenda = document.getElementById('form-venda');
const tabelaVendas = document.getElementById('tabela-vendas');
const tabela = document.getElementById('tabela');
const tbody = tabela.querySelector('tbody');

let listaVendas = [];

formVenda.addEventListener('submit', (event) => {
  event.preventDefault();

  const nomeVendedor = document.getElementById('nome-vendedor').value;
  const valorVenda = parseFloat(document.getElementById('valor-venda').value);

  const novaVenda = {
    nomeVendedor,
    valorVenda,
  };

  listaVendas.push(novaVenda);

  atualizarTabela();

  formVenda.reset();
});

function atualizarTabela() {
  tbody.innerHTML = '';

  for (const venda of listaVendas) {
    const linha = document.createElement('tr');
    const colunaNome = document.createElement('td');
    const colunaValor = document.createElement('td');

    colunaNome.textContent = venda.nomeVendedor;
    colunaValor.textContent = `R$ ${venda.valorVenda.toFixed(2)}`;

    linha.appendChild(colunaNome);
    linha.appendChild(colunaValor);

    tbody.appendChild(linha);
  }
}

// Botão "Remover" (opcional)

const botaoRemover = document.createElement('button');
botaoRemover.textContent = 'Remover Última Venda';
botaoRemover.addEventListener('click', () => {
  listaVendas.pop();
  atualizarTabela();
});

tabelaVendas.appendChild(botaoRemover);