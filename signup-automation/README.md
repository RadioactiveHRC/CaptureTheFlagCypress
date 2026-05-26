# Ultimate Capture the Flag Signup Automation

This mini-project creates an automated signup system for **Ultimate Capture the Flag**.

It includes:

- A Google Apps Script file that generates a Google Form
- Automatic response sheet creation
- Logged Form edit URL, live Form URL, and Sheet URL
- A clean website signup section with a signup button and Google Form embed placeholder

## Files

```text
signup-automation/
├── README.md
├── google-form-generator.gs
└── website/
    ├── index.html
    ├── styles.css
    └── script.js
```

## What the Google Form Collects

The generated form includes:

- Player full name
- Player age
- Grade level
- School
- Parent/guardian full name
- Parent email
- Parent phone number
- Emergency contact name
- Emergency contact phone
- Medical conditions/allergies
- Experience level
- Preferred team/friends request
- T-shirt/jersey size
- League division preference
- Payment method/status
- Waiver agreement checkbox
- Photo/video release checkbox
- Rules and sportsmanship agreement checkbox
- Optional comments/questions

## Open Google Apps Script

1. Go to [https://script.google.com](https://script.google.com).
2. Sign in with your Google account.
3. Click **New project**.
4. Rename the project to `Ultimate Capture the Flag Signup Generator`.

## Paste the Code

1. In the Apps Script editor, open the default file, usually named `Code.gs`.
2. Delete the starter code.
3. Copy everything from `google-form-generator.gs`.
4. Paste it into `Code.gs`.
5. Click **Save**.

## Edit the Configuration

At the top of `google-form-generator.gs`, edit the `LEAGUE_CONFIG` section.

You can change:

- League name
- Location
- Season name
- Contact email
- Form title
- Google Sheet name
- Division options
- Grade levels
- Shirt sizes
- Payment status options

## Run the Script

1. In Google Apps Script, find the function dropdown near the top.
2. Select `createUltimateCaptureSignupForm`.
3. Click **Run**.

## Accept Permissions

Google will ask for permission because the script creates a Form and a Sheet.

Approve permissions for:

- Creating and editing Google Forms
- Creating and editing Google Sheets
- Connecting the Form to the response Sheet

If Google shows an “unverified app” warning, click:

1. **Advanced**
2. **Go to project**
3. **Allow**

This is normal for your own personal Apps Script project.

## Find the Generated Links

After the script runs:

1. In Apps Script, click **Executions** or **View logs**.
2. Look for these lines:

```text
Form edit URL:
Live form URL:
Response sheet URL:
```

Use:

- **Form edit URL** to edit the form
- **Live form URL** to share with players and parents
- **Response sheet URL** to view registrations

## Paste the Form Link Into the Website

Open:

```text
website/script.js
```

Find:

```js
const SIGNUP_CONFIG = {
  googleFormUrl: "",
  embedGoogleFormAutomatically: false,
};
```

Paste your live Google Form URL:

```js
const SIGNUP_CONFIG = {
  googleFormUrl: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform",
  embedGoogleFormAutomatically: false,
};
```

Now the signup buttons will open the Google Form.

## Embed the Form on the Website

Option 1: Automatic embed

Set this to `true` in `website/script.js`:

```js
embedGoogleFormAutomatically: true,
```

Option 2: Manual iframe embed

1. Open your generated Google Form.
2. Click **Send**.
3. Click the embed icon: `<>`.
4. Copy the iframe code.
5. Open `website/index.html`.
6. Find the comment that says `OPTION 2: EMBED THE GOOGLE FORM DIRECTLY`.
7. Replace the placeholder `<div class="embed-placeholder">...</div>` with the iframe.

## Preview the Website

You can open this file directly in your browser:

```text
website/index.html
```

Or use VS Code Live Server:

1. Open the project folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `website/index.html`.
4. Click **Open with Live Server**.

## Push the Project to GitHub From VS Code

In VS Code:

1. Open the Source Control panel.
2. Review the changed files.
3. Type a commit message, for example:

```text
Add signup automation system
```

4. Click **Commit**.
5. Click **Sync Changes** or **Push**.

From the VS Code terminal, you can also run:

```bash
git add signup-automation
git commit -m "Add signup automation system"
git push
```

## Notes

- The Apps Script creates a brand-new Google Form every time you run it.
- The Apps Script also creates a brand-new Google Sheet every time you run it.
- Keep the generated Sheet private if it contains player or parent information.
- Review waiver language with a qualified professional before using it as a legal document.
