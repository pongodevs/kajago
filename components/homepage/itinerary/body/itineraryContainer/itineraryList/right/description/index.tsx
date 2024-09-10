import { useContext } from "react";
import { ItineraryListContext } from "../..";

const Description = () => {
    const {itinerary} = useContext(ItineraryListContext)
    return (  
        <div
        style={{
            fontWeight:400,
            fontSize:`1.2rem`,
            letterSpacing:`-0.5px`
        }}
        >
            {itinerary.description}
        </div>
    );
}
 
export default Description;