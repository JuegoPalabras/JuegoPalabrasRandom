function startClock() {
    const hand = document.getElementById("hand");
    let startTime = Date.now();
    const duration = 240000; // 60 segundos

    function update() {
        const elapsed = Date.now() - startTime;
        const progress = (elapsed % duration) / duration;
        const angle = progress * 360;
        hand.style.transform = `rotate(${angle}deg)`;
        requestAnimationFrame(update);
    }
    update();
}
startClock();