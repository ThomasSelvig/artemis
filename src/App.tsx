import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./pages/Home";
import { Art } from "./pages/Art";
import { Decor } from "./pages/Decor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/art",
    element: <Art />,
  },
  {
    path: "/decor",
    element: <Decor />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
