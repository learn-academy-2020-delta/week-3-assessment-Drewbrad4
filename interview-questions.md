# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is object destructuring?

  Your answer: 
    Object Destructuring allows us to assign object keys to variables for use elsewhere. 
  

  Researched answer:
    Allows for the extraction and assignment of multiple properties from objects (and arrays, maps and sets) to variables.


2. What are React lifecycle methods? Provide three examples.

  Your answer: 
    React lifecycle methods are methods that are run automatically during a components journey to the DOM. componentDidMount() and componentWillUnmount().

  Researched answer:
    React Lifecycle methods organize React functionality. The three main phases are mounting (when a component is rendered in the DOM), updating (when something like state is updated), and unmounting (when a component is removed from the DOM). Additionally each phase has its own Render phase and Commit phase. render(), constructor(props), componentDidMount(), componentDidUpdate(), and componentWillUnmount() are all the commonly used lifecycle methods. 


3. What is the difference between a class and an object?

  Your answer: 
    A class is a blueprint for creating a bunch of objects with similiar properties. 

  Researched answer:
    A class doesnt take any memory space when created. An object does. 


4. What is the difference between a HTML div and a span?

  Your answer: 
    A div is a block level element while a span is inline.

  Researched answer:
    A div take is used as a container to hold sections of your page. A span is used primarily to single out portions of text or images for styling.


5. What is React.Fragment (or <>) and why would you want to use it?

  Your answer: 
    React.Fragment, or the empty carrots, can be used in place of a div in the final return of your components render. 

  Researched answer:
    React.Fragment is used because it doesnt add extra nodes to the DOM. Used when adding multiple components through a map, when you don't want a div between every component. 


6. What are three options for creating responsive design?

  Your answer: Using tools like Bootstrap? Not sure, researching!

  Researched answer:
    Three options to improve responsive design are to include flexible grids that can resize to any width, to use media queries to specify styling for specific browsers or device circumstances. or using flexible media that scales with the size of the viewport.



7. What are props in React?

  Your answer: 
    Props are how child components access state objects from a parent component. They are written like an attribute in html, within the call for the function. They are accessed similiarly to this.state, by using this.props.

  Researched answer:
  Props are read-only. Didn't really see anything else.


8. What is `this` in JavaScript?

  Your answer:
    `this` is a reference to the current object the data is located in. 

  Researched answer:
    `this` is a reference to the current functions execution context.


9. STRETCH: What is a ternary operator in JavaScript?

  Your answer: 
    The ternary operator is a shortcut for writting if/else statements with a binary outcome. It looks like this: (conditional ? trueValue : falseValue)

  Researched answer:
    The only operator that takes three operands. Can use any falsy value. Can be used to set the defualt parameters of a function.


10. STRETCH: What is an anonymous function in JavaScript?

  Your answer: 
    An anonymous function is any function that isn't bound to any variable, used to run functions within an onClick.

  Researched answer:
    Often used as the argument of another function. Must be tied to a variable or an action in order to run. 


## Looking Ahead: Terms for Next Week
- Ruby: High-level, object-oriented computing language. Commonly used for scripting and as a back-end language. Well known frameworks include rails and Sinatra.
- Object oriented programming: A programming paradigm based on objects which can contain data and methods. Because objects can communicate with other objects, complex applications can be created.
- RSpec: RSpec is a testing tool for Ruby, created for behavior-driven development.
- Instance variable: refers to `this`, the variables created and initialized by the constructor. 
- Ruby blocks: A way of grouping code to be used as the argument for a method.
- Ruby hashes: A collection of key-value pairs similiar to an array, but that uses a a key to index rather than an integer.
- `getter` and `setter` methods in Ruby: Methods that allow us to access a class’s instance variables from outside the class.
