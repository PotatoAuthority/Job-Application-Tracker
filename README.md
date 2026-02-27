**1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**

Ans:  `getElementById - takes string as a parameter and looks for a html element with id same as the parameter and returns it.`

`getElementsByClassName - takes a string parameter and looks for all the html elements with same class name and returns it as HTMLcollections (which is an array like object)`

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

**3. What is Event Bubbling? And how does it work?**

Ans: `In javascript, event can propagate in two ways: from child to parent (bubbling) and from parent to child (capturing). The propagation of event from child to parent and then all the way upto document is called Event bubbling. It is the default propagation mode in javascript.`

`When an event is called, it first works in that element, and then it bubbles up to parent and then parent's parent and all the way upto root`

**4. What is Event Delegation in JavaScript? Why is it useful?**

Ans: `Event delegation in javascript is a way to add a single event listener to a parent element instead of adding event listener manually to each of the child elements of parent.`

`Event delegation is useful because we only need to add event listener to parent element. It dynamically listens to child element's event and bubble up to parent. It works even when a new child element is added, so it is very efficient.`

**5. What is the difference between preventDefault() and stopPropagation() methods?**

Ans: `preventDefault() is used to stop a default behaviour of browser for an event. For example: we can stop anchor tag from redirecting to href location when it is clicked using preventDefault().`

`On the otherhand, stopPropagation() is used to stop an event from bubbling up. Calling stopPropagation() on an event will stop it from reaching it's parent.`