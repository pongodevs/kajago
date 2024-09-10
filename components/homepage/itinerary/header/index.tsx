import Time from "./time";
import Weather from "./weather";

const Header = () => {
    return (  
        <div
            style={{
                display:`flex`,
                justifyContent:`end`,
                gap:`1rem`,
                padding:`1rem`,
                // width:`calc(100% - 2rem)`,
            }}
        >
            <Weather/>
            <Time/>
        </div>
    );
}
 
export default Header;