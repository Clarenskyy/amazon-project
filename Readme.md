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

### getting a variable out of a file

1. add `type="module"` attribute
2. export
3. import

### `type="module"` attribute

let's the file get variables out of other files

### how to make the module work

1. go to the html file that contains the import and open it with live server
