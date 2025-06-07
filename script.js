<script>
document.addEventListener('DOMContentLoaded', function () {
  function getProximoSabado22h() {
    const agora = new Date();
    const diaAtual = agora.getDay(); // 0 = domingo, 6 = sábado
    const diasParaSabado = (6 - diaAtual + (agora.getHours() >= 22 ? 7 : 0)) % 7;
    const proximoSabado = new Date(agora);
    proximoSabado.setDate(agora.getDate() + diasParaSabado);
    proximoSabado.setHours(22, 0, 0, 0);
    return proximoSabado;
  }

  function formatarData(d) {
    const opcoes = { day: '2-digit', month: 'long', year: 'numeric' };
    const data = d.toLocaleDateString('pt-BR', opcoes);
    return data.charAt(0).toUpperCase() + data.slice(1); // capitaliza o mês
  }

  let eventoData = getProximoSabado22h();
  let eventoTimestamp = eventoData.getTime();

  const span1 = document.getElementById("data-evento-1");
  const span2 = document.getElementById("data-evento-2");

  if (span1) span1.textContent = formatarData(eventoData);
  if (span2) span2.textContent = formatarData(eventoData);

  setInterval(function () {
    const agora = new Date().getTime();
    let diferenca = eventoTimestamp - agora;

    if (diferenca <= 0) {
      eventoData = getProximoSabado22h();
      eventoTimestamp = eventoData.getTime();
      if (span1) span1.textContent = formatarData(eventoData);
      if (span2) span2.textContent = formatarData(eventoData);
      diferenca = eventoTimestamp - agora;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    if (document.getElementById("dias")) document.getElementById("dias").textContent = dias >= 0 ? dias : 0;
    if (document.getElementById("horas")) document.getElementById("horas").textContent = horas >= 0 ? horas : 0;
    if (document.getElementById("minutos")) document.getElementById("minutos").textContent = minutos >= 0 ? minutos : 0;
    if (document.getElementById("segundos")) document.getElementById("segundos").textContent = segundos >= 0 ? segundos : 0;
  }, 1000);
});
</script>
