import { Global } from "@emotion/react"

// sessão de estilos globais. que serao usados para todas as paginas
const estilos = tema =>{
    return{
        html:{
            fontFamily: tema.fontFamily
        },
        body:{
            margin: 0,
        }
    }
};


export const Estilos = () =>{
    return (
    <Global styles={estilos}/>
    )
}