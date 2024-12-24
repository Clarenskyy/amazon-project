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

### Integration Test

- test many units/pieces of codes working together

1. how the page looks
2. how the test behave

### HOOKS

- `beforeEach(() => {})` hook this will run this function before any of the test is done
- you can put all the set up code for your test here for a clean looking code
- here are some more

```bash
beforeEach() //runs code before each tests
afterEach() //runs code after each tests
beforeAll() //runs code before all tests
afterAll() //runs code after all tests
  done() //a function that waits and lets us control when to go to the next step. this is useful for asynchronous code or codes that has backend
```

### jasmine codes

```bash
describe('stringName', () => {}) //this is the test suite, it contains all the test done for a specific thing
  it('stringName', () => {}) //this is a subclass of a test suite it is put inside the describe() function
      spyOn(localStorage, functionToBeMock) //creates a mock array or storage that wont affect your original storage or database
        .and.callFake(() => { return 0 }) //added after spyOn() this returns a value for that fake database
      expect() //this gets the result or value of something
        .toEqual() //compares the value if its the same in expect
        .not.toEqual() //compares the value if its not the same in expect
        .toContain() //looks in the expect if it contain said value

```

### tips for jasmine

- when doing an integration test, check the data if its correct. example is checking the length of an array if it matches if said test is done
- you can make a mock localstorage using

```bash
 spyOn(localStorage, 'methodlikesetItem').and.callFake(() => {
  [{
    what: 'you want to add'
    number: 3
  }]
})
```

- to check if something is in an element we can use `.toContain('whatyouwanttocheck')` this is used after `expect()`
- you can calso check if something is not equal to something by by adding `.not` before `.toEqual`

## OBJECT ORIENTED PROGRAMMING

### difference between PROCEDURAL PROGRAMMING

- PROCEDURAL PROGRAMMING organizes code into seperat function whilst OOP organize code into an object

### why use it?

- OOP tries to represent the real world
- it is easy to recreate something with same to similar function

### naming

- for things that generate object use PascalCasing

### methods

- function inside an object

### `this.`

- gives the object that are contain in the same object, which gives the name of the object itself. assuming the function is in the object `cart` and has a property `cartItems` we wont have to do `cart.cartItems` instead we will use `this.cartItems`.

- it can be used anywhere in the code. like when creating an object

```bash
console.log(this);

const object2 = {
a: 2,
b: this.a
};

function logThis() {
  console.log(this)
}
// all will result in this being undefine as there is no object it can refer to


```

- inside a function, `this` has a special funtion.

```bash
function logThis() {
  console.log(this)
}

logThis();
logThis.call('hello')
// this will equal this to "hello"
// do what you will with this info :>
```

- however arrow function will be different. as this will only get the value it has before the arrow function instead of taking a new one. IT DOES NOT CHANGE THE VALUE OF THIS. this is done to avoid overriding `this`

```bash
this //undefine

const object3 = {
  method: () => {
    console.log(this)
  }
}

object3.method();
//will display undefine
```

### tips

- when reusing code, instead of copy pasting, create a function that generate that oop

## Class

- an object generator, makes it easy to generate an object
- to create a class follow this format

```bash
class Cart {
  cartItems = [];
}
```

notice how its different to object. instead of `:` we use `=` and instead of `,` we use `;`

to generate an instance we must use the syntax `new` then itirate the class:

```bash
const cart = new Cart();
```

### checking an instance

```bash
console.log(businessCart instanceof Cart);
```

### naming

- use PascalCasing for classes

### benefits of classes

- class looks like the obj that we generate
- they have extra features for OOP

#### constructor

- lets us run setup code after creating an object an example of this is in `cart-class.js`

1. method has to be named `constructor`
2. it should not return anything

### Private properties and methods

- private properties/methods are properties/methods that will only be available inside a class and cannot be access anywhere else

- to private a property/method simply put `#` before the name and when itirating it you will also include the `#`. an example of this is in `cart-class.js`

### `array.map(() => {})`

- loops through an array and for each value it runs a function, kinda similar to for each.
- map also creates a new array where it puts what you return to in
- it basically takes a value, runs a function and transform it and putting it in a new array

## INHERITANCE

- lets us resure code between classes

### parent class and child class

in this website there are items that can be categorize, but has different or additional selection like how in clothes there could be a size selection but other products dont, in this case we can make a class thats for clothes but this with this we will be reusing A LOT of code hence why we use inheretance. in this scenario if we look at `product.js` the class `Product` will be the **parent class** as it is where the inheritance will come from, therefor the new class `Clothing` will be called a **child class**

### how to create inheritance

```bash
class Clothing extends Product
```

`extends` basically means it will inherint all the properties and method from the parent class. an example of this is in `product.js`
note: if you dont have any constructor in your child class it will by default use the one in the parent class.

### `super()`

a feature of inheritance that calls the constructor of the parent class, so that you dont have to do it again
an extra feature also calls a specific method from a parent class
`super.functionName()`

### discriminator property

it tells us which class something is to be turned into

### polymorphism

using methods without knowing the class (an alternative to `if else`)

### how to test classes

- its the same as normal testing

### built-in classes

classes provided by the languange

#### `Date()`

create object that represent the current date and time

##### `toLocaleTimeString()`

method in the date class that tells us the current time

## BACKEND

another computer that manages the data of a website

### TERMINOLOGIES

1. Request - sending a message to the backend
2. Response - the backend sending an http message according to the request
3. Request-Response Cycle = 1 request 1 response

### how does the computer send information to another computer?

- through HTTP (HyperText Transfer Protocol)

### `new XMLHttpRequest()`

- a built-in class by js. this creates a new http message that we want to send to the backend (message is also known as request)

#### `.open()`

- sets up the request
- takes two parameter
  1. type of message
  - `'GET'` - get some information from the backend
  - `'POST'` - create something
  - `'PUT'` - update something
  - `'DELETE'` - delete something
  2. Where to send the HTTP message
  - this is done through URL
    #### URL (Uniform Resource Locator)
    - like an address, but for the internet
    - helps us locate another computer on the internet
    #### URL Paths
    - part that comes after the domain name. and we can send a url through this different path and then will give different response depending on the url path

#### `.send()`

- sends the http message accross the internet to a backend

```bash
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://supersimplebackend.dev");
xhr.send();
//the whole code sets up an HTTP message then send it across the internet to the backend provided
```

#### `.response`

- the problem with this is that it takes time so we must do it like this:
- contains the response of the backend in string

```bash
const xhr = new XMLHttpRequest();

xhr.addEventListener("load", () => {
  console.log(xhr.response);
});
//loads wait for xhr to load before it runs other code so that it will go smoothly
xhr.open("GET", "https://supersimplebackend.dev");
xhr.send();
```

### NETWORK

- for backend instead of console you will open Network besides sources and performance.
- this network contains all the HTTP messages that are coming in and out of our computer.
- BUT you need to open network then refresh to see the HTTP messages

#### headers

- tell us types of request and the url we sent it too

#### response

- this contains the response of the backend you requested too

### Status Code

#### `4` or `5`

for codes that starts with `4` like `404` or `400` means that it is our problem
for codes that starts with `5` it indicates that its the backends problem

#### `2`

- means that the response was successfull. this can be seen in the header of network

### Backend API

- application programming interface(API)
- this basically means how we interact with the backend

### Types of data backend responds with backend

-

1. Text

```bash
const xhr = new XMLHttpRequest();

xhr.addEventListener("load", () => {
  console.log(xhr.response);
});

xhr.open("GET", "https://supersimplebackend.dev/hello");
xhr.send();
// the response type will be test or string
```

2. JSON

```bash
const xhr = new XMLHttpRequest();

xhr.addEventListener("load", () => {
  console.log(xhr.response);
});

xhr.open("GET", "https://supersimplebackend.dev/products/first");
xhr.send();
// the response type will be json, which you can JSON.parse() to use it.
```

3. HTML

```bash
const xhr = new XMLHttpRequest();

xhr.addEventListener("load", () => {
  console.log(xhr.response);
});

xhr.open("GET", "https://supersimplebackend.dev/documentation");
xhr.send();
// the response type will be HTML
```

4. image

```bash
const xhr = new XMLHttpRequest();

xhr.addEventListener("load", () => {
  console.log(xhr.response);
});

xhr.open("GET", "https://supersimplebackend.dev/images/apple.jpg");
xhr.send();
// the response type will be an image
```

### Callback

- a function to run in the future, can be a normal function with a name, or an anonymous function
- but this causes too many indents, thats why promises are important

```bash
setTimeout(() => {
  console.log('hello');
}, 3000);
```

## PROMISES

- better way to handle asynchronous code
- it is similar to `done()` function in jasmine testing framework
- lets us wait for some code to finish, before going to the next step

### how to create a promise:

```bash
// built-in class that needs a funtion as a parameter
new Promise(() => {
    console.log("promise");
});
```

#### in that function it also has parameters that are useful

1. resolve

- function thats similar to `done()` function, lets us control when to go to the next

```bash
new Promise((resolve) => {
  loadProducts(() => {
    resolve();
  });
})
```

- we can add a parameter in the resolve, he will then pass this value in the arrow function, which you can use

```bash
new Promise((resolve) => {
  console.log("start promise");
  loadProducts(() => {
    console.log("finish loading");
    resolve('value1');
  });
})
  .then((value) => {
    return new Promise((resolve) => {
      loadCart(() => {
        resolve();
      });
    });
  })
```

### `.then()`

- this is the NEXT STEP. after something is resolve it will run the funtion you gave it to do

```bash
new Promise((resolve) => {
  console.log("start promise");
  loadProducts(() => {
    console.log("finish loading");
    resolve();
  });
}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});

```

if we want to use another resolve inside `.then()` we can return a new `Promise`:

```bash
new Promise((resolve) => {
  console.log("start promise");
  loadProducts(() => {
    console.log("finish loading");
    resolve();
  });
}).then(() => {
  return new Promise((resolve) => {
    loadCart(() => {
        resolve()
    });
  });
});
```

- promises lets us have as many steps as we need, and keep out code flat

### `Promise.all()`

- allows us to run multiple promises at the same time and wait for all of them to finish
- we can give it an array or promises, to run these promises at the same time

```bash
Promise.all([
  new Promise((resolve) => {
    console.log("start promise");
    loadProducts(() => {
      console.log("finish loading");
      resolve();
    });
  }),

  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  }),
]).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
```

- when giving a value to resolve in `Promise.all()`

## `fetch()`

- lets us make a http request to a backend but uses a promise
- by default uses `GET` to send http request

```bash
// using fetch
function loadProductsFetch() {
  fetch("https://supersimplebackend.dev/products");
}
```

```bash
// not using fetch
function loadProducts() {
  xhr.open("GET", "https://supersimplebackend.dev/products");
  xhr.send();
}
```

- fetch uses a promise to get the response instead of a call back
- fetch also saved the response to the parameter of the function inside the `.then` just like in response and we will then use the `.json()` to get the data attach to the response. note that `.json` is an asynchronous code

```bash
function loadProductsFetch() {
  fetch("https://supersimplebackend.dev/products").then((response) => {
    response.json();
  })
}
```

## ASYNC / AWAIT

- shortcut for promises that removes extra code

### ASYNC

- makes a function return a promise

```bash
async function loadPage() {
  console.log("load page");
}

```

- when returning a value in async function it will convert or act like `resolve()` and will be saved on the pparameter on the next step

```bash
(`.then((valueSavedHere) => {

})`)
```

### AWAIT

- lets us wait for a promise to finish, before going to the next line. this is an alternatice for `.then`. so it basically let us write async code like normal code. thats why its so powerful
- we can only use await inside an asynch funtion
- we can also saved a value retun by resolve by putting the whole argument in a variable

## Error Handling

### in XHR

- unexpected errors like no internet and etc

```bash
xhr.addEventListener('error', () => {
  console.log('Unexpected error. Please try again later.')
```

### in promises

- we will use a method `.catch(() => {})` if theres any error in the request it will run the funtion inside the catch method. `catch()` also has a parameter name error, which tells the detail of the error

### in async await

- using `try / catch`. we will put code that could cause an error inside the ` try` and after the try and `catch` this does the samething as the catch in handling error in promises

- but `try / catch` also works in normal code too

```bash
async function loadPage() {
  console.log("load page");
  try {
  await loadProductsFetch();

  const value = await new Promise((resolve) => {
    loadCart(() => {
      resolve('value3');
    });
  });
  } catch (error) {}


  renderOrderSummary();
  renderPaymentSummary();

  return `value2`;
}
```

- note that error handling is done when it is something putside our control

## manually creating an error

### synch error

- `throw` is a feature that will manually create error that skips an entire block and run codes inside catch

```bash
async function loadPage() {
  console.log("load page");
  try {
  throw `error`;
  await loadProductsFetch();

  const value = await new Promise((resolve) => {
    loadCart(() => {
      resolve('value3');
    });
  });
  } catch (error) {}


  renderOrderSummary();
  renderPaymentSummary();

  return `value2`;
}
```

### asynch error

- if we need to create an error in the future. we use `reject()`

```bash
onst value = await new Promise((resolve, reject) => {
    loadCart(() => {
      reject('error')
      resolve('value3');
    });
  });
  } catch (error) {}
```

## sending something in the backend

```bash
document
    .querySelector(".js-place-order")
    .addEventListener("click", async () => {
      const response = await fetch("https://supersimplebackend.dev/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cart: cart,
        }),
      });

      const order = await response.json();

      console.log(order);
    });
```

## `window.location`

- changes the url to another

```bash
window.location.href = "orders.html";
//this will change the url of the site to https://website.com/orders.html
```
