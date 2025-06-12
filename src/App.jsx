import Signuppage from "./Pages/Signuppage";
import Loginpage from "./Pages/Loginpage";
import Dashboard from "./Pages/Dashboard";
import Lessonpage from "./Pages/Lessonpage";
import Gradepage from "./Pages/Gradepage";
import Feedbackpage from "./Pages/Feedbackpage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Signuppage />,
    },
    {
      path: "/login",
      element: <Loginpage />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/lesson",
      element: <Lessonpage />,
    },
    {
      path: "/grade",
      element: <Gradepage />,
    },
    {
      path: "/feedback",
      element: <Feedbackpage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
