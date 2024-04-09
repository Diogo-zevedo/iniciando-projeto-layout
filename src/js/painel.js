/*quando clicar na seta pra avançar temos que esconder todas as imagens e mostrar a proxima imagem


a imagem atual começa em 0 pq e a primeira imagem 
assim que for clicado no avançae eu preciso adicionar mai 1 ao contador de imagem para poder saber que agora vou mostrar a segunda imagem

esconder todas as imagens
   pagar todas as imagens usando o Dom e remover a classe mostar

mostrar a proxima imagem
   pegar todas as imagens ,descobrir qual e a proxima  ,e colocar a classe nela

*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

/*
quando clicar na seta pra avançar temos que esconder todas as imagens e mostrar a proxima imagem
*/

setaAvancar.addEventListener('click', function() {
   /*testa se o contador de imagenAtual é igual ao total de imagem*/
   const totalDeImagens = imagensPainel.length - 1;
   if(imagemAtual === totalDeImagens) {
      return;
   }

   /* a imagem atual começa em 0 pq e a primeira imagem 
    assim que for clicado no avançae eu preciso adicionar mai 1 ao contador de imagem para poder saber que agora vou mostrar a segunda imagem*/

   imagemAtual++;
   /*esconder todas as imagens
  pagar todas as imagens usando o Dom e remover a classe mostar*/

   imagensPainel.forEach(imagem => {
      imagem.classList.remove('mostrar')
   });

   /*mostrar a proxima imagem
   pegar todas as imagens ,descobrir qual e a proxima  ,e colocar a classe nela*/
  imagensPainel[imagemAtual].classList.add('mostrar');

});

/*
quando clicar na seta pra vltar temos que esconder todas as imagens e mostrar a imagem anterior
*/
setaVoltar.addEventListener('click', function(){

   if(imagemAtual === 0) {
      return;
   }
   imagemAtual--;

   /*
   esconder todas as imagens
     pegar todas as imagens ,descobrir qual e a proxima  ,e colocar a classe nela
   */
   imagensPainel.forEach(imagem => {
      imagem.classList.remove('mostrar')
   });

   /* 
   mostrar a imagem anterior 
      pegar todas as imagens, descobrir qual e a anterior e colocar a anterior nela*/
imagensPainel[imagemAtual].classList.add('mostrar');  
})