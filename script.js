document.addEventListener('DOMContentLoaded', () => {
  const mainScreen = document.getElementById('mainScreen');
  const cartScreen = document.getElementById('cartScreen');
  const openCartBtn = document.getElementById('openCart');
  const backBtn = document.getElementById('goBack');

  openCartBtn.addEventListener('click', () => {
    mainScreen.style.display = 'none';
    cartScreen.style.display = 'block';
  });

  backBtn.addEventListener('click', () => {
    cartScreen.style.display = 'none';
    mainScreen.style.display = 'block';
  });
});