document.addEventListener('DOMContentLoaded', function() {
  // Código do javascript.js
  
  // Carrossel
  
  const carouselContent = document.querySelector('.carousel-content');
  const prevButton = document.querySelector('.esquerda');
  const nextButton = document.querySelector('.direita');
  
  let currentIndex = 0;
  const totalItems = carouselContent.children.length;
  
  prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Calcula o índice anterior
      updateCarousel('left'); // Passa 'left' como direção para a função de atualização do carrossel
  });
  
  nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalItems; // Calcula o próximo índice
      updateCarousel('right'); // Passa 'right' como direção para a função de atualização do carrossel
  });
  
  function updateCarousel(direction) {
      const offset = -currentIndex * 100 + '%';
      carouselContent.style.transform = `translateX(${offset})`;

      // Define a direção da rolagem com base na seta clicada
      if (direction === 'left') {
          // Se a seta da esquerda foi clicada, define a transição para a esquerda
          carouselContent.style.transition = 'transform 0.5s ease-in-out';
      } else if (direction === 'right') {
          // Se a seta da direita foi clicada, define a transição para a direita
          carouselContent.style.transition = 'transform 0.5s ease-in-out';
      }
  }
});

//--------------------------------------------------------------------------------------------------------//

document.addEventListener('DOMContentLoaded', function() {
  // Código do javascript.js 
  const container = document.getElementById('container');
    const content = document.getElementById('content');
    const arrow = document.getElementById('arrow');

    let currentIndex = 0;
    const totalItems = content.children.length;

    arrow.addEventListener('click', () => {
      currentIndex++;
      if (currentIndex >= totalItems) {
        currentIndex = 0;
      }
      let itemHeight = content.children[currentIndex].offsetTop;
      if (currentIndex === 0) {
        itemHeight += 20;
      } else {
        itemHeight -= 5;
      }
      content.style.top = `-${itemHeight}px`;
    });
});

//---------------------------------------------------------------------------------------------------------//

document.addEventListener('DOMContentLoaded', function() {
  const carouselContent3 = document.querySelector('.carousel-content3');
  const carouselItems3 = document.querySelectorAll('.carousel-item3');
  const indicators = document.querySelectorAll('.indicator');
  const totalItems = carouselItems3.length;
  let currentIndex = 0;

  setInterval(() => {
      currentIndex = (currentIndex + 1) % totalItems;
      updateCarousel3();
  }, 3000);

  function updateCarousel3() {
      const offset = -currentIndex * 600 + 'px';
      carouselContent3.style.transform = `translateX(${offset})`;

      // Atualiza a opacidade das bolinhas indicadoras
      indicators.forEach((indicator, index) => {
          if (index === currentIndex) {
              indicator.classList.add('active');
          } else {
              indicator.classList.remove('active');
          }
      });
  }
});
