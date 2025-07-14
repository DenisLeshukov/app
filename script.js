document.addEventListener('DOMContentLoaded', () => {
  const openCartBtn = document.getElementById('openCart');

  // Проверяем наличие Telegram WebApp
  if (!window.Telegram || !Telegram.WebApp) {
    console.warn("Telegram WebApp недоступен. Работает не в Telegram.");
    return;
  }

  Telegram.WebApp.ready(); // обязательно!

  if (!openCartBtn) {
    console.error("Кнопка с id='openCart' не найдена");
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