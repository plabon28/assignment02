function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    
    lightboxImage.src = imageSrc;
    lightbox.style.display = 'block';
  }
  
  function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    
    lightbox.style.display = 'none';
  }
  