document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for course items
    const courseItems = document.querySelectorAll('.course-col');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    courseItems.forEach(item => {
        observer.observe(item);
    });

    // Scroll effect for "Let's get in touch" element
    const getInTouch = document.querySelector('.get-in-touch');

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 200) { // Adjust this value to control when the effect starts
            getInTouch.style.display = 'block';
        } else {
            getInTouch.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const getInTouch = document.querySelector('.get-in-touch');
    const contactInfoSection = document.querySelector('.contact-info');
    const contactForm = document.querySelector('.r_form');

    getInTouch.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // Highlight contact form
        contactForm.classList.add('highlight');

        // Animate contact info section
        contactInfoSection.classList.add('animated');
    });
});
