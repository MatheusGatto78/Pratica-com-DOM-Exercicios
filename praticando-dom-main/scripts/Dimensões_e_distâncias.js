// 1. Verifique a distância da primeira imagem em relação ao topo da página
const primeiraImagem = document.querySelector('img');
if (primeiraImagem) {
    const distanciaTop = primeiraImagem.getBoundingClientRect().top;
    console.log('Distância da primeira imagem em relação ao topo da página:', distanciaTop);
} else {
    console.log('Nenhuma imagem encontrada na página.');
}

// 2. Calcule e retorne a soma da largura de todas as imagens
const todasImagens = document.querySelectorAll('img');
const somaLarguras = Array.from(todasImagens).reduce((acc, img) => acc + img.offsetWidth, 0);
console.log('Soma da largura de todas as imagens:', somaLarguras);

// 3. Verifique se os links possuem as dimensões mínimas recomendadas para toque: 48px x 48px
const todosLinks = document.querySelectorAll('a');
todosLinks.forEach(link => {
    const largura = link.offsetWidth;
    const altura = link.offsetHeight;
    const possuiDimensaoMinima = largura >= 48 && altura >= 48;
    console.log(`Link ${link.href} possui dimensões mínimas?:`, possuiDimensaoMinima);
});

// 4. Se a largura da janela for menor que 720px, adicione a classe menu-mobile ao menu
const larguraJanela = window.innerWidth;
if (larguraJanela < 720) {
    const menu = document.querySelector('.menu'); // Altere o seletor se necessário
    if (menu) {
        menu.classList.add('menu-mobile');
        console.log('Classe "menu-mobile" adicionada ao menu.');
    } else {
        console.log('Menu não encontrado.');
    }
}