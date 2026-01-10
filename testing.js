document.addEventListener("DOMContentLoaded", function () {

  // Horizontal scroll for nav
  const navLinks = document.querySelector(".nav-links");
  if (navLinks) {
    navLinks.addEventListener("wheel", (e) => {
      e.preventDefault();
      navLinks.scrollLeft += e.deltaY;
    });
  }

  // Search logic
  const searchForm = document.querySelector(".search-box");
  if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const query = document.getElementById("searchInput").value.toLowerCase();

      if (query.includes("top")) location.href = "Tops.html";
      else if (query.includes("skirt")) location.href = "Skirts.html";
      else if (query.includes("gown")) location.href = "Gowns.html";
      else if (query.includes("hat")) location.href = "Hats.html";
      else if (query.includes("corporate")) location.href = "corporate.html";
      else alert("No matching outfit found");
    });
  }

  // Dynamic Modal Logic
  const modal = document.getElementById("productModal");
  const modalImage = document.getElementById("modalImage");
  const modalName = document.getElementById("modalName");
  const modalPrice = document.getElementById("modalPrice");
  const modalDescription = document.getElementById("modalDescription");
  const closeBtn = document.querySelector(".close-btn");

  // Attach click event to all view buttons
  document.querySelectorAll(".view-btn").forEach(button => {
    button.addEventListener("click", function () {
      modalImage.src = this.dataset.image;
      modalName.textContent = this.dataset.name;
      modalPrice.textContent = this.dataset.price;
      modalDescription.textContent = this.dataset.description;

      modal.style.display = "flex";
    });
  });

  // Close modal on X click
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  // Close modal when clicking outside
  window.onclick = function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };

});
