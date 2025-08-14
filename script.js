document.addEventListener("DOMContentLoaded", function () {
  // 🔁 Product Image Switcher
  const product1 = document.getElementById("product1");
  const product2 = document.getElementById("product2");
  const image = document.getElementById("productImage");

  if (product1 && product2 && image) {
    product1.addEventListener("click", () => {
      image.src = "img/products-brief2.png"; // Update with actual image
    });

    product2.addEventListener("click", () => {
      image.src = "img/products-brief.png"; // Update with actual image
    });
  }

  // 📩 Contact Modal Handling
  const modal = document.getElementById("contactModal");
  const closeBtn = document.getElementById("closeModal");
  const contactBtn = document.querySelector(".blue-glow-button-3");

  if (modal && closeBtn && contactBtn) {
    contactBtn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }

  // Experiment start
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      const body = header.nextElementSibling;
      const open = body.style.display === "block";
      
      // Close all
      document.querySelectorAll(".accordion-body").forEach(b => b.style.display = "none");

      // Toggle current
      body.style.display = open ? "none" : "block";
    });
  });
  // Experiment complete

  // Get the product buttons and content sections
  const product1Button = document.getElementById('product1');
  const product2Button = document.getElementById('product2');
  const product1Content = document.getElementById('product1Content');
  const product2Content = document.getElementById('product2Content');
  
  // Set initial state - Product 1 is active by default
  product1Button.classList.add('active');
  product1Content.classList.add('active');
  product2Content.classList.remove('active');
  
  // Set first dropdown item as active initially
  const firstDropdown = document.querySelector('.feature-item.dropdown');
  if (firstDropdown) {
    firstDropdown.classList.add('active');
  }
  
  // Add click event listener for Product 1
  product1Button.addEventListener('click', function() {
    // Update active states
    product1Button.classList.add('active');
    product2Button.classList.remove('active');
    
    // Show Product 1 content, hide Product 2 content
    product1Content.classList.add('active');
    product2Content.classList.remove('active');
    
    // Reset dropdowns - make first one active in the newly selected product
    document.querySelectorAll('.feature-item.dropdown').forEach(item => {
      item.classList.remove('active');
    });
    
    const firstDropdownInActiveProduct = document.querySelector('#product1Content .feature-item.dropdown');
    if (firstDropdownInActiveProduct) {
      firstDropdownInActiveProduct.classList.add('active');
    }
  });
  
  // Add click event listener for Product 2
  product2Button.addEventListener('click', function() {
    // Update active states
    product2Button.classList.add('active');
    product1Button.classList.remove('active');
    
    // Show Product 2 content, hide Product 1 content
    product2Content.classList.add('active');
    product1Content.classList.remove('active');
    
    // Reset dropdowns - make first one active in the newly selected product
    document.querySelectorAll('.feature-item.dropdown').forEach(item => {
      item.classList.remove('active');
    });
    
    const firstDropdownInActiveProduct = document.querySelector('#product2Content .feature-item.dropdown');
    if (firstDropdownInActiveProduct) {
      firstDropdownInActiveProduct.classList.add('active');
    }
  });
  
  // Add event listeners to dropdown headers
  document.querySelectorAll('.feature-header').forEach(header => {
    header.addEventListener('click', function() {
      const featureItem = this.parentElement;
      
      // Toggle active class on clicked item
      featureItem.classList.toggle('active');
      
      // Close other dropdowns when one is opened
      document.querySelectorAll('.feature-item.dropdown').forEach(item => {
        if (item !== featureItem && item.closest('.product-detail.active')) {
          item.classList.remove('active');
        }
      });
      
      // Smooth scroll to the opened dropdown on mobile
      if (window.innerWidth <= 768 && featureItem.classList.contains('active')) {
        setTimeout(() => {
          featureItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    });
  });
  
  // Add hover effect for dropdowns on desktop
  if (window.innerWidth > 768) {
    document.querySelectorAll('.feature-item').forEach(item => {
      item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
      });
      
      item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
      });
    });
  }

  // FAQ Dropdown Functionality
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const toggle = item.querySelector('.faq-toggle');
    
    // Click handler for the entire item
    item.addEventListener('click', function() {
      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('open')) {
          otherItem.classList.remove('open');
        }
      });
      
      // Toggle current item
      this.classList.toggle('open');
    });
    
    // Click handler just for the toggle button (optional)
    if (toggle) {
      toggle.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent the item click from firing
        item.classList.toggle('open');
      });
    }
  });
});
