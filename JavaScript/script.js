document.addEventListener("DOMContentLoaded", () => {
            console.log("Ubuntu Animal Rescue website loaded successfully.");

            //Smooth scroll for navbar links- no more jump clicks
            const navLinks = document.querySelectorAll(".navbar a");
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');
                    //Only smooth scroll if its an anchor link on the same page like
                    #
                    featured - animals
                    if (href.startsWith("#")) {
                        e.preventDefault();
                        const target =
                            document.querySelector(href);
                        if (target) {
                            target.scrollIntoView({ behavior: 'smooth' });
                        }
                    }
                });
            });

            //Fade in animal cards as you scroll- looks pro
            const animalCards = document.querySelectorAll('.animal-card');
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, {
                threshold: 0.1
            });

            animalCard.forEach(card => {
                card.style.opacity = 0;
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                observer.observe(card);
            });

            //Make "see-all-button" feel alive
            const seeAllButton = document.querySelector('.see-all-button a');
            if (seeAllButton) {
                seeAllButton.classList.add('btn');
                //so your CSS from earlier edits can style it nicely

                seeAllButton.addEventListener('mouseenter', () => {
                    seeAllButton.style.transform = 'translateY(-3px)  scale(1.05)';
                });

                seeAllButton.addEventListener('mouseleave', () => {
                    seeAllButton.style.transform = 'translateY(0) scale(1)';
                });

                //Highlight active page in navbar
                const currentPage = window.location.pathname.split("/").pop();
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === currentPage) {
                        link.classList.add('active');
                    }
                });
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
                console.log("Adoption page loaded");

                //Fade in animal cards as you scroll-smooth effect
                const animalCards =
                    document.querySelectorAll('.animal-card');
                const observer = new
                IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {

                            entry.target.classList.add('show'); //add class when visible

                            observer.unobserve(entry.target); //stop watching after it shows once
                        }
                    });
                }, { threshold: 0.15 }); //trigger when 15% of card is visible