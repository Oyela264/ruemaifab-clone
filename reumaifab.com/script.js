
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 4000);

function toggleDetails(card) {
  const detail = card.querySelector('.details');
  detail.style.display = detail.style.display === 'block' ? 'none' : 'block';
}

let flip = false;
      setInterval(() => {
        flip = !flip;
        document.getElementById('aboutFlipImage').style.transform = flip ? 'rotateY(180deg)' : 'rotateY(0deg)';
      }, 3000);