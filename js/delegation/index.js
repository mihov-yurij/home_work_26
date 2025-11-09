"use strict"
function setupEventDelegation(testItemElement)  {
    testItemElement.testList.add('is-completed')
}
document.addEventListener('click', (event) => {
 const testItemElement = event.target.closest('.testItem')
 if  (testItemElement) {
    onTestItemClick(testItemElement)
 }
})
setupEventDelegation()
export{setupEventDelegation}
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
const  addTestItem = () => 

addTestItem()
addTestItem()
addTestItem()
addTestItem()

