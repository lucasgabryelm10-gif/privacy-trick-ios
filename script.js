function trocarAba(id, btn) {
  document.querySelectorAll(".aba").forEach(a => a.classList.remove("active"));
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));

  document.getElementById(id).classList.add("active");
  btn.classList.add("active");
}

function mudarSensi(slider) {
  document.getElementById("sensiText").innerText =
    slider.value == 0 ? "Sensi Baixa" : "Sensi Alta";
}

function ativarAimlock(btn) {
  btn.classList.toggle("active");
}

function fecharPainel() {
  const painel = document.getElementById("panel");
  painel.style.display = painel.style.display === "none" ? "block" : "none";
}
