/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have URL defined and not empty', function () {
            for (const feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url).toMatch('http://');
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have name defined and not empty', function () {
            for (const feed of allFeeds) {
                expect(feed.name).toBeDefined();
                // Test below will also make sure name not type null since null return 'object'
                expect(typeof feed.name).toBe('string');
                // Test if name is not empty string.
                expect(feed.name).not.toBe('');
            }
        });
    });

    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function () {
        // Fuction that returns state of menu
        function menuHidden() {
            return $('body').hasClass('menu-hidden');
        }

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('element is hidden by default', function () {
            expect(menuHidden()).toBe(true);
        });

        /* TODO: Write a test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */
        it('changes visibility when the menu icon is clicked', function () {
            // First click to open menu
            $('.menu-icon-link').trigger('click');
            expect(menuHidden()).toBe(false);

            // Second click to hide menu
            $('.menu-icon-link').trigger('click');
            expect(menuHidden()).toBe(true);

        });
    });

    // /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function (done) {
            //Run loadfeed with callback
            loadFeed(0, function () {
                done();
            })
        });

        it('consists of at least 1 .entry element in .feed container when loadFeed called', function (done) {
            let feedEntries = $('.feed').find('.entry').length;
            expect(feedEntries).toBeGreaterThan(0);
            done();
        })

    });
    // /* TODO: Write a new test suite named "New Feed Selection" */
    // describe('New Feed Selection', function () {
    //     /* TODO: Write a test that ensures when a new feed is loaded
    //      * by the loadFeed function that the content actually changes.
    //      * Remember, loadFeed() is asynchronous.
    //      */
    //     it('causes content to change', function () {

    //     })
    // });
}());
