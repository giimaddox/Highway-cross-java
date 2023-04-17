//imagens e sons do jogo
let imagemDaEstrada;
let imagemDoAtor;
let ImagemCarro1;
let ImagemCarro2;
let ImagemCarro3;
let somTrilha;
let somColisao;
let somPonto;

function preload(){
    imagemDaEstrada = loadImage("imagens/estrada.png")
    imagemDoAtor = loadImage("imagens/ator-1.png")
    imagemCarro1 = loadImage("imagens/carro-1.png")
    imagemCarro2 = loadImage("imagens/carro-2.png")
    imagemCarro3 = loadImage("imagens/carro-3.png")
    imagemCarros =[imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3];
    somTrilha = loadSound("sons/trilha.mp3")
    somColisao = loadSound("sons/colidiu.mp3")
    somPonto = loadSound("sons/pontos.wav")
}