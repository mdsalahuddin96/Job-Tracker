# 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
## Ans: 
getElementById(): This method is used for getting single html element by it’s id.  
getElementsByClassName(): This method is used for getting html elements by their class name. It will return a html collection.  
querySelector(): This method is used for getting html element by their css selector like(class, id, dataset, type etc). It return the first matching element.  
querySelectorAll(): This method is used for getting html elements by their css selector like (class, id, dataset, type etc).It return nodelist of all matching element.  

# 2. How do you create and insert a new element into the DOM?
## Ans:
At first I create a new element using document.createElement(‘tagName’) method. Then I use textContent or innerText to set the content of that element and classList or setAttribute to set the style or class. Finally, I select the parent element and add it to the DOM using the append() or appendChild() method. Here is an example:  
const h1=document.createElement('h1');  
h1.textContent="This Heading is Created using JS";  
h1.classList.add('title');  
document.body.appendChild(h1);  

# 3. What is Event Bubbling? And how does it work?
## Ans:
when an event is triggered on a target element it starts from itself and then propagates upward to its parent elements, all the way up to the root (document). This upward movement is called bubbling.
How does it work’s let explain with an example:
```
<div id="parent">
  <button id="child">Click Me</button>
</div>
```  
If we click the button:  
i.	The event first happens on the button (target element).  
ii.	Then it moves up to the div (parent).  
iii.	Then it continues to higher-level elements like body, html, and finally document  

