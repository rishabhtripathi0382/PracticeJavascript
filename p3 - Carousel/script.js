let currentIndex = 0;
const items = document.querySelectorAll('carouse-item');

function showSlide(index){
    if (index >= items.length){
        currentIndex = 0;
    }
    else if (index < 0){
        currentIndex = items.length - 1;
    }
    else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}
function nextSlide() {
    showSlide(currentIndex + 1);
  }
  
function prevSlide() {
    showSlide(currentIndex - 1);
  }