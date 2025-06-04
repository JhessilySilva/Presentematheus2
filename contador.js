function atualizarContador() {
  const inicio = new Date("2025-05-17T00:00:00");
  const agora = new Date();

  let anos = agora.getFullYear() - inicio.getFullYear();
  let meses = agora.getMonth() - inicio.getMonth();
  let dias = agora.getDate() - inicio.getDate();
  let horas = agora.getHours() - inicio.getHours();
  let minutos = agora.getMinutes() - inicio.getMinutes();
  let segundos = agora.getSeconds() - inicio.getSeconds();

  if (segundos < 0) {
    segundos += 60;
    minutos--;
  }

  if (minutos < 0) {
    minutos += 60;
    horas--;
  }

  if (horas < 0) {
    horas += 24;
    dias--;
  }

  if (dias < 0) {
    const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0);
    dias += mesAnterior.getDate();
    meses--;
  }

  if (meses < 0) {
    meses += 12;
    anos--;
  }

  document.getElementById('anos').textContent = String(anos).padStart(2, '0');
  document.getElementById('meses').textContent = String(meses).padStart(2, '0');
  document.getElementById('dias').textContent = String(dias).padStart(2, '0');
  document.getElementById('horas').textContent = String(horas).padStart(2, '0');
  document.getElementById('minutos').textContent = String(minutos).padStart(2, '0');
  document.getElementById('segundos').textContent = String(segundos).padStart(2, '0');
}

setInterval(atualizarContador, 1000);
atualizarContador();
