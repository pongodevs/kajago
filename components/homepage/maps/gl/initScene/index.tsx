import { useFrame, useThree } from "@react-three/fiber";
import { useContext, useEffect } from "react";
import { CSM } from 'three/examples/jsm/csm/CSM'
import * as THREE from 'three'
import { HomepageContext } from "components/homepage";

const InitScene = () => {
    const {setCamera} = useContext(HomepageContext)
    const {camera, scene} = useThree()

    // const csm = new CSM({
    //     fade: true,
    //     far: camera.far,
    //     cascades: 4,
    //     shadowMapSize: 4096,
    //     lightDirection: new THREE.Vector3(-1, -1, 0),
    //     camera: camera,
    //     parent: scene,
    //     lightIntensity: 1,
    // })

    useEffect(()=>{
        setCamera(camera)
    },[])

    useFrame(()=>{
        camera.updateProjectionMatrix()
    })
    return (  
        <>
        </>
    );
}
 
export default InitScene;