const candle = document.getElementById('candle');

// Start candle in center
let candleX = window.innerWidth / 2;
let candleY = window.innerHeight / 2;

// Smooth movement using requestAnimationFrame
function moveCandle(targetX, targetY) {
    candleX += (targetX - candleX) * 0.1;
    candleY += (targetY - candleY) * 0.1;

    candle.style.left = candleX + 'px';
    candle.style.top = candleY + 'px';

    requestAnimationFrame(() => moveCandle(targetX, targetY));
}

// Track mouse movement
document.addEventListener('mousemove', (e) => {
    moveCandle(e.clientX - 20, e.clientY - 20); // 20 = half candle size
});
