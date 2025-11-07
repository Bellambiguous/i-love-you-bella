const candle = document.getElementById('candle');

// Start candle in center
let candleX = window.innerWidth / 2;
let candleY = window.innerHeight / 2;

document.addEventListener('mousemove', (e) => {
    const targetX = e.clientX - 20; // center candle
    const targetY = e.clientY - 20;

    // Use requestAnimationFrame for smooth movement
    function animate() {
        // Move a fraction toward target
        candleX += (targetX - candleX) * 0.1;
        candleY += (targetY - candleY) * 0.1;

        candle.style.left = candleX + 'px';
        candle.style.top = candleY + 'px';

        requestAnimationFrame(animate);
    }

    animate();
});
