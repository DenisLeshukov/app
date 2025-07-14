document.addEventListener('DOMContentLoaded', function () {
  const mainScreen = document.querySelector('.wrapper').parentElement;
  const cartScreen = document.getElementById('cartScreen');
  const basketButton = document.querySelector('.basket');
  const backButton = document.querySelector('.back-button');

  basketButton.addEventListener('click', () => {
    mainScreen.style.display = 'none';
    cartScreen.style.display = 'block';
  });

  backButton.addEventListener('click', () => {
    cartScreen.style.display = 'none';
    mainScreen.style.display = 'block';
  });
});