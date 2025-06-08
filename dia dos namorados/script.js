function mostrarSurpresa() {
  const mensagem = "Você não é só minha namorada, é minha melhor amiga, minha inspiração e o motivo do meu sorriso todos os dias. 💖";
  const p = document.getElementById("surpresa");
  p.textContent = mensagem;
  p.classList.remove("oculto");
}

function criarCoracoes() {
  const coracoes = document.querySelector('.coracoes');
  const coracao = document.createElement('div');
  coracao.classList.add('coracao');
  coracao.textContent = '❤️';
  coracao.style.left = Math.random() * 100 + 'vw';
  coracao.style.fontSize = (Math.random() * 20 + 10) + 'px';
  coracoes.appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 5000);
}

setInterval(criarCoracoes, 300);
