/* PROGRAMA PRINCIPAL */
const cnv = document.getElementById("cnv");
const ctx = cnv.getContext("2d");

/* ÁUDIOS */
const media = new Audio();
media.src = "./audios/midia.mp3";
const perdeu = new Audio();
perdeu.src = "./audios/Comunista.ogg";

/* IMAGENS */
const cenario = new Image();
cenario.src = "./imagens/TelaCenario.png";
const cloud = new Cloud(cenario);

const skin = new Image();
skin.src = "./imagens/MyBird1.png";
const bird = new Bird(skin);

const tela = new Image();
tela.src = "./imagens/TelaInicio.png";

/* OBJETOS */
const cano1 = new Cano(cnv.width, 100);
const cano2 = new Cano(cnv.width, 400);

const estadoJogo = {
  inicio: 0,
  jogando: 1,
  perdeu: 2,
};

/* INICIAR PROGRAMA */
loop();
