import styled from "@emotion/styled"

const LabelEstilizada = styled.label`
    display: block;
    width: 100%;
    box-sizing: border-box;
`

const InputEstilizado = styled.input`
    display: block;
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    margin-top: ${props => props.theme.espacamentos.xs};
    background: ${props => props.theme.cores.branco};
    border: 1px solid;
    border-color: ${props => props.theme.cores.neutras.a};
    border-radius: ${props => props.theme.espacamentos.s};
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
`


export const CampoTexto = ({titulo})=>{
    return(
    <LabelEstilizada>
        {titulo}
        <InputEstilizado />
    </LabelEstilizada>

    )
}