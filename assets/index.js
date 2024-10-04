
// index.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize floating elements
    const floatingElements = document.querySelectorAll('.floating');
    floatingElements.forEach((el, index) => {
        // Assign random starting positions
        el.style.left = `${Math.random() * 90}vw`;
        el.style.top = `${Math.random() * 90}vh`;

        // Create unique animation for each type of element
        let animation = {
            y: "random(-20, 20)",
            x: "random(-20, 20)",
            rotation: "random(-15, 15)",
            duration: "random(3, 5)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.2
        };

        // Customize animation based on element class
        if (el.classList.contains('candy')) {
            animation.scale = "random(0.8, 1.2)";
        } else if (el.classList.contains('animal')) {
            animation.rotation = "random(-45, 45)";
        } else if (el.classList.contains('gadget')) {
            animation.opacity = "random(0.4, 0.8)";
        }

        gsap.to(el, animation);
    });

    // Animate profile image
    gsap.from('.profile-img', {
        duration: 1.5,
        scale: 0,
        rotation: 360,
        ease: 'elastic.out(1, 0.5)'
    });

    // Animate text elements
    gsap.from('.gradient-text, .tagline', {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.3,
        ease: 'power3.out',
        delay: 0.5
    });

    // Animate sections on scroll
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power3.out'
        });
    });

    // Animate signature
    const signature = document.querySelector('.signature');
    gsap.to(signature, {
        duration: 2,
        rotationY: 360,
        scale: 1.1,
        repeat: -1,
        ease: "power1.inOut",
        yoyo: true
    });

    // Smooth scrolling for navbar links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: targetSection,
                    offsetY: 80
                },
                ease: "power3.inOut"
            });
        });
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.9)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.8)';
        }
    });
});