import { useContext } from "react";
import { ItineraryContainerContext } from "../..";
import { ItineraryListContext } from "..";

const Left = () => {
    const {itinerary} = useContext(ItineraryListContext)
    return (  
        <div>
            <img
                src={itinerary.url}
                style={{
                    height:`30rem`,
                    aspectRatio:`1/1`,
                    objectFit:`cover`,
                    borderRadius:`4px`
                }}
            />
        </div>
    );
}
 
export default Left;