# React Router Dom v6: useParams Hook Error in Nested Routes

This repository demonstrates a common error encountered when using the `useParams` hook in nested routes within React Router Dom v6. The problem arises when a child route attempts to access parameters from a parent route before those parameters have been resolved by the router.

The `NestedRoutesBug.jsx` file shows the buggy implementation. The solution is provided in `NestedRoutesSolution.jsx`, demonstrating how to properly handle asynchronous parameter resolution.

## How to reproduce the bug

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Observe the error in the console and the unexpected behavior in the UI. 

## How to fix the bug

Refer to `NestedRoutesSolution.jsx` for a working solution which uses the `useLocation` hook to get the parent route's parameters asynchronously.