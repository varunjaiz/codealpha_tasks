let filterButtons = document.querySelectorAll(".filter-btn");
let galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // Remove active class from all buttons
        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        // Add active class to clicked button
        button.classList.add("active");

        // Get selected category
        let category = button.getAttribute("data-category");

        // Show / hide images
        galleryItems.forEach((item) => {

            let itemCategory = item.getAttribute("data-category");

            if (category === "all" || category === itemCategory) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });

    });

});

// Lightbox

let lightbox = document.getElementById("lightbox");
let lightboxImage = document.getElementById("lightboxImage");

let closeBtn = document.getElementById("closeBtn");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;


// Get all images
let images = document.querySelectorAll(".gallery-item img");


// Open lightbox
images.forEach((image, index) => {

    image.addEventListener("click", () => {

        currentIndex = index;

        lightboxImage.src = image.src;

        lightbox.style.display = "flex";

    });

});


// Close lightbox
closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});


// Next image
nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    lightboxImage.src = images[currentIndex].src;

});


// Previous image
prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    lightboxImage.src = images[currentIndex].src;

});