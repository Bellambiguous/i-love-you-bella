const candle = document.getElementById('candle');
let pos = { x: window.innerWidth/2, y: window.innerHeight/2 };
let mouse = { x: pos.x, y: pos.y };

document.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

function animate() {
    pos.x += (mouse.x - pos.x) * 0.1; // smooth easing
    pos.y += (mouse.y - pos.y) * 0.1;

    candle.style.left = (pos.x - candle.offsetWidth/2) + 'px';
    candle.style.top = (pos.y - candle.offsetHeight/2) + 'px';

    requestAnimationFrame(animate);
}

animate();


