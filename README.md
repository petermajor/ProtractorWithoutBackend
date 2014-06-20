# ProtractorWithoutBackend

Using Protractor for UI tests without a backend.

This is the sample application used to demonstrate Protractor UI tests with a mocked out back-end, as described in these post:
http://www.levelupcoder.com/using-protractor-mocks-pt-1/
http://www.levelupcoder.com/using-protractor-mocks-pt-2/

## Prerequisites

Install nodejs

Install grunt client as a global package: `npm install -g grunt-cli`

## Running the sample

Run `npm install` to install dependencies.

This will install protractor and a few grunt tasks - one task control IIS Express and one task to run Protractor.

Then run `grunt` or `npm test` to run the tests.


