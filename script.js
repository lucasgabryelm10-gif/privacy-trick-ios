// LISTA DE KEYS VÁLIDAS
const keysValidas = [
  "FF-1234",
  "VIP-2024",
  "PAINEL-FF"
];

// SE JÁ TIVER KEY SALVA
if (localStorage.getItem("acesso") === "liberado") {
  liberarPainel();
}

function verificarKey() {
  const keyDigitada = document.getElementById("keyInput").value;
  const msg = document.getElementById("msg");

  if (keysValidas.includes(keyDigitada)) {
    localStorage.setItem("acesso", "liberado");
    liberarPainel();
  } else {
    msg.innerText = "❌ KEY inválida";
    msg.style.color = "red";
  }
}

function liberarPainel() {
  document.getElementById("key-screen").style.display = "none";
  document.getElementById("painel").style.display = "block";
}
