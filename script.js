document.addEventListener("DOMContentLoaded", () => {
  console.log("CROMO E RUÍNAS - Site carregado com sucesso.");
  // Código JS futuro pode ser adicionado aqui
});
document.addEventListener("DOMContentLoaded", () => {
  console.log(
    "CROMO E RUÍNAS atualizado com logo de fundo e flip-cards redimensionados."
  );
});

// Pega todos os cards
const cards = document.querySelectorAll(".flip-card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const inner = card.querySelector(".flip-card-inner");
    inner.classList.toggle("flipped"); // adiciona ou remove o flip
  });
});

function abrirModal(elemento) {
  const imagem = elemento.getAttribute("data-imagem");
  const modal = document.getElementById("modal");
  const imagemAmpliada = document.getElementById("imagem-ampliada");
  imagemAmpliada.src = imagem;
  modal.style.display = "block";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

// ZOOM MAPA

function abrirZoom() {
  document.getElementById("zoomOverlay").classList.add("active");
}

function fecharZoom() {
  document.getElementById("zoomOverlay").classList.remove("active");
}
