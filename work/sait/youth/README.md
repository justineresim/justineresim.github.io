# 192_SAIT
SAIT Young Originals

## Table of Contents
1. [Setting up local for the first time](#setting-up-a-local-version-for-the-first-time)
2. [Project Structure](#project-structure)
2. [Young Originals Home and Summer Camps](#young-originals-home-and-summer-camps)

## Setting up a local version for the first time
1. Clone repo to your local
2. Install [Node](https://nodejs.org/en/) and [NPM](https://nodejs.org/en/download/)
3. Install Gulp globally (in terminal): `npm install --global gulp`
4. Navigate to the project folder in terminal to install Gulp locally AND all dev dependencies: `npm install --dev`. That will install gulp locally for your project, and create the folder `node_modules/` with all dependencies installed. You never need to run this again (unless another dependency is added), and you don't need to touch `node_modules`.

## Project Structure
1. `sass/shared` - contains all component styling, grid system and helper classes that could be reused by another site. Each UI Component is styled in it's own file of the same name and can be found under `sass/shared/components` (ie `sass/shared/components/_accordion.scss`). These components can be easily removed, edited or pulled to another site if needed. You can change the overall look by changing the sass variables (currently set inside `sass/youth/helpers/_variables.scss`).
2. `sass/youth` - contains styles that are specific to the Young Originals sites and should probably not be reused. 
3. `css` - the file screen.min.css is the minified compiled version of all our sass files. 
4. `css/vendor` - all our vendor css files needed for the site
5. `js` - all vendor js files in the folder js/vendor. `js/script.js` is our main JS file, `js/youth-script.js` is youth specific.
6. `styleguide` - Everything in this folder is for creating the [style guide documentation](http://review.sait.git.resolutionim.com/youth/styleguide). This folder does not need to be included in the live site but is useful for developers working on the site. The style guide contains global styling, helper classes, UI elements, external resource information, and links to all prototype pages. 
7. `img` - contains all images to create the prototype. Images inside `img/sample` are placeholder images and are not required for the live site. `img/theme` - contains all theme images and will be required for the live site. 

## Young Originals Home and Summer Camps
For phase two, four new templates were created and integrated into this project: Young Originals Homepage, Summer Camps Homepage, Summer Camp Detail and Camp Favourites.

### New HTML Templates
- youth/sait-young-originals.html
- youth/sait-summer-camps.html
- youth/xtreme-robots.html
- youth/camp-favourites.html
- youth/views/partials/header-young-originals.html
- youth/views/partials/footer-young-originals.html
- youth/views/partials/header-camps.html
- youth/views/partials/footer-camps.html

### New JS
Read inline comments for where changes should be applied. 
- youth/js/camps-scripts.js

### New Image Folders
- youth/img/sample-camps (sample images, not required)
- youth/img/theme-camps (theme images, required for live)

### New SASS Files
For the new files that should be integrated into existing files I reused the files name and added '2'. (ie _cards2.scss should be integrated into _cards.scss)
- youth/sass/shared/components/_cards2.scss 
- youth/sass/shared/components/_tables2.scss
- youth/sass/shared/helpers/_helpers2.scss
- youth/sass/youth/components/_banner2.scss
- youth/sass/youth/components/_footer2.scss
- youth/sass/youth/components/_header2.scss
- youth/sass/youth/components/_sidebar2.scss
- youth/sass/youth/components/_slider2.scss
- youth/sass/youth/layout/_layout2.scss
- youth/sass/youth/pages/_camps-home.scss

### Other Updates
Minor updates that were made to the style guide include formatting and additions of links to the new pages. There has been an HTML update to the responsive tables as well as the corresponding JS. The update was made so that the entire row will trigger the expand and collapse on mobile instead of just the icon link.






