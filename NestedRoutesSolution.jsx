The solution involves using the `useLocation` hook to access the parent route's parameters. This ensures that the parameters are available before attempting to use them.  The `useLocation` hook provides the full location object, which includes the `pathname` and `search` properties containing the route parameters.

```javascript
import { useLocation, useParams } from 'react-router-dom';

function ChildRoute() {
  const location = useLocation();
  const { childParam } = useParams();
  // Extract parent parameters from location.pathname
  const parentParam = location.pathname.split('/')[2]; // Adjust path split as needed

  return (
    <div>
      <h1>Child Route</h1>
      <p>Child Param: {childParam}</p>
      <p>Parent Param (from location): {parentParam}</p>
    </div>
  );
}

export default ChildRoute;
```