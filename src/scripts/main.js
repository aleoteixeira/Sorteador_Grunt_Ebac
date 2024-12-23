document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('form-sorteador').addEventListener('submit', function (evento) {
    evento.preventDefault();

    // Obtém o valor do número máximo
    let numeroMaximo = document.getElementById('numero-maximo').value;
    numeroMaximo = parseInt(numeroMaximo);

    // Gera um número aleatório entre 1 e o número máximo
    let numeroAleatorio = Math.random() * numeroMaximo;
    numeroAleatorio = Math.floor(numeroAleatorio + 1);

    // Exibe o número sorteado no elemento span
    document.getElementById('resultado-valor').innerText = numeroAleatorio;

    // Exibe a div de resultado
    document.querySelector('.resultado').style.display = 'block';
  });
});
