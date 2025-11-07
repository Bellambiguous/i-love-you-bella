const candle = document.getElementById('candle');

document.addEventListener('mousemove', e => {
    const x = e.clientX - candle.offsetWidth/2;
    const y = e.clientY - candle.offsetHeight/2;

    // Smooth movement
    candle.style.left = x + 'px';
    candle.style.top = y + 'px';
});
