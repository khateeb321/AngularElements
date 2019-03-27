In this demo, we're are creating **Web Components** using **Angular Elements**.

## Web Components
Web components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps. Custom components and widgets build on the Web Component standards, will work across modern browsers, and can be used with any JavaScript library or framework that works with HTML.

Web components are based on existing web standards. Features to support web components are currently being added to the HTML and DOM specs, letting web developers easily extend HTML with new elements with encapsulated styling and custom behavior.

*via: [https://www.webcomponents.org/introduction](https://www.webcomponents.org/introduction)*

## Angular Elements
_Angular elements_ are Angular components packaged as _custom elements_ *(also known as Web Components)*, a web standard for defining new HTML elements in a framework-agnostic way.

## About This Project

Using these amazing technologies we made this demo project. This simple project has a web component which makes an API call and passes the response which could be used somewhere outside the web component or Angular Project in this case.
It will be in a form of JS file or Library, which will be produced by Angular Element (*element.js in this case, you can name it whatever you want*). It could be used anywhere, Angular project, React project, PHP project or simple HTML and Vanilla JS, you name it.

## Technologies

 - **Node Package Manager**
 - **Web Components** *(to use in other projects)*
 - **Angular Elements** *(to make Web Components)*
 - **gzip** *(to Zip library files - works with Linux)*
 - **cat** *(to concatenate js files to make library bundle and export - works with Linux)*
 - **jscat** *(to concatenate js files to make library bundle and export - works with Windows)*

## Run This Project

 1. Clone this project
 2. Run `npm install`
 3. Run `npm run build && npm run package` or `npm run build && npm run package:win` if you're on Windows Machine. This will generate the library file.
 4. Run `npm run serve`

**index.html** in parent folder is an example / demonstration of using generated library.