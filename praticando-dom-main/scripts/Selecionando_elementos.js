// 1. Selecione e exiba todas as imagens da página.
const todasImagens = document.querySelectorAll('img');
// console.log(todasImagens);

// 2. Selecione e exiba apenas a imagem cujo src começa com a palavra stark.
const imagemStark = Array.from(document.querySelectorAll('img')).find(img => img.src.includes('stark'));
// console.log(imagemStark);

// 3. Selecione todos os links internos (aqueles cujo href começa com #).
const linksInternos = document.querySelectorAll('a[href^="#"]');
// console.log(linksInternos);

// 4. Selecione o primeiro <h2> dentro do elemento com a classe .introducao.
const primeiroH2 = document.querySelector('.introducao h2');
// console.log(primeiroH2);