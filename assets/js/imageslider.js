var images = ['/assets/image/rockyellow.jpg', '/assets/image/rockyellow2.jpg', '/assets/image/rockyellow3.jpg'];
        var currentImageIndex = 0;
    
        function changeImage(index) {
          currentImageIndex = index - 1;
          var galleryImage = document.getElementById('galleryImage');
          galleryImage.src = images[currentImageIndex];
          updateBubbles();
        }
    
        function updateBubbles() {
          var bubbles = document.querySelectorAll('.bubble');
          bubbles.forEach(function(bubble, index) {
            if (index === currentImageIndex) {
              bubble.classList.add('active-bubble');
            } else {
              bubble.classList.remove('active-bubble');
            }
          });
        }