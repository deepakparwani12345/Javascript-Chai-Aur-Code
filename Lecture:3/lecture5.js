"use strict"; //this inform the js engine(like V8) that we will be using the new syntax and methods in the below js code . for eg: classes, arrow fxn,etc. //BTW it is bydefault considered by js engine that we will be usin the new methods and syntax;
              //using semicolon(;) after the "use strict" is imp. I donot know why but it is.
              //actually the thing is we have to increase the readability of code for other programmers and make it future-proof i.e why we use semicolons(;) and similar things.

              //two documentations can be referred: mdn docs and tc93.es
              //among them tc93.es is the standard documentation which is owned by ECMAscript(this sets the standards for the way of writing(how the input will be taken or output will be produced))

//alert(3 + 3); //ReferenceError: alert is not defined // this will not work in Node // but we can directly use alert() in the console section of browser or by using js file along with the html file

// datatypes in js

//we not define datatype name in js, it is taken by its own by js

//primitive datatypes:
//number - 123
//BigInt - store numbers greater than capacity of datatype "number"
//string - "deepak" // single quotes can be used but using double quotes is better for the programmers
//boolean - true/false
//null - it is of type 'object'.Usecase: It is returned by the weather API when it is not able to fetch temperature because sending '0' instead may lead to confusion of comparing it with temperature=0;
//undefined - it is of type "undefined". It come into picture when we donot assign value to a variable after declaring it;
//symbol - these are special type of datatype which are helpful in defining the uniqueness of components. Will see there use in React while making or defining any component unique from others. It is also used in Figma for the making unique components.

//object - this is the datatype other than the primitive datatype

console.log(typeof 123); //number
console.log(typeof(1234)) //number
console.log(typeof("deepak"));//string
console.log(typeof(true));//boolean
console.log(typeof(null));//object /*imp interview question*/
console.log(typeof(undefined));//undefined

