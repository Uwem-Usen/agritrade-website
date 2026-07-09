// ============================================
// MOBILE MENU TOGGLE
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menuToggle');
    var navLinks = document.getElementById('navLinks');

    if (menuToggle) {
        menuToggle.onclick = function() {
            navLinks.classList.toggle('active');
        };
    }
});

function closeMenu() {
    var navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.remove('active');
    }
}

// ============================================
// SMOOTH SCROLLING
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ============================================
// PRODUCT INQUIRY - Opens WhatsApp
// ============================================
function inquireProduct(productName) {
    var phone = '08145542679';
    var message = "Hello, I'm interested in purchasing " + productName + ". Please send me more information about pricing, quality, and availability.";
    var url = 'https://wa.me/234' + phone.substring(1) + '?text=' + encodeURIComponent(message);
    window.open(url, '_blank');
}

// ============================================
// SERVICE INQUIRY - Opens WhatsApp
// ============================================
function serviceInquiry(serviceName) {
    var phone = '08145542679';
    var message = "Hello, I'm interested in your " + serviceName + " service. Please send me more information about how you can help my business.";
    var url = 'https://wa.me/234' + phone.substring(1) + '?text=' + encodeURIComponent(message);
    window.open(url, '_blank');
}

// ============================================
// CONTACT FORM - Opens WhatsApp
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.onsubmit = function(e) {
            e.preventDefault();
            var name = document.getElementById('name');
            var email = document.getElementById('email');
            var message = document.getElementById('message');

            if (name && email && message && name.value && email.value && message.value) {
                var phone = '08145542679';
                var text = 'Hello, my name is ' + name.value + '. Email: ' + email.value + '. ' + message.value;
                var url = 'https://wa.me/234' + phone.substring(1) + '?text=' + encodeURIComponent(text);
                window.open(url, '_blank');
                this.reset();
                alert('✅ Message sent! We will get back to you shortly.');
            } else {
                alert('❌ Please fill in all required fields.');
            }
        };
    }
});
