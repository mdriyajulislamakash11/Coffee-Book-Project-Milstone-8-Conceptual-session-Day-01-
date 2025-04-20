import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
    }
]);

export default routes;