document.addEventListener('DOMContentLoaded', function () {
    // Discovery button interaction
    const discoveryBtn = document.querySelector('.discovery-btn');
    if (discoveryBtn) {
        discoveryBtn.addEventListener('click', function (e) {
            e.preventDefault();
            this.style.transform = 'translateY(-2px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-2px) scale(1)';
            }, 150);
            setTimeout(() => {
                alert("Discovery call booking would open here! Let's blend some creativity! 🎨");
            }, 200);
        });
    }

    // Navigation link alerts
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const linkText = this.textContent;
            alert(`${linkText} page would load here!`);
        });
    });

    // Team card hover effect
    const cards = document.querySelectorAll('.person-card, .dog-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-12px) scale(1.02)';
        });
        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // === Image collage images appear one by one ===
    const collageImages = document.querySelectorAll('.image-collage .image');
    collageImages.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add('show');
        }, index * 200); // 200ms stagger
    });
});
