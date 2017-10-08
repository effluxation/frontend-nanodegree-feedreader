Feed Reader Testing
===============================

## Instructions for launching tests

1. Clone this repo or download and unzip so that you have its directory on your computer at the location of your choice.

2. Open index.html in your browser.

3. Jasmine tests will run automatically. Scroll to the bottom to see the results.

## Summary of tests

1. RSS Feeds
- are defined
- have URL defined and not empty
- have name defined and not empty
2. The menu
- element is hidden by default
- changes visibility when the menu icon is clicked
3. Initial Entries
- consists of at least 1 .entry element in .feed container when loadFeed called
4. New Feed Selection
- causes content to change