"use strict"
function createTestList() {
  document.body.innerHTML = `
    <ul id="testList">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    `
}
createTestList()

function setupEventDelegation(selector) {
  const list = document.querySelector(selector)
  list.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log(`Item clicked: ${event.target.textContent}`)
    }
  })
}

setupEventDelegation('#testList');
export { setupEventDelegation };
