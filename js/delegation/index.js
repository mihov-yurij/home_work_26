function setupEventDelegation(selector) {
  // дозволяємо передавати або селектор (string), або вже знайдений елемент
  const list = typeof selector === 'string' ? document.querySelector(selector) : selector;
  if (!list) {
    console.log('List  found for selector:', querySelector);
    return;
  }

  list.addEventListener('click', function(event) {
    // .closest дозволяє коректно обробляти кліки по внутрішнім елементам <li>
    const li = event.target.closest('li');
    // перевіряємо, що знайшли <li> та він всередині списку
    if (!li || !list.contains(li)) return;
    console.log(`Item clicked: ${li.textContent}`);
  });
}

// приклад повного використання
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
setupEventDelegation(selector, {selector:'#testList'}); // <- ось тут потрібно передати селектор
export { setupEventDelegation };