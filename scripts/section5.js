document.addEventListener("DOMContentLoaded", () => {
    const orbitImages = document.querySelectorAll(".orbit-img");
    const selectedImage = document.getElementById("selected-image");
    const quoteText = document.getElementById("quote-text");
  
    orbitImages.forEach((img) => {
      img.addEventListener("click", () => {
        const imageUrl = img.getAttribute("src");
        const quote = img.getAttribute("data-quote");
  
        // Update the right-side content
        selectedImage.setAttribute("src", imageUrl);
        quoteText.textContent = quote;
      });
    }); 
  
    // Main image interaction
    const mainImage = document.getElementById("main-image");
    mainImage.addEventListener("click", () => {
      selectedImage.setAttribute("src", mainImage.getAttribute("src"));
      quoteText.textContent = "Good friends are like stars. You don’t always see them, but you know they’re always there.";
    });
  });

  
  document.addEventListener("DOMContentLoaded", () => {
    const orbitImagesReverse = document.querySelectorAll(".orbit-img-reverse");
    const selectedImageReverse = document.getElementById("selected-image-reverse");
    const quoteTextReverse = document.getElementById("quote-text-reverse");
  
    orbitImagesReverse.forEach((img) => {
      img.addEventListener("click", () => {
        const imageUrl = img.getAttribute("src");
        const quote = img.getAttribute("data-quote");
  
        // Update the left-side content
        selectedImageReverse.setAttribute("src", imageUrl);
        quoteTextReverse.textContent = quote;
      });
    });
  
    // Main image interaction
    const mainImageReverse = document.getElementById("main-image-reverse");
    mainImageReverse.addEventListener("click", () => {
      selectedImageReverse.setAttribute("src", mainImageReverse.getAttribute("src"));
      quoteTextReverse.textContent = "Family is not an important thing. It's everything.";
    });
  });
  