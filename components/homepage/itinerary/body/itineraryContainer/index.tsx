import { createContext, Dispatch, SetStateAction, useContext, useEffect, useRef, useState } from "react";
import IteneraryList from "./itineraryList";
import { HomepageContext } from "components/homepage";


export type ItineraryListType = {
    title:string,
    description:string,
    url:string,
    location:{
        latitude:number,
        longitude:number
    }
}
export type ItineraryType = {
    title:string,
    description:string,
    url:string,
    status:string,
    lists:ItineraryListType[]
}

const oldList:ItineraryType[]= [
    {
        title:`Gyeongju-si`,
        description:`Gyeongju, historically known as Seorabeol, is a coastal city in the far southeastern corner of North Gyeongsang.`,
        url:"/images/itinerary/gyeongju-si.jpg",
        status:'recommended',
        lists:[
            {
                title:`Namuae`,
                description:`A recently renovated guest house in Gyeongju and within 8.8 km of Gyeongju World`,
                url:"/images/itinerary/namuae.jpg",
                location:{
                    latitude:35.83597794944438,
                    longitude:129.21229026981024
                }
            },
            {
                title:`Doran Doran Guest House`,
                description:`Offering a garden and garden view, Doran Doran Guesthouse is set in Jeonju, 90 metres from Jeonju Sori Culture Centre and 100 metres from Donghak Peasant`,
                url:"/images/itinerary/namuae.jpg",
                location:{
                    latitude:35.836089053686806,
                    longitude: 129.21908043327176
                }
            },
        ]
    },
    
]

const lists = oldList.map((l,i)=>{
    return {...l,
        index:i,
        progress: i/oldList.length * 100
    }
})

type ItineraryContainerContextType = {
    itineraryContainerRef:any,
    lists:ItineraryType[],
}

export const ItineraryContainerContext = createContext({} as ItineraryContainerContextType)
const ItineraryContainer = () => {
    
    const itineraryContainerRef = useRef(null as any)
    const {listType, state, setState, wheelIddle, setWheelIddle} = useContext(HomepageContext)

    
    // Interval hertz
    useEffect(()=>{
        const myInterval = setInterval(()=>{
            // Progress wheel
            state.speed = (state.speed * 0.94)
            state.progress = (state.progress + state.speed) % 100
            if(state.progress < 0){
                state.progress = 100
            }
            setState(prev=>{return {...prev}})

            // Iddle wheel state
            setWheelIddle(prev=>{return prev + 1})
        },12)

        return()=>{
            clearInterval(myInterval)
        }
    },)

    // Detect iddle
    useEffect(()=>{
        if(wheelIddle == 50){
            // Snap
            const sortedLists = lists.sort((a,b)=>{
                return Math.abs(a.progress - state.progress) - Math.abs(b.progress - state.progress)
            })
            state.progress = sortedLists[0].progress
        }
    },[wheelIddle])

   
    return (
        <ItineraryContainerContext.Provider
            value={{
                lists,
                itineraryContainerRef,
                
            }}
        >
            <div
                onWheel={(e)=>{
                    setWheelIddle(0)
                    const mult = 0.5
                    if(e.deltaY > 0){
                        state.speed -= mult
                    }
                    if(e.deltaY < 0){
                        state.speed += mult
                    }
                }}
                ref={itineraryContainerRef}
                style={{
                    width:`90%`,
                    height:`100%`,
                    background:`#05c655`,
                    zIndex:`1`,
                    overflow:`hidden`,
                }}
            >
                {listType === 'recommended'?
                    lists.map((item,index)=>
                        <IteneraryList
                            key={index}
                            index={index}
                            itinerary={item}
                        />
                    )
                :null}
                {listType === 'ongoing'?
                    lists.filter(list=>{return list.status === 'ongoing'}).map((item,index)=>
                        <IteneraryList
                            key={index}
                            index={index}
                            itinerary={item}
                        />
                    )
                :null}
            </div>
        </ItineraryContainerContext.Provider>  
    );
}
 
export default ItineraryContainer;