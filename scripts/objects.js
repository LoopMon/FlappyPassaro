function Bird(img) {
  this.srcY = 0;
  this.score = 0;
  this.estado = 0;
  this.y = cnv.height / 2 - 32;
  this.x = 30;
  this.gravidade = 0.2;
  this.speed = 0;
  this.forçaPulo = -5;
  this.cor = img;

  this.draw = (ctx) => {
    /* TEXTO DO SCORE */
    ctx.fillStyle = "#f00";
    ctx.font = "50px Arial";
    ctx.fillText(this.score, cnv.width - 70, 50);
    /* OBJETO BIRD */
    ctx.drawImage(this.cor, 0, this.srcY * 32, 32, 32, this.x, this.y, 32, 32);
    /* TELA DE INICIO */
    if (this.estado == estadoJogo.inicio) {
      ctx.drawImage(
        tela,
        0,
        0,
        tela.width,
        tela.height,
        cnv.width / 2 - 100,
        cnv.height / 2 - 100,
        200,
        100
      );
      ctx.fillStyle = "#f0f";
      ctx.font = "25px Arial";
      ctx.fillText(
        "Pressione (W) para Começar.",
        cnv.width / 2 - 155,
        cnv.height / 2 + 40
      );
      ctx.fillStyle = "#00f";
      ctx.font = "25px Arial";
      ctx.fillText(
        "Pressione (V) para Blue Bird.",
        cnv.width / 2 - 155,
        cnv.height / 2 + 75
      );
      ctx.fillStyle = "#f00";
      ctx.fillText(
        "Pressione (C) para Red Bird.",
        cnv.width / 2 - 156,
        cnv.height / 2 + 110
      );
    }
    /* TELA DE PERDEU */
    if (this.estado == estadoJogo.perdeu) {
      tela.src = "./imagens/TelaPerdeu.png";
      ctx.drawImage(
        tela,
        0,
        0,
        tela.width,
        tela.height,
        cnv.width / 2 - 100,
        cnv.height / 2 - 50,
        200,
        100
      );
      ctx.fillStyle = "#f0f";
      ctx.font = "25px Arial";
      ctx.fillText(
        "Precione (R) para recomeçar.",
        cnv.width / 2 - 160,
        cnv.height / 2 + 75
      );
    }
  };

  this.move = () => {
    if (this.estado == estadoJogo.jogando) {
      this.speed += this.gravidade;
      if (this.speed > 6) {
        this.speed = 6;
      }
      this.y += this.speed;
      if (this.y > cnv.height - 32) {
        this.y = cnv.height - 32;
        this.speed = 0;
      }
      if (this.y < 0) {
        this.y = 0;
        this.speed = 0;
      }
    }
  };

  this.pula = () => {
    this.speed += this.forçaPulo;
    this.srcY = 1;
  };

  this.colision = (cano) => {
    if (
      this.x + 30 > cano.x &&
      this.x < cano.x + 35 &&
      this.y < cano.y + cano.altura
    ) {
      cano.cor = "red";
      this.estado = estadoJogo.perdeu;
      this.forçaPulo = 0;
      cano.speed = 0;
      media.pause(); // audio
      perdeu.play(); // audio
    } else if (
      this.x + 30 > cano.x &&
      this.x < cano.x + 35 &&
      this.y + 30 > cano.yB
    ) {
      cano.cor = "red";
      this.estado = estadoJogo.perdeu;
      this.forçaPulo = 0;
      cano.speed = 0;
      media.pause();
      perdeu.play();
    } else {
      cano.cor = "#0f0";
    }
  };

  this.reset = () => {
    tela.src = "./imagens/TelaInicio.png";
    this.estado = estadoJogo.inicio;
    this.score = 0;
    this.x = 30;
    this.y = cnv.height / 2 - 32;
    this.forçaPulo = -5;
  };
}

function Cano(posX, deslocX) {
  this.frame = 0;
  this.speed = 3;
  this.cor = "#0f0";
  /* CIMA */
  this.x = posX + deslocX;
  this.y = 0;
  this.largura = 50;
  this.altura = Math.floor(Math.random() * 215);
  this.deslocX = deslocX;
  /* BAIXO */
  this.yB = this.altura + 85;
  this.alturaB = this.yB + cnv.height;

  this.draw = () => {
    this.frame++;
    ctx.fillStyle = this.cor;
    ctx.fillRect(this.x, this.y, this.largura, this.altura);
    ctx.fillRect(this.x, this.yB, this.largura, this.alturaB);
  };

  this.move = () => {
    if (bird.estado == estadoJogo.jogando) {
      this.x -= this.speed;
      if (this.x < 0 - this.largura) {
        bird.score++;
        this.x = cnv.width;
        this.altura = Math.floor(Math.random() * 215);
        this.yB = this.altura + 85;
        this.alturaB = this.yB + cnv.height;
      }
    }
  };

  this.reset = () => {
    this.frame = 0;
    this.speed = 3;
    this.x = cnv.width + this.deslocX;
    this.y = 0;
    this.altura = Math.floor(Math.random() * 215);
    this.deslocX = deslocX;
    /* BAIXO */
    this.yB = this.altura + 85;
    this.alturaB = this.yB + cnv.height;
  };
}
