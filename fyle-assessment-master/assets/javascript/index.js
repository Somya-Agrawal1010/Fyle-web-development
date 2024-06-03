// Select all project card elements
const projectCards = document.querySelectorAll(".project-card");
const conatctBtn = document.querySelector(".contact-btn");
const closeBtn = document.querySelector(".cross-icon");
const serviceCards = document.querySelectorAll(".service-card");
const hoverCards = document.querySelectorAll(".hover-card"); // Pre-select all hover cards

serviceCards.forEach((serviceCard, index) => {
  serviceCard.addEventListener("hover", () => {
    if (hoverCards[index]) {
      // Check if hover card exists at the index
      hoverCards[index].style.display = "block";
    } else {
      console.error(`Hover card not found for service card at index ${index}`);
    }
  });
});

// Array of image URLs
const imageUrls = [
  "./assets/img/image-1.png",
  "./assets/img/image-2.png",
  "./assets/img/image-3.png",
];

// Ensure there is an image element to update
const image = document.querySelector(".project-img1");

if (image) {
  projectCards.forEach((project, index) => {
    project.addEventListener("click", () => {
      // Set the image source to the corresponding URL from the array
      if (index < imageUrls.length) {
        image.src = imageUrls[index];
        project.classList.add("project-card-active");
      }
    });
  });
} else {
  console.error("No element found with the class 'project-img'");
}

conatctBtn.addEventListener("click", () => {
  const form = document.querySelector(".form-container");
  form.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  const form = document.querySelector(".form-container");
  form.style.display = "none";
});

serviceCards.forEach((serviceCard, index) => {
  serviceCard.addEventListener("mouseenter", () => {
    if (hoverCards[index]) {
      hoverCards[index].style.display = "block";
    } else {
      console.error(`Hover card not found for service card at index ${index}`);
    }
  });

  serviceCard.addEventListener("mouseleave", () => {
    if (hoverCards[index]) {
      hoverCards[index].style.display = "none"; // Hide on mouseleave
    }
  });
});
