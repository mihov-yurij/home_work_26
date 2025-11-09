function trackMousePosition() {
    document.addEventListener('mousemove', (event) => {
        const x = event.clientX;
        const y = event.clientY;
        console.log(`Mouse X: ${x}, Mouse Y: ${y}`);
    });
}
trackMousePosition();
export { trackMousePosition };
