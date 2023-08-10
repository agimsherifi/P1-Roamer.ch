const hamburger = document.getElementById('hamburger');
            const menuList = document.getElementById('menuList');
          
            hamburger.addEventListener('click', () => {
              if (menuList.style.display === 'block') {
                menuList.style.display = 'none';
              } else {
                menuList.style.display = 'block';
              }
            });