const sliders = document.querySelectorAll("input[type=range]");

sliders.forEach(sl => {
  const span = document.getElementById("v-" + map(sl.dataset.key));
  span.innerText = sl.value;
  sl.addEventListener("input", () => {
    span.innerText = sl.value;
  });
});

function map(k){
  return ({geral:"geral",reddot:"reddot",m2x:"2x",m4x:"4x",sniper:"sniper"})[k];
}

function salvar(){
  const data = {};
  sliders.forEach(s => data[s.dataset.key]=s.value);
  localStorage.setItem("presetAtual", JSON.stringify(data));
  alert("Configuração salva ✔️");
}

function resetar(){
  localStorage.removeItem("presetAtual");
  location.reload();
}

function aplicarPreset(tipo){
  const presets = {
    rush:{geral:95,reddot:90,m2x:85,m4x:75,sniper:60},
    medio:{geral:88,reddot:82,m2x:78,m4x:70,sniper:58},
    precisao:{geral:80,reddot:75,m2x:70,m4x:65,sniper:55}
  };
  sliders.forEach(s=>{
    s.value = presets[tipo][s.dataset.key];
    s.dispatchEvent(new Event("input"));
  });
}

function trocarTab(id){
  document.querySelectorAll(".tab, .tab-content")
    .forEach(e=>e.classList.remove("active"));
  document.querySelector(`[onclick*="${id}"]`).classList.add("active");
  document.getElementById(id).classList.add("active");
}

// carregar salvo
const salvo = JSON.parse(localStorage.getItem("presetAtual")||"null");
if(salvo){
  sliders.forEach(s=>{
    s.value = salvo[s.dataset.key];
    s.dispatchEvent(new Event("input"));
  });
}
