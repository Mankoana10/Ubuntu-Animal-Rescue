# Ubuntu Animal Rescue Website

## Overview
This repository contains the **Ubuntu Animal Rescue** website – a static HTML site for an animal shelter dedicated to rescuing, caring for, and adopting out abandoned/abused animals (dogs and cats). Key pages include home with featured pets, adoption listings/form, shop, about, and contact.

**Tagline**: Find Your New Best Friend Today! Save. Love. Adopt 🐕🐈

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

## License
© 2026 Ubuntu Animal Rescue. All rights reserved. Code contributions MIT licensed.

---
**Questions?** See ContactUs.html or open an issue.

🐾 Powered by Ubuntu Animal Rescue
