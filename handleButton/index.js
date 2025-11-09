function handleButtonClick(buttonId, message) {
    const button = document.getElementById(buttonId);
    if (button) {
        button.addEventListener('click', () => {
            console.log(message);
        });
    }
}
handleButtonClick();
export { handleButtonClick };


