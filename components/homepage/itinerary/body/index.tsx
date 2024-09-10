import ItineraryContainer from "./itineraryContainer";
import Lever from "./lever";

const Body = () => {
    return (  
        <div
            style={{
                display:`flex`,
                width:`100%`,
                height:`80%`
            }}
        >
            <ItineraryContainer/>
            <Lever/>
        </div>
    );
}
 
export default Body;