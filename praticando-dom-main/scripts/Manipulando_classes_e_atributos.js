// Adicione a classe ativo a todos os itens da lista dentro de .menu.
const itensMenu = document.querySelectorAll('.menu li');
itensMenu.forEach(item => item.classList.add('ativo'));

// Remova a classe ativo de todos os itens e mantenha apenas no primeiro.
itensMenu.forEach((item, index) => {
    if (index === 0) {
        item.classList.add('ativo');
    } else {
        item.classList.remove('ativo');
    }
});

// Verifique se todas as imagens possuem o atributo alt.
const todasImagens = document.querySelectorAll('img');
todasImagens.forEach((item) => item.hasAttribute)

// Altere o href do link externo no menu para https://www.google.com.
const linkExterno = document.querySelector('.menu a[href^="http"]');
if (linkExterno) {
    linkExterno.href = 'https://www.google.com';
}