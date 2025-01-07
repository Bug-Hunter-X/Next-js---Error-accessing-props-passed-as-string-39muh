```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
      {/* This component will cause the error */}      <MyComponent props ={"some value"}/>
    </div>
  );
}

// components/MyComponent.js

export default function MyComponent({props}) {
  //Cause error when props is a string
  console.log(props.someValue);
  return (
    <div>
      <p>This is a child component</p>
    </div>
  );
}
```