import { ColorModeContext } from "../src/Menu/components/ColorMode";

export default function Video() {
    const contexto = React.useContext(ColorModeContext);
    return(
        <div>
            Video!
            {contexto.Video}
        </div>
    )
}