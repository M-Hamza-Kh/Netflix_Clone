import "./App.css";
import Home from "./Components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([{ path: "/", element: <Home></Home> }]);
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
