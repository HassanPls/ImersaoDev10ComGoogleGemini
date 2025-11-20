let cardContainer = document.querySelector(".card-container");
let searchInput = document.querySelector("input");
let dados = [];

async function carregarDados() {
  try {
    let resposta = await fetch("data.json");
    dados = await resposta.json();
    renderizarCards(dados);
  } catch (error) {
    console.error("Erro ao carregar dados:", error);
  }
}

function iniciarBusca() {
  let termoBusca = searchInput.value.toLowerCase();
  let dadosFiltrados = dados.filter(
    (dado) =>
      dado.nome.toLowerCase().includes(termoBusca) ||
      dado.descricao.toLowerCase().includes(termoBusca)
  );
  renderizarCards(dadosFiltrados);
}

function renderizarCards(cards) {
  cardContainer.innerHTML = "";
  for (const card of cards) {
    let article = document.createElement("article");
    article.classList.add("card");
    article.innerHTML = `
        <h2>${card.nome}</h2>
          <p>${card.ano}</p>
          <p>${card.descricao}</p>
          <a href="${card.link}" target="_blank" rel="noopener">Saiba mais.</a>
    `;
    cardContainer.appendChild(article);
  }
}

document.addEventListener("DOMContentLoaded", carregarDados);
searchInput.addEventListener("keyup", iniciarBusca);
