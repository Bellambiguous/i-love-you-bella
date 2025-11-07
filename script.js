const candle = document.getElementById('candle');

document.addEventListener('mousemove', (e) => {
    // Get current candle position
    let candleX = parseFloat(candle.style.left) || 0;
    let candleY = parseFloat(candle.style.top) || 0;

    // Smoothly move candle toward mouse
    candle.style.left = candleX + (e.clientX - candleX - 10) * 0.1 + 'px';
    candle.style.top = candleY + (e.clientY - candleY - 10) * 0.1 + 'px';
});
