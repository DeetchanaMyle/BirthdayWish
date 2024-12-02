


// document.addEventListener("DOMContentLoaded", () => {
//     const video = document.getElementById("mouse-track-video");

//     // Ensure video metadata is loaded to get the duration
//     video.addEventListener("loadedmetadata", () => {
//         const videoDuration = video.duration;

//         // Mouse tracking function
//         document.addEventListener("mousemove", (e) => {
//             const screenWidth = window.innerWidth; // Total width of the screen
//             const mouseX = e.clientX; // Horizontal position of the mouse

//             // Calculate video time based on mouse position
//             const percentage = mouseX / screenWidth; // Get position as a percentage (0 to 1)
//             const newTime = percentage * videoDuration; // Map percentage to video duration
//             video.currentTime = newTime; // Set the video time
//         });
//     });
// });

// Intersection Observer for triggering animation every time section 2 comes into view
// const section2 = document.querySelector('.section2'); // Assuming your section has a class 'section2'

// // Function to trigger animation reset
// function triggerAnimation(entries) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             // Reset the animation (you can trigger the animation again using JavaScript)
//             // Assuming the animation class is .animate (you can modify it based on your CSS classes)
//             entry.target.classList.remove('animate');
//             setTimeout(() => {
//                 entry.target.classList.add('animate');
//             }, 10);  // Trigger the animation again after a small timeout to reset it
//         }
//     });
// }

// // Create an Intersection Observer instance
// const observer = new IntersectionObserver(triggerAnimation, {
//     threshold: 0.5 // Adjust this value based on when you want the animation to trigger
// });

// // Observe section 2
// observer.observe(section2);
