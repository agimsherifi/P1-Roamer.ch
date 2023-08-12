const hamburger = document.getElementById('hamburger');
const menuList = document.getElementById('menuList');

hamburger.addEventListener('click', () => {
    if (menuList.style.display === 'block') {
        menuList.style.display = 'none';
        hamburger.classList.remove('active');
    } else {
        menuList.style.display = 'block';
        hamburger.classList.add('active');
    }
});
