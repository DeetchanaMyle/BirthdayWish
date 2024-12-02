// Fireworks Animation Logic
document.getElementById('fireworks-button').addEventListener('click', function () {
    startFireworks();
});

function startFireworks() {
    const fireworksCount = 50; // Number of fireworks
    for (let i = 0; i < fireworksCount; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');

        // Randomize the position and animation timing
        firework.style.left = `${Math.random() * 100}vw`;
        firework.style.top = `${Math.random() * 100}vh`;
        firework.style.animationDuration = `${Math.random() * 1 + 1}s`;
        firework.style.animationDelay = `${Math.random() * 2}s`;

        document.body.appendChild(firework);

        // Remove the firework after the animation ends
        setTimeout(() => {
            firework.remove();
        }, 2000); // Duration of the animation
    }
}

// Confetti Animation Logic
document.getElementById('celebrate-button').addEventListener('click', function () {
    createConfetti();
});

function createConfetti() {
    const confettiCount = 200; // Number of confetti pieces
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        // Randomize the confetti color and size
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.animationDuration = `${Math.random() * 2 + 2}s`;
        confetti.style.animationDelay = `${Math.random() * 1}s`;

        // Randomize the start position
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.top = `-20px`;

        document.body.appendChild(confetti);

        // Remove the confetti after the animation ends
        setTimeout(() => {
            confetti.remove();
        }, 3000); // Duration of the animation
    }
}

function getRandomColor() {
    const colors = ['#ffeb3b', '#ff5722', '#4caf50', '#2196f3', '#9c27b0'];
    return colors[Math.floor(Math.random() * colors.length)];
}
