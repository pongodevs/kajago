import { Outlines, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { CSM } from 'three/examples/jsm/csm/CSM';
import * as THREE from 'three'
import { useMemo } from "react";

const MapObject = () => {
    // const {roadColor, buildingColor, grassColor, waterColor, planeColor} = useControls({
    //     roadColor:{value: '#8e9499'},
    //     buildingColor:{value: '#6cc170'},
    //     grassColor:{value: '#9baa66'},
    //     waterColor:{value: '#81cce5'},
    //     planeColor:{value: '#5c6565'},
    // })
    const roadColor = '#8e9499'
    const buildingColor = '#6cc170'
    const grassColor = '#9baa66'
    const waterColor = '#81cce5'
    const planeColor = '#5c6565'

    const road = useGLTF('/glb/road.glb') as any
    const building = useGLTF('/glb/building.glb') as any
    const grass = useGLTF('/glb/grass.glb') as any
    const water = useGLTF('/glb/water.glb') as any
    const player = useGLTF('glb/player.glb') as any

    const {camera, scene} = useThree()
    const csm = useMemo(()=>{
        return new CSM({
            maxFar: camera.far,
            cascades: 8,
            shadowMapSize: 1024,
            lightDirection: new THREE.Vector3(1, -1, 1).normalize(),
            camera: camera,
            parent: scene
        });
    },[])
    

    const roadMaterial = useMemo(()=>{
        const mat = new THREE.MeshPhongMaterial({color:roadColor})
        csm.setupMaterial(mat)
        return mat
    },[])
    const buildingMaterial = useMemo(()=>{
        const mat = new THREE.MeshPhongMaterial({color:buildingColor})
        csm.setupMaterial(mat)
        return mat
    },[])
    const grassMaterial = useMemo(()=>{
        const mat = new THREE.MeshPhongMaterial({color:grassColor})
        csm.setupMaterial(mat)
        return mat
    },[])
    const waterMaterial = useMemo(()=>{
        const mat = new THREE.MeshPhongMaterial({color:waterColor})
        csm.setupMaterial(mat)
        return mat
    },[])
    const planeMaterial = useMemo(()=>{
        const mat = new THREE.MeshPhongMaterial({color:planeColor})
        csm.setupMaterial(mat)
        return mat
    },[])
    const playerMaterial = useMemo(()=>{
        const mat = new THREE.MeshPhongMaterial({color:`white`})
        csm.setupMaterial(mat)
        return mat
    },[])


    useFrame(()=>{
        csm.update()   
    })
    return (  
        <>
            {/* Plane */}
            <mesh
                rotation={[-Math.PI/2,0,0]}
                receiveShadow
                position={[0,-0.5,0]}
                material={planeMaterial}
            >
                <planeGeometry
                    args={[10000,10000]}
                />
            </mesh>
            {/* Road */}
            <mesh
                geometry={road.scene.children[0].geometry}
                material={roadMaterial}
                receiveShadow
                castShadow
            >
              
            </mesh>
            {/* Building */}
            <mesh
                geometry={building.scene.children[0].geometry}
                material={buildingMaterial}
                receiveShadow
                castShadow
            >
            
            </mesh>
            {/* Grass */}
            <mesh
                geometry={grass.scene.children[0].geometry}
                material={grassMaterial}
                receiveShadow
                castShadow
            >

            </mesh>
            {/* Water */}
            <mesh
                geometry={water.scene.children[0].geometry}
                material={waterMaterial}
                receiveShadow
                castShadow
            >
            </mesh>
            {/* Player */}
            <mesh
                // scale={[0.1,0.1,0.1]}
                geometry={player.scene.children[0].geometry}
                castShadow
                receiveShadow
                material={playerMaterial}
            >
                <Outlines angle={90} thickness={5} color="black" />
            </mesh>
        </>
    );
}
 
export default MapObject;