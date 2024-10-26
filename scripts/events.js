document.addEventListener("keydown", (e) => {
  if (e.key == "w" || e.key == "W") {
    media.play();
    bird.estado = estadoJogo.jogando;
    bird.pula();
  }
  if (e.key == "r" || e.key == "R") {
    reset();
  }
  if (e.key == "c" || e.key == "C") {
    skin.src = "./imagens/MyBird2.png";
    bird.cor = skin;
  }
  if (e.key == "v" || e.key == "V") {
    skin.src = "./imagens/MyBird1.png";
    bird.cor = skin;
  }
});

document.addEventListener("keyup", (e) => {
  bird.srcY = e.key == "w" || e.key == "W" ? 0 : 1;
});

document.querySelector("#jump").addEventListener("click", (e) => {
  media.play();
  bird.estado = estadoJogo.jogando;
  bird.pula();
});

document.querySelector("#reset").addEventListener("click", (e) => {
  reset();
});
