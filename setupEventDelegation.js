function setupEventDelegation(selector) {
  const list = document.querySelector(selector);
  if (!list) {
    console.warn(`Елемент з селектором '${selector}' не знайдено.`);
    return;
  }

  list.addEventListener('click', function (event) {
    const clickedItem = event.target.closest('li');
    if (clickedItem && list.contains(clickedItem)) {
      console.log(`Item clicked: ${clickedItem.textContent.trim()}`);
    }
  });
}

export default setupEventDelegation