import { HomepageContext } from "components/homepage";
import { useContext } from "react";
import { IoListOutline } from "react-icons/io5";

const Ongoing = () => {
    const {setListType, listType} = useContext(HomepageContext)
    return (  
        <div
            style={{
                width:`50%`,
                border:`1px solid black`,
                zIndex:`1`,
                padding:`2rem 8rem`,
                borderTopRightRadius:`4rem`,
                borderBottomRightRadius:`4rem`,
                background:`#05c655`,
                color:`white`,
                boxShadow:listType === 'ongoing'?`-4px 4px black`:`-8px 8px black`,
                transform:listType === 'ongoing'? `` :`translate(4px, -4px)`,
                filter:listType === 'ongoing'? `brightness(0.85)` : ``
            }}
            onClick={()=>{
                setListType("ongoing")
            }}
        >
            <IoListOutline />
        </div>
    );
}
 
export default Ongoing;