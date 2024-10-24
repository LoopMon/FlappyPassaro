/* FUNÇÕES PRINCIPAIS */
function loop() {
  update();
  draw();
  window.requestAnimationFrame(loop);
}

function update() {
  ctx.clearRect(0, 0, cnv.width, cnv.height);
  moveObjects();
  bird.colision(cano1);
  bird.colision(cano2);
}

function draw() {
  cloud.draw(ctx);
  cano1.draw();
  cano2.draw();
  bird.draw(ctx);
}

/* FUNÇÕES SECUNDÁRIAS */
function reset() {
  bird.reset();
  media.pause();
  media.currentTime = 0;
  perdeu.pause();
  perdeu.currentTime = 0;
}

function moveObjects() {
  cloud.move();
  cano1.move();
  cano2.move();
  bird.move();
}
