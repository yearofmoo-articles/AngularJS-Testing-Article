# AngularJS - Testing Article
This is a helper repository which is designed to be used alongside the blog article on yearofmoo.com.

## Blog Article
Click the link below to view the blog article which explains exactly what and how this application is used.

http://www.yearofmoo.com/2013/01/full-spectrum-testing-with-angularjs-and-karma.html

## Demo
The Application can be demoed via:

http://yearofmoo-articles.github.com/angularjs-testing-article/app/

## Using the application

Install grunt
`npm install -g grunt-cli`

And then be sure to install everything that the repo requires:
`npm install`
`bower install`

### Development Mode

Run the following command to start the server
`grunt server`

Then run this to watch the files and update assets
`grunt`

You can now access the website at
`http://localhost:8000`

### Test

#### Single Run Tests

Start the server to run e2e tests
`grunt server`

You can run individual test suites by running the commands:
`grunt test:unit`
`grunt test:midway`
`grunt test:e2e`

Or everything in order:
`grunt test`


#### Auto watching tests
When watching tests, any save to a spec file will trigger karma to run the tests again
for the specific test suite that is active at the time.

Start the server to run e2e tests
`grunt server`

You can watch only watch one test suite a time.
`grunt autotest:unit`
`grunt autotest:midway`
`grunt autotest:e2e`
