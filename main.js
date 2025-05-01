//#buttonClick
import handleButtonClick from './handleButtonClick.js'

handleButtonClick('myButton', 'Button clicked!');

//#trackMousePosition
import trackMousePosition from './trackMousePosition.js'

console.log(trackMousePosition())

//#setupEventDelegation
import setupEventDelegation from './setupEventDelegation.js'
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

