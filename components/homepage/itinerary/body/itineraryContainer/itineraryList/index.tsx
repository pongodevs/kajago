import { createContext, useContext, useEffect, useState } from "react";
import Left from "./left";
import Right from "./right";
import { ItineraryContainerContext, ItineraryType } from "..";
import { HomepageContext } from "components/homepage";
import { ItineraryContext } from "components/homepage/itinerary";
import gsap from "gsap";
import * as THREE from 'three';



type ItineraryListContextType = {
    itinerary:ItineraryType
}
export const ItineraryListContext = createContext({} as ItineraryListContextType)
const ItineraryList = ({itinerary, index}:{itinerary:ItineraryType, index:number}) => {
    const {itineraryMasterContainerRef} = useContext(ItineraryContext)
    const {itineraryContainerRef,  lists} = useContext(ItineraryContainerContext)
    const {state, camera} = useContext(HomepageContext)
    const listProgress = index * 100 / lists.length
    
    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)

    useEffect(()=>{
        if(itineraryContainerRef.current){
            setHeight(itineraryContainerRef.current.getBoundingClientRect().height)
            setWidth(itineraryContainerRef.current.getBoundingClientRect().width)
        }
    },[])
    

    const threshold = 30
    const listProgressThreshold = 70
    const getHeight = ()=>{
        if(state.progress < threshold && listProgress > listProgressThreshold){ //Bottom
            const deltaPercentage = (100 + (state.progress - listProgress)) / 100
            return height/2 + (deltaPercentage * height)
        }
        else if(state.progress > (100 - threshold) && listProgress < (100 - listProgressThreshold)){ // Top
            const deltaPercentage = (100 - (state.progress - listProgress)) / 100
            return height/2 - (deltaPercentage * height)
        }
        else{
            const deltaPercentage = (state.progress - listProgress) / 100
            return height/2 + (deltaPercentage * height)
        }
    }

    const getZIndex = ()=>{
        if(state.progress < threshold && listProgress > listProgressThreshold){ // Bottom
            const deltaPercentage = Math.abs(state.progress - listProgress)
            const finalIndex = Math.floor(lists.length + (deltaPercentage/100 * lists.length))
            return finalIndex
        }
        else if(state.progress > (100 - threshold) && listProgress < (100 - listProgressThreshold)){ // Top
            const deltaPercentage = Math.abs(state.progress - listProgress)
            const finalIndex = Math.floor(lists.length + (deltaPercentage/100 * lists.length))
            return finalIndex
        }
        else{
            const deltaPercentage = Math.abs(state.progress - listProgress)
            const finalIndex = Math.floor(lists.length - (deltaPercentage/100 * lists.length))
            return finalIndex + 100000
        }
    }

    const getWidth = ()=>{
        if(state.progress < threshold && listProgress > listProgressThreshold){
            const deltaPercentage = (100 + (state.progress - listProgress)) 
            return `calc(75% - (${deltaPercentage} * 0.2%))`
        }
        else if(state.progress > (100 - threshold) && listProgress < (100 - listProgressThreshold)){ // Top
            const deltaPercentage = (100 - (state.progress - listProgress)) 
            return `calc(75% - (${deltaPercentage} * 0.2%))`
        }
        else{
            const deltaPercentage = Math.abs(state.progress - listProgress)
            return `calc(75% - (${deltaPercentage} * 0.2%))`
        }
    }


    return (  
        <ItineraryListContext.Provider
            value={{
                itinerary
            }}
        >
            <div
                onClick={()=>{
                    console.log('asd')
                    // Close the master container
                    itineraryMasterContainerRef.current.style.transition = `transform 0.5s ease-out`
                    itineraryMasterContainerRef.current.style.transform = `translateY(-100%)`

                    // Camera Animation
                    
                    // const camDir = camera.getWorldDirection(new THREE.Vector3())
                    camera.position.x = 0
                    camera.position.y = 90
                    camera.position.z = 400
                    gsap.to(camera.position,{
                        x:0,
                        y:1600,
                        z:0,
                        duration:3,
                        onStart:()=>{
                            camera.position.x = -180
                            camera.position.y = 90
                            camera.position.z = 300
                        },
                        ease:"power2.in"
                    })
                }}
                style={{
                    width:getWidth(),
                    height:`40rem`,
                    background:`#ececec`,
                    border:`0.5px solid black`,
                    borderRadius:`8px`,
                    display:`flex`,
                    overflow:`hidden`,
                    justifyContent:`center`,
                    alignItems:`center`,
                    padding:`1rem`,
                    boxShadow:`-4px 4px 4px rgba(0,0,0,0.5)`,
                    transform:`translate(-50%,-50%)`,
                    position:`absolute`,
                    top:getHeight(),
                    left:width/2,
                    zIndex:getZIndex(),
                }}
            >
                <div
                    style={{
                        display:`flex`,
                        flexDirection:`column`,
                        justifyContent:`center`,
                        alignItems:`center`,
                        gap:`1.2rem`
                    }}
                >
                    <Left/>
                    <Right/>
                </div>
            </div>
        </ItineraryListContext.Provider>
    );
}
 
export default ItineraryList;