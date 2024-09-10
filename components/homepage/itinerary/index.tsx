import { createContext, useRef } from "react";
import Body from "./body";
import Footer from "./footer";
import Header from "./header";

type ItineraryContextType = {
    itineraryMasterContainerRef:any
}
export const ItineraryContext = createContext({} as ItineraryContextType)
const Itinerary = () => {
    const itineraryMasterContainerRef = useRef(null as any)
    return (  
        <ItineraryContext.Provider
            value={{
                itineraryMasterContainerRef
            }}
        >
            <div
                ref={itineraryMasterContainerRef}
                style={{
                    position:`fixed`,
                    width:`100%`,
                    height:`100%`,
                    background:`#05c655`,
                    fontSize:`3rem`,
                    fontFamily:`Rubik`,
                    zIndex:`2`
                }}
            >
                <Header/>
                <Body/>
                <Footer/>
            </div>
        </ItineraryContext.Provider>
    );
}
 
export default Itinerary;