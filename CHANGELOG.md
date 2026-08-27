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

## [0.0.6] - 2026-08-27
### Added
- custom fonts
- sprite.svg, to hold our icons
- sir flower pot logo
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