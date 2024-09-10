import Ongoing from "./ongoing";
import Recommended from "./recommended";

const Footer = () => {
    return (  
        <div
            style={{
                position:`absolute`,
                width:`100%`,
                display:`flex`,
                justifyContent:`center`,
                bottom:`2rem`
            }}
        >
            <div
                style={{
                    // border:`1px solid black`,
                    width:`90%`,
                    display:`flex`
                }}
            >
                <Recommended/>
                <Ongoing/>
            </div>
        </div>
    );
}
 
export default Footer;