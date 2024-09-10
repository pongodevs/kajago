import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO, SSAO } from "@react-three/postprocessing";
import { useControls } from "leva";
import { useContext } from "react";
import { GlContext } from "..";
import { MapsContext } from "../..";
import { useThree } from "@react-three/fiber";
import * as THREE from 'three'
const Lighting = () => {
    const {camera} = useThree()
    const {fogColor} = useContext(MapsContext)
    const cameraDistance = new THREE.Vector3(0,0,0).distanceTo(camera.position)
    const density = Math.max(0,0.001 - ( (cameraDistance / 850) * 0.001))
    return (  
        <>
            <fogExp2 attach="fog" color={fogColor} density={density} />
            <ambientLight
                intensity={1}
            />
        </>
    );
}
 
export default Lighting;