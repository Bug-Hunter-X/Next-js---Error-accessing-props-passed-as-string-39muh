```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
      {/* Corrected way to pass props */}      <MyComponent props={{ someValue: "some value" }}/>
    </div>
  );
}

// components/MyComponent.js

export default function MyComponent({ props }) {
  // Accessing props correctly
  console.log(props.someValue);
  return (
    <div>
      <p>This is MyComponent</p>
    </div>
  );
}
```