// 1. Ao clicar em um link interno
const linksInternos = document.querySelectorAll('a[href^="#"]'); 

linksInternos.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.add("ativo")
    })
})

// 2. Ao clicar em qualquer elemento do site
document.body.addEventListener('click', (event) => {
console.log('Elemento clicado:', event.target); 
});

// 3. Modifique para remover o elemento clicado
document.body.addEventListener('click', (event) => {
 const elementoClicado = event.target;
 elementoClicado.remove();
});

// 4. Se o usuário pressionar a tecla 't', aumentar o tamanho da fonte de todo o site
document.addEventListener('keydown', (event) => {
 if (event.key === 't') { 
  document.body.style.fontSize = 'larger'; 
 }
});