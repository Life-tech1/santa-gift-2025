
function triggerHeartExplosion() {
    const colors = ['#ff6b6b', '#ff8787', '#fa5252', '#e64980', '#be4bdb'];
    const container = document.body;

    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = '50%';
        heart.style.top = '50%';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heart.style.transform = `translate(-50%, -50%)`;
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';

        // Random destination
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 300 + 100;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;

        heart.animate([
            { transform: `translate(-50%, -50%) scale(0)`, opacity: 1 },
            { transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(1.5)`, opacity: 0 }
        ], {
            duration: Math.random() * 1000 + 1000,
            easing: 'cubic-bezier(0, .9, .57, 1)',
            fill: 'forwards'
        });

        container.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
    }
}
