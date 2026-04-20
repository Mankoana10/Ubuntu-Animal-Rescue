# Ubuntu Animal Rescue Website

## Overview
This is the official website for **Ubuntu Animal Rescue**, a shelter dedicated to providing care, love, and forever homes for abandoned and abused animals. Our mission is to save, love, and help animals find their best friends.

The site features:
- **Home**: Introduction, mission statement, and featured adoptable animals (Buddy, Luna, Max, Bella, Charlie, Sophie).
- **Adopt (Adoption.html)**: Browse all adoptable pets.
- **Shop**: Support the rescue through purchases.
- **Contact Us**: Get in touch.
- **About Us**: Learn more about the organization.
- **Adoption Form**: Submit adoption applications.

## Local Setup & Running
1. Clone or download the project files to a local directory.
2. **Fix image paths**: Images use absolute Windows paths (e.g., `c:\Users\manko\Downloads\logo rescue.png`). Copy all images from Downloads to a `./images/` folder in the project root and update `src` attributes in HTML files to relative paths (e.g., `src="images/logo rescue.png"`).
3. Open `Home.html` in any web browser (Chrome, Firefox, etc.).
4. Navigate via the menu to other pages.

No server or dependencies required – pure static HTML.

## File Structure
```
Ubuntu Rescue/
├── Home.html          # Landing page with featured animals
├── Adoption.html      # Full adoptable pets list
├── AdoptionForm.html  # Adoption application form
├── Shop.html          # Shop page
├── AboutUs.html       # About the rescue
├── ContactUs.html     # Contact information
└── README.md          # This file
```

## Screenshots
- Home page shows header, mission, and animal cards.
- (Add screenshots here if desired by placing images in `./images/` and linking.)

## Todos / Improvements
- Extract CSS to `styles.css` and link it.
- Make site responsive for mobile.
- Fix all image paths to relative.
- Add JavaScript for interactivity (e.g., search pets).
- Host online (GitHub Pages, Netlify).
- Validate HTML and accessibility.

## Contributing
1. Fork the repo.
2. Create a feature branch.
3. Commit changes.
4. Submit a pull request.

## License
© 2026 Ubuntu Animal Rescue. All rights reserved. Open source contributions welcome under MIT license for code improvements.

---

**Save. Love. Adopt! 🐶🐱**


