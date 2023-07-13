import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../src/pages/Home';
const mainRouter = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  {}
]);
function App() {
  return <RouterProvider router={mainRouter}/>;
}

export default App;
