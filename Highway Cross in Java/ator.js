//Código do Ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let pontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
  
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
      
    yAtor += 3;
  }
  
  if (yAtor > 366){
    voltaPosicaoInicial();
  }
  
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
   for (let i = 0; i < imagemCarros.length; i++) {
  
  colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
  
  if (colisao){
    somColisao.play();
    voltaPosicaoInicial();
    if(pontosMaiorQueZero()){
    pontos -= 1;
    }
  }
     
}
}

function voltaPosicaoInicial(){
    yAtor = 366
}

function incluiPontos(){
  
  textAlign(CENTER);
  textSize(25);
  fill(255,0,255);
  text(pontos, width / 5, 27);
}

function marcaPonto(){
  
  if (yAtor < 30){
    somPonto.play();
    pontos += 1;
    voltaPosicaoInicial();
  }
  }

function pontosMaiorQueZero(){
  
return  pontos > 0 
}