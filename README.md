##A simple single page application built with angular featuring the most popular beaches of Heraklion.

###Intallation

##### Clone this repo
```
git clone https://github.com/fadamakis/Project-Beaches.git
```
#####  Install dependancies
```
npm install
```
#####  Open /app/index.html in the browser

### Code

Main module declararion and routing happens in `/app/app.js`
Every page has it's own controller and template under `/components` following the folder name following the url conversion.

If you make changes to a javascript file you have to run `gulp scripts` to update the `bundle.js` or you can watch for changes simply by running the command `gulp`.

###Tests

Run simple tests with protactor
```
protractor e2e-tests/protractor.conf.js
```
