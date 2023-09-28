import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Home from './page/Home/Home';
import SignIn from './page/SignIn/SignIn';
import SignUp from './page/SignUp/SignUp';
import Account from './page/Account/Account';
import { AuthContextProvider } from "./context/authContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/account",
      element: <Account />,
    },
  ]);

  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  )
}

export default App
