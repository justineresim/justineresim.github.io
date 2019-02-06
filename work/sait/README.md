# 192_SAIT
SAIT Website Redesign/Redevelopment

## Table of Contents
1. [Setting up local for the first time](#setting-up-a-local-version-for-the-first-time)
2. [Project Structure](#project-structure)
3. [Style Guide](#style-guide)
4. [Corporate](#corporate])
5. [SAIT Young Originals](#sait-young-originals])

## Setting up a local version for the first time
1. Clone repo to your local
2. Install [Node](https://nodejs.org/en/) and [NPM](https://nodejs.org/en/download/)
3. Install Gulp globally (in terminal): `npm install --global gulp`
4. Navigate to the project folder (in terminal) and install Gulp locally AND all dev dependencies: `npm install --dev`. That will install gulp locally for your project, and create the folder `node_modules/` with all dependencies installed. You never need to run this again (unless another dependency is added), and you don't need to touch `node_modules`.
5. Run `gulp` in terminal to compile yous SASS files from the main project directory. If you are working on Corporate Engagement navigate to `corporate`, if you are working on SAIT Young Originals navigation to `youth`  and run `gulp` from there.

## Project Structure
1. `css` - the file screen.min.css is the minified compiled version of all our sass files (from folder sass). 
2. `css/vendor` - all our vendor css files needed for the site
3. `js` - all vendor js files in the folder js/vendor are complied/minified using Gulp into `js/dest/vendor-min.js` for the site. `js/script.js` is our main JS file, it is minified to `js/dest/scripts.js`
4. resources - folder containing reference material only (can be removed)
5. `styleguide` - Everything in this folder is for creating the [style guide documentation](http://review.sait.git.resolutionim.com/styleguide). This folder does not need to be included in the live site but is useful for developers working on the site. 

## Style Guide
See the [style guide documentation](http://review.sait.git.resolutionim.com/styleguide) for front end developer documentation. The style guide contains global styling, helper classes, UI elements, external resource information, and links to all prototype pages. 

## Corporate
The `corporate` folder contains the new corporate engagement prototype. To remain consistent with the live site these new pages pull CSS and JS files directly from the live site. The HTML for the header and footer have been copied over as well. For the pages that contain the new header and footer a new JS file is required: `corporate/js/scripts.js`. These pages should NOT use the other js file `http://www.sait.ca/assets/prebuilt/js/dest/scripts.js` as there will be conflicts. All new SASS files for Corporate Engagement can be found in `corporate/sass`. These new styles are required in addition to the main CSS file `http://www.sait.ca/assets/prebuilt/css/dest/screen.min.css`.

## SAIT Young Originals
The `/youth` folder contains all code required for the new SAIT Young Originals sites. This site was build completely separate from the other sites to ease developer integration. 
Styling inside `/youth/sass/shared` contains all styling that could be reused by another site. You can change the look by changing the sass variables.
Styling inside `/youth/sass/youth` contains styles that are pretty specific to the Young Originals sites and should probably not be reused. 
Same goes for the JS files.  `/youth/js/scripts.js` contains shared code where as `/youth/js/youth-scripts.js` contains Young Originals specific code.
See the [style guide documentation](http://review.sait.git.resolutionim.com/youth/styleguide) for front end developer documentation. 

