

function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  voltaPosiçãoInicialDoCarro();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}