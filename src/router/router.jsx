import { createBrowserRouter } from "react-router-dom"
import PaginaInicial from "../paginas/PaginaInicial"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PaginaInicial/>,
        children: [],
    },

    {
        path: "/login",
        element: <h1>login</h1>,
        children:[],
    }
]);
