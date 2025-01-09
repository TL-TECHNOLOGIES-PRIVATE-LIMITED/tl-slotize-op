class Modal {
    constructor() {
        this.scrollPosition = 0;
        this.init();
    }

    init() {
        // Select modal triggers, close buttons, and modals
        this.modalTriggers = document.querySelectorAll('.modal-trigger');
        this.modalCloseBtns = document.querySelectorAll('.modal-close');
        this.modals = document.querySelectorAll('.custom-modal');
        
        this.bindEvents();
    }

    bindEvents() {
        // Add event listeners to open modals
        this.modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const modalId = trigger.getAttribute('data-modal');
                this.openModal(modalId);
            });
        });

        // Add event listeners to close buttons
        this.modalCloseBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const modal = btn.closest('.custom-modal');
                this.closeModal(modal);
            });
        });

        // Close modal when clicking outside
        this.modals.forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal(modal);
                }
            });
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.modals.forEach(modal => {
                    if (modal.classList.contains('active')) {
                        this.closeModal(modal);
                    }
                });
            }
        });
    }

    openModal(modalId) {
        const modal = document.getElementById(modalId);
        
        // Store scroll position before opening modal
        this.scrollPosition = window.scrollY;
        
        // Prevent body scroll and store the scroll position
        document.body.classList.add('modal-open');
        document.body.style.top = `-${this.scrollPosition}px`;
        
        // Show modal
        modal.classList.add('active');
    }

    closeModal(modal) {
        // Remove modal open style and reset scroll
        document.body.classList.remove('modal-open');
        document.body.style.top = '';
        
        // Scroll back to previous position
        window.scrollTo(0, this.scrollPosition);
        
        // Hide modal
        modal.classList.remove('active');
    }
}

// Initialize modal functionality when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    new Modal();
});




document.addEventListener("DOMContentLoaded", function() {
    const cookieConsent = document.getElementById("cookieConsent");
    const acceptCookies = document.getElementById("acceptCookies");
    const rejectCookies = document.getElementById("rejectCookies");
    
    // Show cookie consent popup only if not already accepted or rejected
    if (localStorage.getItem("cookiesAccepted") === null) {
        cookieConsent.classList.remove("d-none");
    } else if (localStorage.getItem("cookiesAccepted") === "false") {
        cookieConsent.classList.add("d-none");
    }
    
    acceptCookies.addEventListener("click", function() {
        localStorage.setItem("cookiesAccepted", "true");
        cookieConsent.classList.add("d-none");  // Hide the cookie consent message
    });
    
    rejectCookies.addEventListener("click", function() {
        localStorage.setItem("cookiesAccepted", "false");
        cookieConsent.classList.add("d-none");  // Hide the cookie consent message
    });
});




  document.addEventListener("DOMContentLoaded", function () {
    const cookiePopup = document.getElementById("cookiePopup");
    const acceptCookie = document.getElementById("acceptCookie");
    const rejectCookie = document.getElementById("rejectCookie");

    // Check if the user has already made a choice
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      cookiePopup.classList.remove("hidden");
    }

    // Handle Accept button
    acceptCookie.addEventListener("click", function () {
      localStorage.setItem("cookieConsent", "accepted");
      cookiePopup.classList.add("hidden");
    });

    // Handle Reject button
    rejectCookie.addEventListener("click", function () {
      localStorage.setItem("cookieConsent", "rejected");
      cookiePopup.classList.add("hidden");
    });
  });
