import styled from '@emotion/styled'

// estilos de componentes, usando sintaxe do emotion. as variaveis são armazenadas eem provedorTema jsx, como uma 'central'

const DivEstilizada = styled.div`
    padding: ${props => props.theme.espacamentos.l};
    background: ${props => props.theme.cores.secundarias.a};
    border: 1px solid;
    border-color: ${props => props.theme.cores.primarias.a};
    border-radius: ${props => props.theme.espacamentos.s};

`
export const Card = ({ children })=>{
    return (
        <DivEstilizada>
            {children}
        </DivEstilizada>
    )
}