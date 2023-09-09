import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import CommonLayout from "../layout/CommonLayout";
import BussinessTodos from "../pages/BussinessTodos";
import PersonalTodos from "../pages/PersonalTodos";

const router = createBrowserRouter([
    {
        path: "/",
        element: <CommonLayout/>,
        children : [
            {
                index:true,
                element: <LoginPage/>
            },
            {
                path: "bussiness-todos",
                element:<BussinessTodos/>
            },
            {
                path: "personal-todos",
                element: <PersonalTodos/>
            }

        ]
    }
])

export default function AppRouter() {
    return <RouterProvider router={router} />
  }