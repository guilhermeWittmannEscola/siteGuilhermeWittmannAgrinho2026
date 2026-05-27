const btn = document.getElementById("simularBtn");

if (btn) {
  btn.addEventListener("click", () => {
    const ano = document.getElementById("ano").value;

    const producao = document.getElementById("producao");

    const automacao = document.getElementById("automacao");

    const agua = document.getElementById("agua");

    const ia = document.getElementById("ia");

    if (ano === "2030") {
      producao.innerText = "340 mi t";
      automacao.innerText = "58%";
      agua.innerText = "67%";
      ia.innerText = "45%";
    }

    if (ano === "2040") {
      producao.innerText = "410 mi t";
      automacao.innerText = "81%";
      agua.innerText = "84%";
      ia.innerText = "73%";
    }

    if (ano === "2050") {
      producao.innerText = "520 mi t";
      automacao.innerText = "97%";
      agua.innerText = "93%";
      ia.innerText = "95%";
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");

  if (loader) {
    setTimeout(() => {
      loader.classList.add("loader-hidden");
    }, 2500);
  }
  window.scrollTo(0, 0);
});
