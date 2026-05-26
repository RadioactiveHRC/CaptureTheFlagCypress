# Ultimate Capture the Flag Website

A complete, professional static website for **Ultimate Capture the Flag**, a Capture the Flag league based in Cypress, Texas.

The site is designed for player and parent registration, league information, pricing, rules, testimonials, FAQ, contact details, and a responsive Google Form registration area.

## Features

- Mobile-first responsive layout
- Sticky navigation with mobile menu
- Black and neon-green hero section inspired by the supplied league logo
- Countdown timer
- Smooth scrolling and active navigation states
- Scroll reveal animations
- League information cards
- Pricing cards for registration and merchandise
- Responsive Google Form embed placeholder
- FAQ accordion
- Testimonials
- Contact and social media placeholders
- SEO-friendly semantic HTML
- CSS custom properties for fast rebranding
- GitHub Pages, Netlify, and Vercel compatible

## Project Structure

```text
/
├── index.html
├── styles.css
├── script.js
├── README.md
├── .gitignore
├── assets/
│   ├── images/
│   │   ├── hero-capture-league.png
│   │   └── ultimate-capture-logo.png
│   ├── icons/
│   └── logos/
└── docs/
```

## Installation

No build step is required. This is a traditional static website.

To preview locally in VS Code:

1. Open the project folder.
2. Install the VS Code extension **Live Server** if desired.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

You can also open `index.html` directly in a browser.

## Configuration

Most content is editable in the `SITE_CONFIG` object near the top of `script.js`.

Edit:

- League name
- League description
- Slogan
- Countdown season start date
- Age groups
- Season dates
- Game locations
- Registration deadline
- Match schedule
- Team structure
- Registration and purchase links
- Pricing cards
- Testimonials
- FAQ content
- Contact information
- Social media links

Brand styles are editable in the `:root` section near the top of `styles.css`.

Edit:

- Brand colors
- Accent colors
- Typography sizes
- Border radius values
- Shadow values
- Spacing values

## Google Form Setup

The site includes a professional placeholder inside the **Registration & Purchases** section.

To embed your Google Form:

1. Open your Google Form.
2. Click **Send**.
3. Select the embed icon.
4. Copy the iframe code.
5. Open `index.html`.
6. Find the comment labeled `GOOGLE FORM IFRAME GOES HERE`.
7. Replace the placeholder `<div class="form-placeholder">...</div>` with your iframe.

Recommended iframe settings:

```html
<iframe
  src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
  width="100%"
  height="900"
  frameborder="0"
  marginheight="0"
  marginwidth="0"
>
  Loading...
</iframe>
```

To add direct form links, update this section in `script.js`:

```js
links: {
  registrationForm: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform",
  purchaseForm: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform",
}
```

## Git Commands

Initialize and commit:

```bash
git init
git add .
git commit -m "Initial Ultimate Capture the Flag website"
```

Connect to GitHub:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

Common maintenance:

```bash
git status
git add .
git commit -m "Update league content"
git push
```

## Deploy to GitHub Pages

1. Push the repository to GitHub.
2. Open the repository on GitHub.
3. Go to **Settings**.
4. Select **Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and `/root`.
7. Save.
8. GitHub will publish the website and provide a live URL.

## Deploy to Netlify

1. Go to [Netlify](https://www.netlify.com/).
2. Select **Add new site**.
3. Choose **Import an existing project**.
4. Connect your GitHub repository.
5. Leave the build command blank.
6. Set the publish directory to `/`.
7. Deploy.

## Deploy to Vercel

1. Go to [Vercel](https://vercel.com/).
2. Select **Add New Project**.
3. Import your GitHub repository.
4. Keep the framework preset as **Other**.
5. Leave the build command blank.
6. Set output directory to `/` if prompted.
7. Deploy.

## Editing Tips

- Keep all league content in `script.js` when possible.
- Keep visual changes in `styles.css`.
- Replace placeholder contact information before launch.
- Replace placeholder pricing before registration opens.
- Test on mobile and desktop after changing layout or content.
- Keep the Google Form height tall enough to avoid awkward internal scrolling.

## Browser Support

The website uses modern HTML, CSS, and JavaScript and is intended for current versions of Chrome, Edge, Safari, and Firefox.
