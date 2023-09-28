import { createContext, useState } from "react";

const usuarioInicial = {
    perfil: '',
    interesse: '',
    nomeCompleto: '',
    uf: '',
    cidade: '',
    email: '',
    senha: '',
    senhaConfirmada: ''
}

export const useCadastroUsuarioContext = ()=>{
    return useState(CadastroUsiarioContext);
}

export const CadastroUsiarioContext = createContext({
    suario: usuarioInicial,
    setPerfil: ()=> null,
    steInteresse: ()=> null,
    setNomeCompleto: ()=> null,
    setUf: ()=> null,
    setCidade: ()=> null,
    setEmail: ()=> null,
    senha:  ()=> null,
    senhaConfirmada: ()=> null,    
})

export const CadastroUsuarioProvider = ({ children }) =>{
    
    const [usuario, setUsuario] = useState(usuarioInicial)
    
    const setPerfil = (perfil) =>{
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                perfil
            }
        })
    }
    const setInteresse = (interesse) =>{
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                interesse
            }
        })
    }
    const setNomeCompleto = (nomeCompleto) =>{
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                nomeCompleto
            }
        })
    }
    const setUf = (uf) =>{
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                uf
            }
        })
    }
    const setCidade = (cidade) =>{
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                cidade
            }
        })
    }
    const setEmail = (email) =>{
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                email
            }
        })
    }
    const setSenha = (senha) =>{
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                senha
            }
        })
    }
    const setSenhaConfirmada = (senhaConfirmada) =>{
        setUsuario(estadoAnterior => {
            return {
                ...estadoAnterior,
                senhaConfirmada
            }
        })
    }

    const contexto = {
        usuario,
        setPerfil,
        setInteresse,
        setNomeCompleto,
        setUf,
        setCidade,
        setEmail,
        setSenha,
        setSenhaConfirmada,
    }

    return (
        <CadastroUsiarioContext.Provider value ={contexto}>
            {children}
        </CadastroUsiarioContext.Provider>
    )
}