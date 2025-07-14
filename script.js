document.addEventListener('DOMContentLoaded', () => {
  const openCartBtn = document.getElementById('openCart');

  // Проверяем, доступен ли Telegram WebApp
  if (!window.Telegram || !Telegram.WebApp) {
    console.warn("Telegram WebApp недоступен. Работает не в Telegram.");
    return;
  }

  // Активируем Telegram WebApp API
  Telegram.WebApp.ready();

  if (!openCartBtn) {
    console.error("Кнопка 'openCart' не найдена!");
    return;
  }

  openCartBtn.addEventListener('click', () => {
    console.log("Кнопка нажата");

    Telegram.WebApp.showModal({
      title: "Корзина",
      text: "<div style='color:#fff; padding:10px;'>Корзина пока пуста</div>",
      parse_mode: "html",
      buttons: [
        { type: "close", text: "Закрыть" }
      ]
    });
  });
});