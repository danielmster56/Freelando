import { ThemeProvider  } from '@emotion/react'

const tema = {
    cores:{
        branco:'#FFF',
        atencao:'#FF0E0E',
        focus:'#B009FF',
        primarias:{
            a:'#5754ED',
            b:'#D93114',
            c:'#168070',
        },
        secundarias:{
            a:'#F8F8FD',
            b:'#FDF8F8',
            c:'#EBFCF9',
        },
        neutras:{
            a:'#373737',
            b:'#E8E8E8',
            c:'#F5F5F5',
            d:'#FFF',
        },
        dark:{
            a:'#110EA0',
            b:'#B61B00',
        }
    },
    espacamentos:{
        xs:'8px',
        s: '16px',
        l: '32px',
    },
    fontFamily: "'Montserrat', sans-serif",
}

export const ProvedorTema = ({children})=>{
    return <ThemeProvider theme={tema}>
            {children}
        </ThemeProvider>
}