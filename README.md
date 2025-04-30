# 🌐 Objeto `“window”`

1. Exiba no console a URL da página atual.
    
    ```jsx
    console.log("URL da página atual:", window.location.href);
    ```
    

1. Exiba no console a linguagem do navegador.
    
    ```jsx
    console.log("Linguagem do navegador:", navigator.language || navigator.userLanguage);
    ```
    
    
2. Exiba no console a largura da janela.
    
    ```jsx
    console.log("Largura da janela:", window.innerWidth);
    ```    

    
# 🧩 Selecionando elementos

1. Selecione e exiba todas as imagens da página.
    
    ```jsx
    const todasImagens = document.querySelectorAll('img');
    // console.log(todasImagens);
    ```
    
    

1. Selecione e exiba apenas a imagem cujo src começa com a palavra stark.
    
    ```jsx
    const imagemStark = Array.from(document.querySelectorAll('img')).find(img => img.src.includes('stark'));
    ```
    
    

1. Selecione todos os links internos (aqueles cujo href começa com #).
    
    ```jsx
    const linksInternos = document.querySelectorAll('a[href^="#"]');
    // console.log(linksInternos);
    ```
    
    

1. Selecione o primeiro h2 dentro do elemento com a classe .introducao.
    
    ```jsx
    const primeiroH2 = document.querySelector('.introducao h2');
    // console.log(primeiroH2);
    ```
    
    

# 🏷️ Manipulando classes e atributos

1. Adicione a classe ativo a todos os itens da lista dentro de .menu.
    
    ```jsx
    const itensMenu = document.querySelectorAll('.menu li');
    itensMenu.forEach(item => item.classList.add('ativo'));
    ```
    

1. Remova a classe ativo de todos os itens e mantenha apenas no primeiro.
    
    ```jsx
    itensMenu.forEach((item, index) => {
        if (index === 0) {
            item.classList.add('ativo');
        } else {
            item.classList.remove('ativo');
        }
    });
    ```
    

1. Verifique se todas as imagens possuem o atributo alt.
    
    ```jsx
    const todasImagens = document.querySelectorAll('img');
    todasImagens.forEach((item) => item.hasAttribute)
    ```
    
    

1. Altere o href do link externo no menu para https://www.google.com.
    
    ```jsx
    const linkExterno = document.querySelector('.menu a[href^="http"]');
    if (linkExterno) {
        linkExterno.href = 'https://www.google.com';
    }
    ```
    

# 📏 Dimensões e distâncias

1. Verifique a distância da primeira imagem em relação ao topo da página
    
    ```jsx
    const primeiraImagem = document.querySelector('img');
    if (primeiraImagem) {
        const distanciaTop = primeiraImagem.getBoundingClientRect().top;
        console.log('Distância da primeira imagem em relação ao topo da página:', distanciaTop);
    } else {
        console.log('Nenhuma imagem encontrada na página.');
    }
    ```
    
    

1. Calcule e retorne a soma da largura de todas as imagens
    
    ```jsx
    const todasImagens = document.querySelectorAll('img');
    const somaLarguras = Array.from(todasImagens).reduce((acc, img) => acc + img.offsetWidth, 0);
    console.log('Soma da largura de todas as imagens:', somaLarguras);
    ```
    

1. Verifique se os links possuem as dimensões mínimas recomendadas para toque: 48px x 48px
    
    ```jsx
    const todosLinks = document.querySelectorAll('a');
    todosLinks.forEach(link => {
        const largura = link.offsetWidth;
        const altura = link.offsetHeight;
        const possuiDimensaoMinima = largura >= 48 && altura >= 48;
        console.log(`Link ${link.href} possui dimensões mínimas?:`, possuiDimensaoMinima);
    });
    ```
    
    

1. Se a largura da janela for menor que 720px, adicione a classe menu-mobile ao menu
    
    ```jsx
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
    ```
    

# 🖱️ Eventos

1. Ao clicar em um link interno
    
    ```jsx
    const linksInternos = document.querySelectorAll('a[href^="#"]'); 
    
    linksInternos.forEach((item) => {
        item.addEventListener('click', () => {
            item.classList.add("ativo")
        })
    })
    ```
    

1. Ao clicar em qualquer elemento do site
    
    ```jsx
    document.body.addEventListener('click', (event) => {
    console.log('Elemento clicado:', event.target); 
    });
    ```
    
    

1. Modifique para remover o elemento clicado
    
    ```jsx
    document.body.addEventListener('click', (event) => {
     const elementoClicado = event.target;
     elementoClicado.remove();
    });
    ```
    
    

1. Se o usuário pressionar a tecla 't', aumentar o tamanho da fonte de todo o site
    
    ```jsx
    document.addEventListener('keydown', (event) => {
     if (event.key === 't') { 
      document.body.style.fontSize = 'larger'; 
     }
    });
    ```
