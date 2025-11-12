"use strict"
function setupEventDelegation(selector) {
 
  const list = typeof selector === 'string' ? document.querySelector(selector) : selector;
  if (!list) {
    console.log('List is found for selector:', selector);
    return;
  }
  list.addEventListener('click', function(event) {
       const li = event.target.closest('li');
        if (!li || !list.contains(li)) return;
    console.log(`Item clicked: ${li.textContent}`);
  });
}


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
setupEventDelegation('#testList'); 
export { setupEventDelegation };