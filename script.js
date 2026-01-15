function atualizar(slider, id) {
  document.getElementById(id).innerText = slider.value;
}

function ativarModo(botao) {
  document.querySelectorAll(".buttons button").forEach(b => {
    b.classList.remove("active");
  });
  botao.classList.add("active");
}
