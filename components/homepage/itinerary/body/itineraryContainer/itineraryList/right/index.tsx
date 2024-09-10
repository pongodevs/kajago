import Description from "./description";
import Header from "./header";

const Right = () => {
    return (  
        <div
            style={{
                width:`50%`,
                display:`flex`,
                // alignItems:`center`
            }}
        >
            <div
                style={{
                    display:`flex`,
                    flexDirection:`column`,
                    gap:`0.6rem`
                }}
            >
                <Header/>
                <Description/>
            </div>
        </div>
    );
}
 
export default Right;