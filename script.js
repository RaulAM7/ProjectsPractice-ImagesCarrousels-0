
let currentIndex = 0;

function moveCarousel(direction) {
  const carousel = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  currentIndex += direction;

  // If currentIndex goes beyond the last item, reset it to 0
  if (currentIndex >= totalItems) {
    currentIndex = 0;
  }
  // If currentIndex goes before the first item, set it to the last one
  if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  }

  // Move the carousel by setting its transform based on the currentIndex
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}
