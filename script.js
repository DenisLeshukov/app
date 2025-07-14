document.addEventListener('DOMContentLoaded', () => {
  const openCartBtn = document.getElementById('openCart');

  // Пример данных корзины
  let cartItems = [
    { name: 'Товар 1', price: 100 },
    { name: 'Товар 2', price: 250 },
    { name: 'Товар 3', price: 150 }
  ];

  function generateCartHTML(items) {
    if (!items.length) {
      return `<div class="modal-content">Корзина пуста :(</div>`;
    }

    let html = `<div class="modal-content">
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