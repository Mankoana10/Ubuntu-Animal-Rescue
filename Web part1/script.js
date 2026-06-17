console.log("Script.js is working!");
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");
    const mapDiv = document.getElementById('map');
    console.log("Map div found:", mapDiv);
});
//Smooth scrool for nav links 
document.addEventListener('DOMContentLoaded', () => {
    const navlinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            //remove active class from all links
            navLinks.forEach(l => l.classlist.remive('active'));
            //add active class to clicked link
            this.classlist.add('active');
        });
    })
});

//Fade-in animation for featured animal cards
const animalCards = document.querySelectorAll('.featured-animal-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });
animalCards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.3}s, transform 0.6s ease ${index * 0.3}s`;
    observer.observe(card);
});
// See all adoptable pet button click effect
const seeAllButton = document.querySelector('.see-all-button a');
if (seeAllButton) {
    seeAllButton.addEventListener('click', function(e) {
        //add loading effect
        seeAllButton.textContent = 'Loading...';
        setTimeout(() => {
            seeAllButton.textContent = 'See All Adoptable Pets';
        }, 2000);
    });
}

//Social media links open in new tab
const socialLinks = document.querySelectorAll('.social-media a');
sociallinks.forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
});

//Dynamic copyright year in footer
const yearSpan = document.querySelector('.footer p');
if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.innerHTML = yearSpan.innerHTML.replace('2026', currentYear);
}

//Leaflet Map for Ubuntu Animal Rescue Location
document.addEventListener('DOMContentLoaded', () => {
    // coordinates for Ubuntu Animal Rescue
    const rescuelat = -23.9031;
    const rescuelng = 29.4589;
    //initialize the map
    const map = L.map('map').setView([rescuelat, rescuelng], 13);
    //add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    //paw icon 
    const pawIcon = L.icon({
        iconUrl: 'paw image.png',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
    });

    //add marker to the map
    L.marker([rescuelat, rescuelng], { icon: pawIcon })
        .addTo(map)
        .bindPopup(`
                    <div style="text-align:center"> <b>Ubuntu Animal Rescue</b><br> 54 Kerk Street. Polokwane, Limpopo <br> <a href="ContactUs.html" style="color:#2d6a4f"> Contact Us</a> </div>`)
        .openPopup();
    //fix map sizing if it loads in a hidden tab
    setTimeout(() => {
        map.invalidateSize();
    }, 100);
});