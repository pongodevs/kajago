
import { HomepageContext } from "components/homepage";
import { useContext } from "react";
import { FaStar } from "react-icons/fa";
const Recommended = () => {
    const {listType,setListType} = useContext(HomepageContext)
    return (  
        <div
            style={{
                width:`50%`,
                padding:`2rem 8rem`,
                border:`1px solid black`,
                borderTopLeftRadius:`4rem`,
                borderBottomLeftRadius:`4rem`,
                background:`#05c655`,
                zIndex:`3`,
                color:`white`,
                boxShadow:listType === 'recommended'?`-4px 4px black`:`-8px 8px black`,
                transform:listType === 'recommended'? `` :`translate(4px, -4px)`,
                filter:listType === 'recommended'? `brightness(0.85)` : ``
            }}
            onClick={()=>{
                setListType("recommended")
            }}
        >
            <FaStar />
        </div>
    );
}
 
export default Recommended;