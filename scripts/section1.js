// GSAP Sliding Animation
window.addEventListener("DOMContentLoaded", () => {
    const leftPanel = document.querySelector(".left-panel");
    const rightPanel = document.querySelector(".right-panel");
    const centerText = document.querySelector(".center-text");
    const waveTextLines = document.querySelectorAll(".wave-line");
    const leftImage = document.querySelector(".left-panel img");
    const rightImage = document.querySelector(".right-panel img");
    const leftText = document.querySelector(".left-panel p");
    const rightText = document.querySelector(".right-panel p");

    // Activate sliding panels
    leftPanel.classList.add("active");
    rightPanel.classList.add("active");

    // Reveal images and text after sliding completes
    setTimeout(() => {
        leftImage.parentElement.classList.add("active");
        rightImage.parentElement.classList.add("active");
    }, 1500); // Panel sliding duration

    // Show central text after panels
    setTimeout(() => {
        centerText.classList.add("active");
        waveTextLines.forEach((line, index) => {
            setTimeout(() => {
                line.classList.add("active");
            }, index * 1000); // Delayed text appearance
        });
    }, 2000); // Wait for sliding and image reveal
});

// Select Section 1
const section1 = document.querySelector('.intro-section'); // Assuming your section has the class 'intro-section'

let lastAnimationTime = 0; // To track the last animation time

// Function to reset and trigger animation
function triggerAnimation(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const currentTime = Date.now();

            // Only trigger the animation if it's been more than 15 seconds since the last trigger
            if (currentTime - lastAnimationTime > 15000) {
                // Reset the animation (you can trigger the animation again using JavaScript)
                entry.target.classList.remove('animate');
                setTimeout(() => {
                    entry.target.classList.add('animate');
                    lastAnimationTime = Date.now(); // Update the last animation time
                }, 10); // Trigger the animation again after a small timeout to reset it
            }
        }
    });
}

// Create an Intersection Observer instance
const observer = new IntersectionObserver(triggerAnimation, {
    threshold: 0.5 // Adjust this value based on when you want the animation to trigger
});

// Observe Section 1
observer.observe(section1);

