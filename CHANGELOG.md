# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog (site link)](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning (site link)](http://semver.org/spec/v2.0.0.html).

[Visit the Live Site](https://bloomfieldrenfaire.github.io/BRF-Website/) - A website for the Bloomfield Iowa Renaissance Faire.


## [Unreleased]
### Added
- For new features.

### Changed
- For changes in existing functionality.

### Deprecated
- For once-stable features removed in upcoming releases.

### Fixed
- For any bug fixes.

### Removed
- For deprecated features removed in this release.

### Security
- To invite users to upgrade in case of vulnerabilities.

## [0.1.1] - 2026-10-08
### Added
- knightings event image
- website title to navbar on mobile
- Open Graph tags for sharing on social media (I'll have to test on Discord)

### Changed
- link description text now gets hidden on mobile
- contact page icons are now larger (except icon-arrow-alt-circle-up, to top botton, since we're using it for navigation)
- commented out W3 CSS links on home page

### Removed
- wings from events page
- unused extra animated flag images

## [0.1.0] - 2026-10-01
### Added
- real event example images (a few to start with anyways.)
- css rule for id links to adjust for menu height
- brf- prefixes to all custom css (also made sure to rename those in the javascript files.)

### Changed
- non-external links from opening in a new tab to opening within the current tab
- renamed flags folder to animated. Moved all animated images files into it
- made events images, larger
- how some items are displayed on mobile
- organized the brf-css file. Added section labels with table of contents at the top

### Fixed
- the call-to-action button link area not being clickable to the border edge

### Removed
- placeholder event images

## [0.0.9] - 2026-09-10
### Added
- animated question marks images to FAQ page hero section
- animated mailbox image to contact page hero section
- some placeholder images for the events pages based on booth poster designs

### Fixed
- using proper w3 text colors for menu links
- renamed magik font filename

### Removed
- font testing folder
- Medici Text.tff (Had been added for testing and wasn't being used)

## [0.0.8] - 2026-09-03
### Added
- flag animated webp's (modern animated gifs with better compression)
- events-banner.webp
- Tent-2027-Flag.webp (This is our animated call-to-action image)
- cta-border.webp (image that borders our call-to-action button)

### Changed
- home page call-to-action area

### Removed
- flag animated gifs
- home-banner.webp

## [0.0.7] - 2026-08-28
### Added
- flag animated gifs

### Changed
- color scheme
- recolored Sir Flowerpot to match new color scheme

## [0.0.6] - 2026-08-27
### Added
- custom fonts
- sprite.svg, to hold our icons
- sir flowerpot logo
- about section to home page

### Changed
- color scheme
- general style changes across all pages
- commented out image slideshows on events page (they're there if we every need them)
- fipped favicon horizontal

### Fixed
- slideshow images of different heights causing the previous/next buttons to "jump". Will require more work when I get to tablet media queries.

### Removed
- old-brf-css.css
- embedded svg icons from every single html page. (the file size savings is amazing!)

## [0.0.5] - 2026-08-20
### Added
- bpl logo
- links to Bloomfield Public Library Website and Facebook
- google map embed to Courthouse and Bloomfield Library
- slideshow examples
- brf 2026 image folder
- favicon.ico (may need to revisit)

### Changed
- how classes for icon backgrounds are named. Now are called, "brf-bg-white" and "brf-bg-black"
- brf-js.js by breaking it into smaller javacript files: brf-general for most pages, brf-countdown for the countdown on the home page, brf-slideshow for image slideshow

### Fixed
- sizing on envelope icon

## [0.0.4] - 2026-08-06
### Added
- w3.css
- accordions to javascript
- home-banner.webp

### Changed
- renamed main.css to brf-css.css
- renamed customJS.js to brf-css.js
- mobile menu javascript
- items to work with w3.css examples

### Removed
- FB-Profile_v0_3.png

## [0.0.3] - 2026-07-29
### Added
- events.html
- countdown timer to homepage
- font previewer.html (for narrowing down fonts to use)
- parchment color as main background. We'll see if we like it... (might need some rgb/hex slider tuning)
- background classes to some icons. (should have the prefix "bg-", should I change this to, "icon-bg-"?)

### Changed
- Formatting of some sections
- Changed background color from black to our "blue"

## [0.0.2] - 2026-07-23
### Added
- contact.html
- faq.html
- svg icons that are inline html. (these could be external, but don't render properly in my web browser without a server)

### Removed
- icon font
- rose-jerky.css

## [0.0.1] - 2026-07-08
### Added
- changelog.md
- index.html
- customJS.js
- images folder