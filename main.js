//#buttonClick
import handleButtonClick from './handleButtonClick.js'


handleButtonClick('myButton', 'Button clicked!');

//#trackMousePosition
import trackMousePosition from './trackMousePosition.js'

console.log(trackMousePosition())

//#setupEventDelegation
import setupEventDelegation from './setupEventDelegation.js'
function createTestList() {
  let ul = document.createElement('ul');
  ul.id = 'testList';
  for (let i = 1; i <=3; i++){
    let li = document.createElement('li');
    li.textContent = `Text ${i}`;
    ul.appendChild(li);
  }
  document.body.appendChild(ul);
  
  // document.body.innerHTML = 
  //   `<ul id="testList">
  //     <li>Item 1</li>
  //     <li>Item 2</li>
  //     <li>Item 3</li>
  //   </ul>`
}

createTestList();
setupEventDelegation('#testList');

