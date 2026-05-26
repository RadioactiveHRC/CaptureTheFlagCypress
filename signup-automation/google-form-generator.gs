/**
 * Ultimate Capture the Flag Signup Form Generator
 *
 * Beginner-friendly Google Apps Script that creates:
 * 1. A Google Form for league registration
 * 2. A linked Google Sheet for responses
 * 3. Logs with the form edit URL, live form URL, and response sheet URL
 *
 * HOW TO USE:
 * - Paste this file into Google Apps Script.
 * - Run createUltimateCaptureSignupForm().
 * - Accept the requested Google permissions.
 * - Open View > Logs to copy your generated URLs.
 */

/* ==========================================================================
   CONFIGURATION
   Edit these values before running the script.
   ========================================================================== */
const LEAGUE_CONFIG = {
  leagueName: "Ultimate Capture the Flag",
  location: "Cypress, Texas",
  seasonName: "Upcoming Season",
  contactEmail: "info@example.com",
  formTitle: "Ultimate Capture the Flag League Signup",
  sheetName: "Ultimate Capture the Flag Signup Responses",
  formDescription:
    "Register for Ultimate Capture the Flag in Cypress, Texas. This form collects player information, parent/guardian details, emergency contacts, waiver agreements, and signup preferences.",
  divisions: [
    "Elementary Division",
    "Middle School Division",
    "High School Division",
    "Adult / Open Division",
    "Not sure yet",
  ],
  gradeLevels: [
    "3rd Grade",
    "4th Grade",
    "5th Grade",
    "6th Grade",
    "7th Grade",
    "8th Grade",
    "9th Grade",
    "10th Grade",
    "11th Grade",
    "12th Grade",
    "College",
    "Adult",
    "Other",
  ],
  shirtSizes: [
    "Youth Small",
    "Youth Medium",
    "Youth Large",
    "Adult Small",
    "Adult Medium",
    "Adult Large",
    "Adult XL",
    "Adult 2XL",
  ],
  paymentStatuses: [
    "I have paid",
    "I will pay before the first game",
    "I need payment instructions",
    "Scholarship / financial assistance request",
  ],
};

/**
 * Main function.
 * Run this function from the Google Apps Script editor.
 */
function createUltimateCaptureSignupForm() {
  const form = FormApp.create(LEAGUE_CONFIG.formTitle)
    .setTitle(LEAGUE_CONFIG.formTitle)
    .setDescription(buildFormDescription())
    .setCollectEmail(false)
    .setAllowResponseEdits(true)
    .setLimitOneResponsePerUser(false)
    .setConfirmationMessage(
      "Thank you for signing up for Ultimate Capture the Flag. We will contact you with next steps soon."
    );

  addPlayerSection(form);
  addParentGuardianSection(form);
  addEmergencyMedicalSection(form);
  addLeaguePreferencesSection(form);
  addPaymentSection(form);
  addAgreementsSection(form);
  addFinalCommentsSection(form);

  const spreadsheet = SpreadsheetApp.create(LEAGUE_CONFIG.sheetName);
  form.setDestination(FormApp.DestinationType.SPREADSHEET, spreadsheet.getId());

  logCreatedResources(form, spreadsheet);

  return {
    editUrl: form.getEditUrl(),
    liveUrl: form.getPublishedUrl(),
    sheetUrl: spreadsheet.getUrl(),
  };
}

function buildFormDescription() {
  return [
    LEAGUE_CONFIG.formDescription,
    "",
    `League: ${LEAGUE_CONFIG.leagueName}`,
    `Location: ${LEAGUE_CONFIG.location}`,
    `Season: ${LEAGUE_CONFIG.seasonName}`,
    `Questions: ${LEAGUE_CONFIG.contactEmail}`,
  ].join("\n");
}

function addPlayerSection(form) {
  form.addSectionHeaderItem()
    .setTitle("Player Information")
    .setHelpText("Tell us who is signing up to play.");

  form.addTextItem()
    .setTitle("Player full name")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Player age")
    .setHelpText("Enter the player's age as a number.")
    .setRequired(true);

  form.addListItem()
    .setTitle("Grade level")
    .setChoiceValues(LEAGUE_CONFIG.gradeLevels)
    .setRequired(true);

  form.addTextItem()
    .setTitle("School")
    .setHelpText("Enter the player's school name. If not applicable, write N/A.")
    .setRequired(true);
}

function addParentGuardianSection(form) {
  form.addSectionHeaderItem()
    .setTitle("Parent / Guardian Information")
    .setHelpText("Required for minors and recommended for all players.");

  form.addTextItem()
    .setTitle("Parent/guardian full name")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Parent email")
    .setHelpText("Use the best email for league updates.")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Parent phone number")
    .setHelpText("Use the best phone number for urgent league communication.")
    .setRequired(true);
}

function addEmergencyMedicalSection(form) {
  form.addSectionHeaderItem()
    .setTitle("Emergency & Medical Information")
    .setHelpText("This helps league staff respond responsibly if an issue occurs.");

  form.addTextItem()
    .setTitle("Emergency contact name")
    .setRequired(true);

  form.addTextItem()
    .setTitle("Emergency contact phone")
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle("Medical conditions/allergies")
    .setHelpText("List any medical conditions, allergies, or write N/A.")
    .setRequired(true);
}

function addLeaguePreferencesSection(form) {
  form.addSectionHeaderItem()
    .setTitle("League Preferences")
    .setHelpText("These details help us organize teams and divisions.");

  form.addMultipleChoiceItem()
    .setTitle("Experience level")
    .setChoiceValues(["Beginner", "Intermediate", "Advanced"])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle("Preferred team/friends request")
    .setHelpText("List teammate requests. Requests are not guaranteed, but we will review them.")
    .setRequired(false);

  form.addListItem()
    .setTitle("T-shirt/jersey size")
    .setChoiceValues(LEAGUE_CONFIG.shirtSizes)
    .setRequired(true);

  form.addListItem()
    .setTitle("League division preference")
    .setChoiceValues(LEAGUE_CONFIG.divisions)
    .setRequired(true);
}

function addPaymentSection(form) {
  form.addSectionHeaderItem()
    .setTitle("Payment")
    .setHelpText("Update this section later if you connect a specific payment workflow.");

  form.addMultipleChoiceItem()
    .setTitle("Payment method/status")
    .setChoiceValues(LEAGUE_CONFIG.paymentStatuses)
    .setRequired(true);
}

function addAgreementsSection(form) {
  form.addSectionHeaderItem()
    .setTitle("Waivers & Agreements")
    .setHelpText("Players may not participate unless required agreements are accepted.");

  form.addCheckboxItem()
    .setTitle("Waiver agreement")
    .setHelpText("Required: parent/guardian or adult player accepts league participation risk and waiver terms.")
    .setChoiceValues(["I agree to the waiver terms."])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle("Photo/video release")
    .setHelpText("Required: parent/guardian or adult player grants permission for league photo/video use.")
    .setChoiceValues(["I agree to the photo/video release."])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle("Rules and sportsmanship agreement")
    .setHelpText("Required: player agrees to follow league rules, respect referees, and show good sportsmanship.")
    .setChoiceValues(["I agree to follow the rules and sportsmanship expectations."])
    .setRequired(true);
}

function addFinalCommentsSection(form) {
  form.addSectionHeaderItem()
    .setTitle("Final Notes")
    .setHelpText("Anything else we should know?");

  form.addParagraphTextItem()
    .setTitle("Optional comments/questions")
    .setRequired(false);
}

function logCreatedResources(form, spreadsheet) {
  Logger.log("Ultimate Capture the Flag signup form created successfully.");
  Logger.log("Form edit URL: " + form.getEditUrl());
  Logger.log("Live form URL: " + form.getPublishedUrl());
  Logger.log("Response sheet URL: " + spreadsheet.getUrl());
}
