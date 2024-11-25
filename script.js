function mostrarHora() {
  const mensagem = document.getElementById("mensagem");
  const container = document.getElementById("container");
  const dataAtual = new Date();
  const hora = dataAtual.getHours();

  mensagem.innerHTML = `Agora são ${hora} horas.`;

  if (hora >= 0 && hora < 12) {
      if (hora === 1) {
          mensagem.innerHTML = `Agora é ${hora} hora.`;
      }
      document.body.style.backgroundImage = "url('assets/manha.jpg')";
      container.style.background = "#fff9c4";
  } else if (hora >= 12 && hora < 18) {
      document.body.style.backgroundImage = "url('assets/tarde.jpg')";
      container.style.background = "#ffe082";
  } else {
      document.body.style.backgroundImage = "url('assets/noite.jpg')";
      container.style.background = "#bdbdbd";
  }
}
