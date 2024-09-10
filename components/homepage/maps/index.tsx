import { createContext } from "react";
import Gl from "./gl";
import Ui from "./ui";
import { useControls } from "leva";

type MapsContextType = {
    fogColor:any
}
export const MapsContext = createContext({} as MapsContextType)
const Maps = () => {
    // const {fogColor} = useControls({fogColor:{value:'#c6dec3'}})
    const fogColor = '#c6dec3'
    return (  
        <MapsContext.Provider
            value={{
                fogColor
            }}
        >
            <div
                style={{
                    position:`fixed`,
                    width:`100%`,
                    height:`100%`,
                    background:fogColor,
                    zIndex:`1`
                }}
            >
                <Gl/>
                <Ui/>
            </div>
        </MapsContext.Provider>
    );
}
 
export default Maps;