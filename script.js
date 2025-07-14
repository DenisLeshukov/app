document.addEventListener('DOMContentLoaded', () => {
  const openCartBtn = document.getElementById('openCart');

  if (!window.Telegram || !Telegram.WebApp) {
    console.error("Telegram WebApp не доступен!");
    alert("Это приложение должно запускаться из Telegram.");
    return;
  }

  Telegram.WebApp.ready(); // обязательно вызвать, чтобы активировать API

  let cartItems = [
    { name: 'Товар 1', price: 100 },
    { name: 'Товар 2', price: 250 },
    { name: 'Товар 3', price: 150 }
  ];

  function generateCartHTML(items) {
    if (!items.length) {
      return `<div style="color:#eaecc6; padding:10px;">Корзина пуста :(</div>`;
    }

    let html = `<div style="color:#eaecc6; padding:10px;">
                  <h3>Ваша корзина</h3>
                  <ul style="list-style: none; padding-left: 0;">`;

    items.forEach(item => {
      html += `<li>${item.name} — ${item.price} руб.</li>`;
    });

    const total = items.reduce((sum, item) => sum + item.price, 0);
    html += `</ul><p><strong>Итого: ${total} руб.</strong></p></div>`;
    return html;
  }

  openCartBtn.addEventListener('click', () => {
    const cartHTML = generateCartHTML(cartItems);

    Telegram.WebApp.showModal({
      title: "Корзина",
      text: cartHTML,
      parse_mode: "html",
      buttons: [
        { type: "close", text: "Закрыть" }
      ]
    });
  });
});