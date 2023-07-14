import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "../src/pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, // path: '' | index
      { path: "/products", element: <ProductsPage /> },
      { path: "./products/:productId", element: <ProductDetailPage /> }
    ],
  },
]);
function App() {
  return <RouterProvider router={mainRouter} />;
}

export default App;
