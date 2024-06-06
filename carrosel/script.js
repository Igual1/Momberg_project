const carouselContent = document.querySelector('.carousel-content');
const prevButton = document.querySelector('.esquerda');
const nextButton = document.querySelector('.direita');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < carouselContent.children.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

function updateCarousel() {
  const offset = -currentIndex * 100 + '%';
  carouselContent.style.transform = `translateX(${offset})`;
}
