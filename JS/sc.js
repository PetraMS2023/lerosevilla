let navigation = document.querySelector(".header");
window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        navigation.classList.add('color');
    } else {
        navigation.classList.remove('color');
    }
});
