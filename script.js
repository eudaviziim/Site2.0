function abrirModal(src) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("imagemModal").src = src;
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}