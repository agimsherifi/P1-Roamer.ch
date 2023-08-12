var images = ['/assets/image/rockyellow.jpg', '/assets/image/rockyellow2.jpg', '/assets/image/rockyellow3.jpg',
              '/assets/image/blerjetphoto/skeleton.png', '/assets/image/blerjetphoto/skeleton2.png', '/assets/image/blerjetphoto/skeleton3.png',
              '/assets/image/blerjetphoto/deep.png', '/assets/image/blerjetphoto/deep2.png', '/assets/image/blerjetphoto/deep3.png',
              '/assets/image/blerjetphoto/primeline.png', '/assets/image/blerjetphoto/primeline2.png', '/assets/image/blerjetphoto/primeline3.png',
              '/assets/image/blerjetphoto/tempomaster.png', '/assets/image/blerjetphoto/tempomaster2.png', '/assets/image/blerjetphoto/tempomaster3.png',
              '/assets/image/blerjetphoto/valias.png', '/assets/image/blerjetphoto/valias2.png', '/assets/image/blerjetphoto/valias3.png',
              '/assets/image/blerjetphoto/venus.png', '/assets/image/blerjetphoto/venus2.png', '/assets/image/blerjetphoto/venus3.png',
              '/assets/image/blerjetphoto/searock.png', '/assets/image/blerjetphoto/searock2.png', '/assets/image/blerjetphoto/searock3.png',];
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