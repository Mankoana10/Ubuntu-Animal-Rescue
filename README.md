# Ubuntu Animal Rescue Website

# Student Information
 Mankoana Marcia Letsoalo
  ST10491412 
  Web Development 
  WEDE5020

## Overview
This repository contains the **Ubuntu Animal Rescue** website – a static HTML site for an animal shelter dedicated to rescuing, caring for, and adopting out abandoned/abused animals (dogs and cats). Key pages include home with featured pets, adoption listings/form, shop, about, and contact.

**Tagline**: Find Your New Best Friend Today! Save. Love. Adopt 🐕🐈
Vision Statement 
The aim is to connect strays and sheltered animals with homes through an open and transparent online adoption platform. We will offer credible, practical animal-care information to the public through an integrated website.  Every stray dog or cat has a safe and loving home, and every pet owner has the right knowledge and skills to take care of their animal appropriately.

# Target Market
•	Families seeking pets
•	Individuals seeking companions
•	Pet owners seeking resources
# Website Goals and KPIs
# GOALS
•	Traffic- At least 50 monthly visitors 
•	Leads- Capture 20+ qualified adoption-inquiry leads per month via application/contact forms
•	Sell Products- Sell products as a donation strategy
# KPIs
•	Traffic- 50+ monthly users
•	Adoption Leads- 20+ leads/month
•	Conversion Rate- 3-5% of all visitors
•	Donation/Sales- R1000-R2000/month
# Essential Features & Functionality
# Core Page
•	Home Page- Nav Bar, header, featured pets, quick “Adopt Now” button
•	Adopt a pet- gallery of pets 
•	Adoption Process- Step-by-step guide (application)
•	 Shop- Buy button, 
•	Contact & FAQ- simple contact information
# Technical & User Features
•	Responsive design- Works on phones, tablets, and desktops
•	Adoption application form- Collects household information, applicant information
# Design Aesthetic & Branding 
# Colour Palette
•	Primary: soft blue- trust, calm, reliability
•	Secondary: light green, warmth, friendliness.
•	Neutral: light  white for background, dark grey/black for text
# Font Choices & Hierarchy
•	Heading: Rale way or Poppins
•	Body text: open sans or lato
•	Hierarchy: h1(largest, bold); h2 (section titles); h3 and body smaller, with ample lining spacing
# Design Approach & UX
1. 	Visual Style: Warm, friendly, and non-profit-focused, with large pet photos and minimal clutter.
2.	User experience consideration:
•	3-clicks rule-any user can reach an adoption form within 3 clicks
•	Clear CTAs (Adopt Now, Donate, Contact US)
•	Loading- state indicators and fast image optimization
 # Hosting, Domain, and Tech stack 
•	Domain: UbuntuAnimalRescue.co.za
•	Hosting: Entry level cloud hosting
•	Language & Framework: HTML, CSS, JavaScript, with optional CMS for non-technical content updates.
# Timeline
•	Week 1-2: Requirements gathering, sitemap, and low-fi wireframes.
•	Week3-4:  Design, copy, and basic CMS setup.
•	Week 6-8: Development (pages, forms, pet database)
•	Week 9: Testing
•	Week 10: Launching and soft promotion; start tracking KPIs
# Budget
•	Development: R1000-R2000
•	Hosting & Domain: R1500-R3000
•	Maintenance- R2000-R4009
TOTAL: R4500-R9000 FIRST YEAR INVESTMENT


 # Site Map
  <img src="[Site Map]](<../../Downloads/ubuntu animal rescue 1.0 (3).pdf>)>

## Project Structure
```
Ubuntu Rescue/
├── README.md              # This file
├── Images/                # Local images (logos, pets, products – copy to web dir or fix paths)
│   ├── logo rescue.png
│   ├── header photo.webp
│   ├── labrador retriever buddy.avif
│   ├── ... (40+ images)
└── Web part1/             # Website source
    ├── Home.html          # Landing: Mission, featured animals (Buddy, Luna, Max, etc.)
    ├── Adoption.html      # Adoptable pets list
    ├── AdoptionForm.html  # Adoption application
    ├── Shop.html          # Merch/support shop
    ├── ContactUs.html     # Contact info
    └── AboutUs.html       # Organization info
```

## Quick Start
1. Navigate to `Web part1/` directory.
2. **Fix images**: Paths in HTML are absolute Windows (`c:\Users\manko\Downloads\...`). Either:
   - Copy images from `../Images/` to `Web part1/images/` and update `src` to relative (e.g., `src="images/logo rescue.png"`).
   - Or serve from root with `img src="../Images/logo rescue.png"`.
3. Open `Web part1/Home.html` in a browser.
4. Use navigation for other pages. Fully static – no build/server needed.

**Live demo**: Run `c:/Users/manko/Desktop/Ubuntu Rescue/Web part1/Home.html` in browser.

## Features
- Responsive-ready structure (add CSS).
- Featured animals with photos/descriptions.
- Social links (Facebook, Instagram, Twitter).
- Footer with quick links.

## Todos / Improvements
- **High priority**: Update all image `src` to relative paths using `../Images/` or local `images/` folder.
- Extract inline styles to `Web part1/styles.css`.
- Add JavaScript (e.g., pet search/filter).
- Make fully responsive (media queries).
- Deploy to GitHub Pages/Netlify.
- Add more pets, testimonials, donation form.
- Clean up HTML (remove duplicate footers/navs).

## Contributing
1. Fork/clone repo.
2. Create branch: `git checkout -b feature/update-images`.
3. Commit changes: `git commit -m "Fix image paths"`.
4. Push & PR.
## Features Added in Part2
- Added improved improved navigation between pages.
- Improved website layout and design.
- Added responsive design for mobile and desktop.
- Fixed errors identified from Part 1 Feedback.
- Updated content for better user experience.
## Features added in Part 3
- Added
## Technologies Used 
- HTML
- CSS
- GitHub for version control
- Netlify for hosting

## Changelog
1.Part 1
- Create  6 html files which are home,adopt,contact us, shop,about us and adoption form
- Added photos of animals
- Created a form for application
- Did more research about adoption websites
2. Part 2
- Updated homepage, shop, adopt, contact us, about us content
- Improved website styling and layout
- Corrected navigation issues
- Added responsive design features
- Updated README documentation
3. Part 3
- Created 1 new html file which is cart
- created 2 js files
- added more images
- edited the files
- add 'add to cart' button on shop
- added a map to the website 
- used netlify to host my website

## Mobile Responsive
- SmartPhone Home=(<Images/phone home.png>)
- Laptop Home= (<laptop home.png>)
- Tablet Home= (<tablet homepage.png>)

# Reference 
•	Animals TLC, 2024. Animal TLC website. Available at: https://animaltlc.com/  (Accessed: 01 April 2026)
•	Jodie Humphries,2025. Important SEO metrics for pet businesses to grow traffic. Available at: https://jodiehumphries.com/important-seo-metrics-pet-busines/ (Accessed: 15 April 2026)
•	Funds for NGOs, 2026. Proposal for pet adoption and welfare programs. Available at: https://www.fundsforngos.org/proposals/sample-proposal-on-fostering-love-and -care-proposal-for-pet-adoption-and-welfare-programs (Accessed: 15 April 2026)
•	Figma, 2016. Wireframes. https://www.figma.com/wireframe (Accessed: 01 April 2026)  
•	Font Awesome, 2012. Icons- Envelope. Available at:  https://fontawesome.com/icons/envelope (Accessed:01 April 2026) 
•	Font Awesome, 2012. Icons- Envelope. Available at:   https://fontawesome.com/icons/location (Accessed at:29 March 2026)
•	Font Awesome, 2012. Icons-Phone. Available at: https://fontawesom.com/icons/phone (Accessed: 01 April 2026)
•	Netlify,2024.Netlify.Available at:  https://wwww.netlify.com (Accessed: 19 June 2026)
•	Soshanguve Animal Shelter and Edu center, 2023.Soshanguve Animal Shelter. Available at: https://www.soshanguveanimalshelter.org.za (Accessed at:29 March 2026)
•	Vector Stock, 2007. No picture vector images & illustrations. Available at: https://www.vectorstock.com/royalty-free-vectors/no-picture-vectors (Accessed: 16 April 2026)



## License
© 2026 Ubuntu Animal Rescue. All rights reserved. Code contributions MIT licensed.

---
**Questions?** See ContactUs.html or open an issue.

🐾 Powered by Ubuntu Animal Rescue
