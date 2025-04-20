import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home"
import Coffees from "../Pages/Coffees"
import Dashboard from "../Pages/Dashboard"
import CoffeesCard from "../Pages/CoffeesCard";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        children: [
            {
                path: "/",
                element: <Home />, 
                loader: () => fetch("../categories.json"),
                children: [
                    {   path: "/",
                        element: <CoffeesCard />,
                        loader: () => fetch("../coffees.json")
                    },
                    {   path: "/category/:category",
                        element: <CoffeesCard />,
                        loader: () => fetch("../coffees.json")
                    },

                ]
            },
            {
                path: "/coffees",
                element: <Coffees /> 
            },
            {
                path: "/dashboard",
                element: <Dashboard /> 
            },

        ]
    }
]);

export default routes;