 


function handleButtonClick(buttonId, message) {
  const button = document.getElementById(buttonId);
  const message = function() { 
  return message
    console.log('Button clicked!');};
  if (button) {
    button.addEventListener('click', function() {
      console.log(message);
    });
  } else {
    console.warn(`Button with ID "${buttonId}" not found.`);
  } 
}

export { handleButtonClick };


