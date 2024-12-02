document.getElementById('unlock-button').addEventListener('click', function() {
    var secretCode = '06.09.11.11.24';  // Set your secret code here 
    var userCode = document.getElementById('secret-input').value;
    var videoContainer = document.getElementById('video-container');
    var secretMessage = document.getElementById('code-message');

    if (userCode === secretCode) {

        // Display the video and fade it in
        videoContainer.style.display = 'block';
        videoContainer.style.opacity = 0;
        setTimeout(function() {
            videoContainer.style.transition = 'opacity 1s ease-in';
            videoContainer.style.opacity = 1;
        }, 100);
        
        // Hide the error message
        secretMessage.textContent = '';

    } else {
        // Show an error message if the code is incorrect
        secretMessage.textContent = 'Incorrect code! Please try again.';

    }

});
