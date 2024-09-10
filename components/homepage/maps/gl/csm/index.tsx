import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import * as THREE from 'three';
import CSM from 'three-csm';

const Csm = () => {
    const {camera, scene} = useThree()
    const csm = new CSM({
        maxFar: camera.far,
        cascades: 4,
        shadowMapSize: 1024,
        lightDirection: new THREE.Vector3(1, -1, 1).normalize(),
        camera: camera,
        parent: scene
    });

    useEffect(()=>{
        
    },[])
    return (  
        <>
        </>
    );
}
 
export default Csm;