---

# 🌐 Objeto `“window”`

1. Exiba no console a URL da página atual.
    
    ```jsx
    console.log("URL da página atual:", window.location.href);
    ```
    
    ![image.png](attachment:61e4a420-c090-4153-be47-8f3235e7b632:image.png)
    

1. Exiba no console a linguagem do navegador.
    
    ```jsx
    console.log("Linguagem do navegador:", navigator.language || navigator.userLanguage);
    ```
    
    ![image.png](attachment:4d47a1b2-7842-4fd6-949b-8652213bba0d:image.png)
    
2. Exiba no console a largura da janela.
    
    ```jsx
    console.log("Largura da janela:", window.innerWidth);
    ```
    
    ![image.png](attachment:b6c4f8dc-8472-4ed3-bd26-b5a823d1459b:image.png)
    

# 🧩 Selecionando elementos

1. Selecione e exiba todas as imagens da página.
    
    ```jsx
    const todasImagens = document.querySelectorAll('img');
    // console.log(todasImagens);
    ```
    
    ![image.png](attachment:ec0edd70-564e-4012-8f9f-3663f31ba9a7:image.png)
    

1. Selecione e exiba apenas a imagem cujo src começa com a palavra stark.
    
    ```jsx
    const imagemStark = Array.from(document.querySelectorAll('img')).find(img => img.src.includes('stark'));
    ```
    
    ![image.png](attachment:8eaf8f27-a2ca-4a45-a381-08336794e0b2:image.png)
    

1. Selecione todos os links internos (aqueles cujo href começa com #).
    
    ```jsx
    const linksInternos = document.querySelectorAll('a[href^="#"]');
    // console.log(linksInternos);
    ```
    
    ![image.png](attachment:e77e021d-ff3f-44df-b354-942b7dbae62c:image.png)
    

1. Selecione o primeiro <h2> dentro do elemento com a classe .introducao.
    
    ```jsx
    const primeiroH2 = document.querySelector('.introducao h2');
    // console.log(primeiroH2);
    ```
    
    ![image.png](attachment:e7ab1218-71b5-490c-96bf-4d33196d05c8:image.png)
    

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
    
    ![image.png](attachment:fb4a080c-b179-4bb4-8c81-5858c863ee77:image.png)
    

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
    
    ![image.png](attachment:259aa3a4-825c-44bd-9963-037819269b58:image.png)
    

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
    
    ![image.png](attachment:8deabc10-4ce5-4207-b100-58e3e45f9b19:image.png)
    

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
    
    ![image.png](attachment:5e2e68d5-e4fe-4cd0-b10c-7c8335dce799:image.png)
    

1. Modifique para remover o elemento clicado
    
    ```jsx
    document.body.addEventListener('click', (event) => {
     const elementoClicado = event.target;
     elementoClicado.remove();
    });
    ```
    
    ![image.png](attachment:e8dde8c5-5629-4d00-999a-4f5601852e54:image.png)
    

1. Se o usuário pressionar a tecla 't', aumentar o tamanho da fonte de todo o site
    
    ```jsx
    document.addEventListener('keydown', (event) => {
     if (event.key === 't') { 
      document.body.style.fontSize = 'larger'; 
     }
    });
    ```
