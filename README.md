**1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**

Ans:  `getElementById - takes string as a parameter and looks for a html element with id same as the parameter and returns it.`

`getElementsByClassName - takes a strring parameter and looks for all the html elements with same class name and returns it as HTMLcollections (which is an array like object)`

`querySelector - it uses CSS selector to find html elements, but among all matching elements, querySelector only returns the first element.`

`querySelectorAll - it finds all matching elements using CSS selectors and return them in a Nodelist.`

**2. How do you create and insert a new element into the DOM?**

Ans: `1. Get the parent`

```javascript
const parent = document.getElementById('parent');
```
   `2. Create new element`
```javascript
const new_elem = document.createElement('p');
new_elem.innerText = 'This is new element';
```

`3. add new element to parent`
```javascript
parent.append(new_elem);
```

***3. What is Event Bubbling? And how does it work?**

Ans: 

