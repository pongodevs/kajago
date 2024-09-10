import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import InitScene from "./initScene";
import Player from "./player";
import MapObject from "./mapObject";
import Lighting from "./lighting";
import { createContext } from "react";
import { useControls } from "leva";
import Csm from "./csm";

type GlContextType = {
}
export const GlContext = createContext({} as GlContextType)
const Gl = () => {
    
    
    return (  
        <GlContext.Provider
            value={{}}
        >
            <Canvas
                camera={{
                    far:3000,
                    near:2
                }}
                shadows
            >
                {/* <Csm/> */}
                <OrbitControls/>
                <InitScene/>
                <Player/>
                <MapObject/>
                <Lighting/>

            </Canvas>
        </GlContext.Provider>
    );
}
 
export default Gl;