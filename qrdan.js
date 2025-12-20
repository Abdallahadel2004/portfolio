const images = [
    'qrdan app images/qrdan/1.jpeg',
    'qrdan app images/qrdan/2.jpeg',
    'qrdan app images/qrdan/3.jpeg',
    'qrdan app images/qrdan/4.jpeg',
    'qrdan app images/qrdan/5.jpeg',
    'qrdan app images/qrdan/6.jpeg',
    'qrdan app images/qrdan/7.jpeg',
    'qrdan app images/qrdan/8.jpeg'
];

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    document.getElementById('lightbox-img').src = images[currentIndex];
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('lightbox-img').src = images[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById('lightbox-img').src = images[currentIndex];
}

// Close lightbox on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
});

// Close lightbox on background click
document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') closeLightbox();
});

