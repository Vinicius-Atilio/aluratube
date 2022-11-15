import React from 'react';
import { ThemeProvider } from 'styled-components';
import { CSSReset } from '../src/CSSReset';
import ColorModeProvider, {ColorModeContext} from '../src/Menu/components/ColorMode';

const theme = {
    light: {
        backgroundBase: "#f9f9f9",
        backgroundLevel1: "#ffffff",
        backgroundLevel2: "#f0f0f0",
        borderBase: "#e5e5e5",
        textColorBase: "#222222",
    },
    dark: {
        backgroundBase: "#181818",
        backgroundLevel1: "#202020",
        backgroundLevel2: "#313131",
        borderBase: "#383838",
        textColorBase: "#FFFFFF",
    }
};

//_app.js -> definicoes globais do nextJS
// ThemeProvider
function MyApp({Component, pageProps}) {
    const contexto = React.useContext(ColorModeContext);
    console.log(contexto)

    return(
        <ColorModeProvider>
            <ThemeProvider theme={theme.dark}>
                <CSSReset />
                <Component {...pageProps}/>
            </ThemeProvider>
        </ColorModeProvider>
    )
}

export default MyApp;