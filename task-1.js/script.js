const images = document.querySelectorAll('.image');
const fullImageContainer = document.querySelector('.full-image-container');
const fullImage = document.querySelector('.full-image');
let currentIndex = 0;

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentIndex = index;
        showFullImage(index);
    });
});

fullImageContainer.addEventListener('click', hideFullImage);

window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        showPreviousImage();
    } else if (e.key === 'ArrowRight') {
        showNextImage();
    }
});

function showFullImage(index) {
    fullImage.src = images[index].src;
    fullImageContainer.style.display = 'flex';
}

function hideFullImage() {
    fullImageContainer.style.display = 'none';
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showFullImage(currentIndex);
}

function showPreviousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showFullImage(currentIndex);
}