import { createContext, Dispatch, SetStateAction, useState } from "react";

import Itinerary from "./itinerary";
import Maps from "./maps";

type StateType = {
    progress:number,
    speed:number,
    touch:{
        startLocation:{
            x:number,
            y:number,
        },
        endLocation:{
            x:number,
            y:number,
        },
        isTouchStart:boolean,
    }
}
type HomepageContextType = {
    listType: 'recommended' | 'ongoing', 
    setListType:Dispatch<SetStateAction<'recommended' | 'ongoing'>>,
    state:StateType, 
    setState:Dispatch<SetStateAction<StateType>>,
    wheelIddle:number, 
    setWheelIddle:Dispatch<SetStateAction<number>>,
    camera:any, 
    setCamera:Dispatch<SetStateAction<any>>
}
export const HomepageContext = createContext({} as HomepageContextType)
const Homepage = () => {
    const [listType, setListType] = useState('recommended' as any)
    const [state, setState] = useState({
        progress:50,
        speed:0,
        touch:{
            startLocation:{
                x:0,
                y:0,
            },
            endLocation:{
                x:0,
                y:0,
            },
            isTouchStart:false,
        }
    })

    const [wheelIddle, setWheelIddle] = useState(0)

    const [camera, setCamera] = useState(null)
    return (  
        <HomepageContext.Provider
            value={{
                listType, setListType,
                state,setState,
                wheelIddle, setWheelIddle,
                camera, setCamera
            }}
        >
            <Itinerary/>
            <Maps/>
        </HomepageContext.Provider>
    );
}
 
export default Homepage;