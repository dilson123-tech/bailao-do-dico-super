<script>
// Definindo a data e hora do evento
const eventoData = new Date("2025-05-10T22:00:00").getTime();

// Atualiza a contagem regressiva a cada 1 segundo
const x = setInterval(function() {

  // Obtém o tempo atual
  const agora = new Date().getTime();

  // Calcula a diferença entre o evento e o tempo atual
  const diferenca = eventoData - agora;

  // Calcula os dias, horas, minutos e segundos restantes
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  // Atualiza o HTML com os valores calculados
  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;

  // Se a contagem regressiva terminar
  if (diferenca < 0) {
    clearInterval(x); // Para o setInterval
    document.getElementById("timer").innerHTML = "Evento Começou!";
  }
}, 1000);
</script>
</body>
