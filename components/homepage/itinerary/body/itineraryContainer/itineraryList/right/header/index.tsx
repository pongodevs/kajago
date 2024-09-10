import { useContext } from "react";
import { ItineraryListContext } from "../..";

const Header = () => {
    const {itinerary} = useContext(ItineraryListContext)
    return (  
        <div
            style={{
                fontSize:`2.4rem`,
                fontWeight:600
            }}
        >
            {itinerary.title}
        </div>
    );
}
 
export default Header;