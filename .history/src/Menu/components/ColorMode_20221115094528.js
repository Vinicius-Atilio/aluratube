import React from "react";

export const ColorModeContext = React.createContext({
    mode: ""
    setMode: () => {alert("Voce precisa me configurar primeiro!")}
});

export default function ColorModeProvider (props) {
    return (
        // Entender pq ta sendo ignorado ?
        <ColorModeContext.Provider value={{ mode: props.initialMode}}>
            {props.children}
        </ColorModeContext.Provider>
    );
}