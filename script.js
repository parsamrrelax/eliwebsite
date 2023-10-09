document.addEventListener("DOMContentLoaded", function () {
    // Get all portfolio item images
    const portfolioImages = document.querySelectorAll(".portfolio-item img");

    // Add hover effect on portfolio item images
    portfolioImages.forEach((image) => {
        image.addEventListener("mouseover", function () {
            image.style.transform = "scale(1.1)";
        });

        image.addEventListener("mouseout", function () {
            image.style.transform = "scale(1)";
        });
    });

    // Create a paint div for the mouse pointer effect
    const paint = document.createElement("div");
    paint.classList.add("paint");
    document.body.appendChild(paint);

    // Set initial mouse position
    let mouseX = 0;
    let mouseY = 0;

    // Set initial paint position
    let paintX = 0;
    let paintY = 0;

    // Add event listener for mousemove
    document.addEventListener("mousemove", function (e) {
        // Store the current mouse position
        mouseX = e.pageX;
        mouseY = e.pageY;

        // Use easing to update paint position more slowly
        paintX += (mouseX - paintX) * 0.08;
        paintY += (mouseY - paintY) * 0.08;

        // Set paint position
        paint.style.left = paintX + "px";
        paint.style.top = paintY + "px";
    });

    // Add event listener for mouseover on the document
    document.addEventListener("mouseover", function () {
        // Show paint on mouseover
        paint.style.opacity = 1;

        // Set a timeout to hide paint after a certain duration (e.g., 1 second)
        setTimeout(() => {
            paint.style.opacity = 0;
        }, 1000);
    });

    // Add event listener for mouseout (when the cursor leaves the document)
    document.addEventListener("mouseout", function () {
        // Continue updating paint position even after the mouse stops
        updatePaintPosition();
    });

    // Function to update paint position with a trailing effect
    function updatePaintPosition() {
        // Use easing to update paint position more slowly
        paintX += (mouseX - paintX) * 0.1;
        paintY += (mouseY - paintY) * 0.1;

        // Set paint position
        paint.style.left = paintX + "px";
        paint.style.top = paintY + "px";

        // Continue updating paint position until it reaches the mouse position
        if (Math.abs(mouseX - paintX) > 1 || Math.abs(mouseY - paintY) > 1) {
            requestAnimationFrame(updatePaintPosition);
        }
    }
    const images = document.querySelectorAll(".ui img");
    const overlay = document.getElementById("overlay");
    const modalImage = document.getElementById("modalImage");

    images.forEach((image) => {
        image.addEventListener("click", function () {
            // Set the clicked image in the modal
            modalImage.src = image.src;

            // Show the overlay
            overlay.style.display = "flex";
        });
    });
});

function closeModal() {
    // Hide the overlay when the close button is clicked
    document.getElementById("overlay").style.display = "none";
};




