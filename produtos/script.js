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