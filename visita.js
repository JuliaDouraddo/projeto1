
let currentImageIndex = 0;
const images = document.querySelectorAll('.img');

function changeImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  } else if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  showImage(currentImageIndex);
}

function showImage(index) {
  images.forEach((image, i) => {
    image.style.display = i === index ? 'block' : 'none';
  });
}

showImage(currentImageIndex);

