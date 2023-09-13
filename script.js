document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-item a');

    window.addEventListener('scroll', function () {
        let current = '';
        const scrolledToBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight;

        if (scrolledToBottom) {
            current = navLinks[navLinks.length - 1].getAttribute('href');
        } else {
            navLinks.forEach(link => {
                const sectionId = link.getAttribute('href');
                const section = document.querySelector(sectionId);

                const sectionTop = section.offsetTop - 50;
                if (window.scrollY >= sectionTop) {
                    current = sectionId;
                }
            });
        }

        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        if (current) {
            const currentLink = document.querySelector('.nav-item a[href="' + current + '"]');
            currentLink.classList.add('active');
        }
    });
});

