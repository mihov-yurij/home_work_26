"use strict";
import { trackMousePosition } from '../mouseHandler/main.js';
console.log('Main module loaded');
trackMousePosition();
import { handleButtonClick } from '../handleButton/index.js';
console.log('Setting up button click handler for #myButton');
handleButtonClick('myButton', 'Button was clicked!');   
import { setupEventDelegation } from './delegation/index.js';
console.log('Setting up event delegation for #testList');

document.addEventListener('DOMContentLoaded', () => {
  setupEventDelegation('#testList');
});





