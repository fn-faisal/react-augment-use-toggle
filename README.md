# Use Toggle Hook
## _A hook to toggle things in react_

## Introduction

Different react components use a simple switch functionality and saving that in state and managing toggle functions can be cumbersome. This hooks simplifies the process of toggling components on/off. From Passwords hide/show functionality to modal hide/show functionality.

## Using React State to toggle password hide/show.

```js
export function App() {
  const [ passwordShown, setPasswordShown ] = useState(false);
  
  return (
    <>
      <input type={ passwordShown ? 'text' : 'password' } />
      <button 
        onClick={() => setPasswordShown(!passwordShown)}>Show/Hide Pass</button>
    </>
  );
}
```

## Using toggle hook to toggle password hide/show.

```js
export function App() {
  const toggle = useToggle();
  
  return (
    <>
      <input type={ toggle.isOpen() ? 'text' : 'password' } />
      <button 
        onClick={toggle}>Show/Hide Pass</button>
    </>
  );
}
```

the toggle hook simplifies the toggle functionality and returns a function. The ``toString`` of the function returns a ``string`` representation of the toggle boolean value. There's also a ``isOpen`` function on the toggle object itself which can be used to determine if the toggle value is ``true`` or ``false``

