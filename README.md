# Next.js - Error accessing props passed as string

This repository demonstrates a common error in Next.js applications where accessing props passed as a string instead of an object results in an error.  The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the corrected version.

## Problem

The issue arises when a component receives props as a string instead of an object.  Attempting to access nested properties within this string results in a runtime error because the string doesn't have the expected object structure.

## Solution

The solution involves ensuring props are passed as objects.  This allows for proper access to nested properties, preventing the runtime error.

## How to reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the development server.
5. Observe the error in the console.

## Correction

The corrected code (`bugSolution.js`) demonstrates the correct approach to pass and access props, eliminating the error.
