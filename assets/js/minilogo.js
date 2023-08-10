window.addEventListener('scroll', function() {
    var menu = document.querySelector('.menu');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    var miniLogo = document.querySelector('.mini-logo')

    

    if (scrollPosition > 0) {
      menu.style.top = '0';
      menu.classList.remove('show-mini-logo');
    } else {
      menu.style.top = '';
      menu.classList.add('show-mini-logo');
    }
  });