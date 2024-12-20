## Javascript

### SAVE DATA

- data is information in thi case the rating, price, img
- initially the information in the products are in html, so we will saved it in html to be able to utilize this data

### GENERATE HTML

- using data provided we will then generate HTML for those data

### MAKE THE WEBSITE INTERACTIVE

- we can also connect html element to js to make it interactive and do specific function once an event happened

## `data-` HTML attribute

- HTML also has data attribute, this attribute can be added to different HTML syntaxes it was used in the file `amazon.js`
- in data attribute it mas alwas start with `data-` then the user will then add a name in _kebab-case_ example: `data-product-id="valueOfData"`
- to call the data in js we must use DOM by getting the element it was attached to lile in the projects case in `amazon.js` it was `button.dataset.productId`. as observed it went from _kebab-case_ to _camelCase_

## MODULES

### why we need modules?

- modulos allows us to avoid naming conflicts

### what is a modules

- contains a variable inside a file, which avoids naming conflict outside the file

### how to create a module

- create a file and dont load the file with `<script>`
- name this file with anything you like and type the variable you want the file to contain. then export that variable. an example is in `cart.js`
- with the file with that has the`type="module"` attribute to be able to use the modules and access it. import that varible with the format `import fileName from './file/path';`.
- NOTE: import has another syntax `import * as` which imports everything from a file and can be accessed through object or function

### getting a variable out of a file

1. add `type="module"` attribute
2. export
3. import

### `type="module"` attribute

let's the file get variables out of other files

### how to make the module work

1. go to the html file that contains the import and open it with live server

### Normalizing the data

- using the id we can get or access other properties of an object in an array by using `findIndex` on an array. an example of this is in `checkout.js` or use a `forEach` loop

### saving the file locally using localStorage.setitem

- an example is in `cart.js`
- you can access localstorage syntaxes or code using console in the inspect of your website just search for local storage syntaxes
  some are `localStorage.clear();`, and `localStorage.remove()`

## External Libraries

- its a code outside of a project
- it is used to access js code from the internet through script tag an example of this is in `checkout.html`

### WHY WE USE EXTERNAL LIBRARIES

- let us share code
- save time
- avoid duplicating work

### how to find external libraries

- through google
- through ai

### minification

- process of compressing js code

### putting external libraries in js modules

- we will use `ESM` or `EcmaScript Modules` which is also just Javascript modules
- when loading that we will not use script tag anymore rather go to the js file you will use it on and `import {hello} from 'url'` an example of this is in checkout.js

### default export/import

- `export default`
- `import nameofexportfunc from`

## MVC

makes sure the page always matches the data.
splits the code into 3

1. Model

- all the code that saves and manages data which can be seen in the `data` folder

2. View

- takes data and generate HTML. an example of this is in `checkout.js` line `16` and `17`

3. Controller

- runs the code when we interact with the page an example is in `checkout.js` line `131` below

## TESTING CODE

1. trying out the code by opening the website
2. Manual Testing
3. Automated Testing

- use code to test code, examples are in `test` folder

### 2 types of test cases

1. basic test case

- test code if it works

2. edge cases

- test with values that are tricky

## JASMINE

- testing frameworks

### Jasmine testing framework

https://github.com/jasmine/jasmine/releases/tag/v5.1.1

### Jasmine Documentation

https://jasmine.github.io/api/5.1/global

### how to run test (more info in jas doc)

1. open SpecRunner.html (spec means test) in the project it is renamed to test.html
2. write test using jasmine some examples:
   `describe('name of the test suite', () => {})`
   `it('what the test is doing', () => {})`
   to see more, go in the jasmine documentation
   the example of the code being used is in MoneyTest.js under the jasmine-test
