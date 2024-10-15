# LinkedIn Profile Scraper

**Description:**
This Chrome extension scrapes LinkedIn profiles and posts the extracted data to a Node.js-Express-Sequelize API.

**Features:**
- Automatically opens LinkedIn profile links one by one.
- Extracts profile data such as name, URL, about,  location, follower count, and connection count.
- Posts extracted data to a Node.js-Express-Sequelize API.

**Installation:**
1. Clone this repository to your local machine.
2. Load the extension in Chrome by going to `chrome://extensions/` and enabling "Developer mode". Click "Load unpacked" and select the extension directory.

  *for backend*
  1. after cloning run npm -i
  2. node server.js

**Usage:**
1. Enter a list of LinkedIn profile links (separated by commas) in the extension's popup.
2. Click the "Scrape Profiles" button.
3. The extension will automatically open each profile link in a new tab and extract the data.
4. The extracted data will be sent to the API.

**Requirements:**
- Node.js and npm (or yarn) installed
- A running Node.js-Express-Sequelize server
