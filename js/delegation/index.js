function setupEventDelegation(selector) {
 console.log('Setting up event delegation for selector:', selector);

  // Дозволяємо передавати або рядок, або DOM-елемент
  const list = typeof selector === 'string'
    ? document.querySelector(selector)
    : selector;

  if (!list) {
    console.log('List not found for selector:', selector);
    return;
  }

  // Захист від повторного підключення
  if (list.__delegationAdded) {
    console.log('Event delegation already added to this element:', list);
    return;
  }
  list.__delegationAdded = true;

  list.addEventListener('click', function(event) {
    const li = event.target.closest('li');
    if (!li || !list.contains(li)) return;
    console.log(`Item clicked: ${li.textContent}`);
  });
}


// Тестовий список
function createTestList() {
  document.body.innerHTML = `
    <ul id="testList">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  `;
}

createTestList();

// ✔ Правильний виклик (один)
setupEventDelegation('#testList');

export { setupEventDelegation };
