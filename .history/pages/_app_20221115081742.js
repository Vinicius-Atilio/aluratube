import { CSSReset } from '../src/components/CSSReset';

function MyApp({Component, pageProps}) {
    console.log("Ola");
    return(
        <>
            <CSSReset />
            <Component {...pageProps}/>
        </>
    )
}

export default MyApp;