function trocarAba(id, btn){
  document.querySelectorAll(".aba").forEach(a=>a.classList.remove("active"));
  document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  btn.classList.add("active");
}

function toggle(btn){
  btn.classList.toggle("active");
}

function sensi(btn){
  btn.parentElement.querySelectorAll("button")
    .forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
}

function fecharPainel(){
  const p=document.getElementById("panel");
  p.style.display = p.style.display==="none"?"block":"none";
}
