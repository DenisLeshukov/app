document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('sendDataBtn');

  // Инициализация Telegram Web App
  if (window.Telegram && window.Telegram.WebApp) {
    Telegram.WebApp.ready();
    
    btn.addEventListener('click', () => {
      Telegram.WebApp.sendData("Hello from Web App!");
      alert("Данные отправлены!");
    });
  } else {
    alert("Это не Telegram Web App");
  }
});