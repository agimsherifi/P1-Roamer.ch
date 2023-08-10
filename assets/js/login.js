const userIcon = document.getElementById('userIcon');
            const loginForm = document.getElementById('loginForm');
          
            userIcon.addEventListener('click', () => {
              loginForm.style.display = 'block';
            });
          
            document.addEventListener('keydown', (event) => {
              if (event.key === 'Escape') {
                loginForm.style.display = 'none';
              }
            });