# Anzar Haider - Personal Portfolio Website

A professional, modern, and fully responsive portfolio website built with **HTML5**, **CSS3**, and **Vanilla JavaScript**. Designed to showcase my skills, experience, and projects to recruiters and potential employers.

---

## Project Description

This is my personal portfolio website — built from scratch to represent me as a Full Stack Developer and Programmer. The goal of this portfolio is to create a strong professional first impression that helps me stand out to recruiters, HR managers, and software companies in India and the Gulf region.

The website features a dark theme with cyan accents, glassmorphism effects, smooth animations, and a clean, modern design language across all pages.

---

## Features

- **Loading Screen** — Professional animated intro on page load
- **Scroll Progress Bar** — Visual indicator of scroll position
- **Typing Animation** — Dynamic text rotation in the hero section
- **Scroll Reveal Animations** — Elements fade in as you scroll
- **Responsive Navbar** — With active link highlighting and mobile menu
- **Glassmorphism Design** — Modern frosted glass effect on cards
- **Skill Cards** — Categorized skills with hover animations
- **Experience Timeline** — Professional vertical timeline
- **Project Cards** — With images, tags, status badges, and links
- **Project Search & Filter** — Search by name, filter by technology
- **Contact Form** — EmailJS integration for direct messaging
- **Scroll To Top Button** — Quick navigation back to top
- **Fully Responsive** — Optimized for desktop, tablet, and mobile
- **SEO Optimized** — Meta tags, Open Graph, semantic HTML
- **Accessible** — Proper alt attributes, labels, and keyboard support

---

## Technologies Used

| Category    | Technologies                          |
|-------------|---------------------------------------|
| Frontend    | HTML5, CSS3, JavaScript               |
| Fonts       | Google Fonts (Poppins)                |
| Icons       | Boxicons                              |
| Email       | EmailJS                               |
| Maps        | Google Maps Embed                     |
| Images      | Pexels (stock photos as placeholders) |

---

## Folder Structure

```
Portfolio/
├── index.html          # Home page (hero, about, skills, experience, featured projects, contact)
├── projects.html       # Projects page (search, filter, all projects)
├── about.html          # About page (bio, education, skills, hobbies)
├── contact.html        # Contact page (form, info, map)
├── style.css           # Complete stylesheet (all pages)
├── script.js           # Complete JavaScript (all pages)
├── images/             # Project images and profile photo
│   └── img7.png        # Profile image
├── resume/             # Resume folder
│   └── Anzar_Haider_Resume.pdf
└── README.md           # This file
```

---

## Installation

1. **Download or clone** the project folder to your computer.

2. **Navigate** to the project folder:
   ```
   cd Portfolio
   ```

3. **Open** `index.html` in your web browser:
   - Double-click the file, or
   - Right-click and select "Open with" your preferred browser

No build tools, package managers, or servers are required. The website runs entirely in the browser.

---

## How to Customize

### 1. Change Personal Information

Open `index.html`, `about.html`, `projects.html`, and `contact.html` in any text editor. Search for and replace:

- **Name**: `Anzar Haider`
- **Email**: `anzarhaider135@gmail.com`
- **Phone**: `+91 90124 03970`
- **Location**: `Meerut, Uttar Pradesh, India`

### 2. Change Social Links

Search for the social media URLs in all HTML files and replace with your own:

- GitHub: `https://github.com/Anzar135`
- LinkedIn: `https://linkedin.com/in/anzar-haider-81b428326`
- Instagram: `https://www.instagram.com/sayyed_a_n_z_a_r`
- WhatsApp: `https://wa.me/+919012403970`

### 3. Change Profile Image

Replace the file `images/img7.png` with your own profile photo. Keep the same filename, or update the `src` attribute in the HTML files.

### 4. Add a New Project

Open `projects.html` and copy one of the existing `project-card` blocks. Paste it inside the `projects-grid` div and update:

- `data-category` attribute (for filtering)
- Image `src` and `alt` text
- Project title, description, and features
- Technology tags
- Live demo and GitHub links
- Status badge (completed / ongoing)

### 5. Add a New Skill

Open `index.html`, find the `skills-container` section, and copy a `skill-category-card` block. Add your new skill tags inside the `skills-list` div.

### 6. Change Colors

Open `style.css` and find the **CSS Variables** section at the top. Modify the color values:

```css
:root {
    --accent-cyan: #00d9ff;     /* Primary accent color */
    --accent-blue: #3b82f6;     /* Secondary accent color */
    --bg-primary: #0a0a0f;      /* Main background */
}
```

### 7. Configure EmailJS

To make the contact form send real emails:

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Create a service and email template
3. Open `script.js` and find the **Contact Form** section
4. Replace these placeholders with your credentials:
   - `YOUR_PUBLIC_KEY`
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`

### 8. Add Resume

Place your resume PDF in the `resume/` folder and name it `Anzar_Haider_Resume.pdf`. The download buttons will automatically link to it.

---

## Pages Overview

### Home Page (`index.html`)
- Hero section with typing animation and profile image
- About section with personal info grid
- Skills section with categorized skill cards
- Experience timeline
- Featured projects (top 3)
- Contact form

### Projects Page (`projects.html`)
- Search box to find projects by name
- Filter buttons by technology
- All 8 projects with detailed cards
- Status badges and technology tags

### About Page (`about.html`)
- Personal biography
- Education history
- Technical skills with progress bars
- Soft skills / personal strengths
- Hobbies
- Call to action section

### Contact Page (`contact.html`)
- Contact methods (email, phone, WhatsApp, location)
- Social media links
- Contact form with EmailJS
- Google Maps embed

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Performance

- No heavy frameworks or libraries
- CSS animations instead of JavaScript where possible
- Lazy loading for map iframe
- Optimized images
- Minimal JavaScript — only what's needed

---

## Screenshots

> Add your screenshots here after deploying the site.

```
screenshots/
├── home.png
├── projects.png
├── about.png
└── contact.png
```

---

## License

This project is free to use for personal portfolio purposes. You may customize it for your own use.

---

## Contact

**Anzar Haider**
- Email: anzarhaider135@gmail.com
- Phone: +91 90124 03970
- Location: Meerut, Uttar Pradesh, India
- GitHub: [github.com/Anzar135](https://github.com/Anzar135)
- LinkedIn: [linkedin.com/in/anzar-haider-81b428326](https://linkedin.com/in/anzar-haider-81b428326)

---

© 2024 Anzar Haider. All rights reserved.
