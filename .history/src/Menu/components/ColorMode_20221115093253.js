import React from "react";

export const ColorModeContext = React.createContext({
    mode: "dark"
});

export default function ColorModeProvider (props) {
    return (
        <ColorModeContext.Provider value={{ mode: "light"}}>
            {props.children}
        </ColorModeContext.Provider>
    );
}