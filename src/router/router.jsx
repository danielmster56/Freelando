import { createBrowserRouter } from "react-router-dom"

import Interesses from "../paginas/cadastro/Interesses";
import LayoutBaseCadastro from "../paginas/cadastro/LayoutBaseCadastro";
import LayoutBase from "../paginas/LayoutBase";
import DadosPessoais from "../paginas/cadastro/DadosPessoais";
import SelecaoCliente from "../paginas/cadastro/SelecaoCliente";
import Concluido from "../paginas/cadastro/Concluido";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutBase/>,
        children: [
            {
                path: 'cadastro',                
                element: <LayoutBaseCadastro/>,
                children:[
                    {
                        path:'',
                        element: <SelecaoCliente/>,
                    },
                    {
                        path: 'interesses',
                        element: <Interesses/>
                    },
                    {
                        path: 'dados-pessoais',
                        element: <DadosPessoais/>
                    },
                    {
                        path: 'concluido',
                        element: <Concluido />
                    }
                ]
            }
        ],
    },

    {
        path: "/login",
        element: <h1>login</h1>,
        children:[],
    }
]);
