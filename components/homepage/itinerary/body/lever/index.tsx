import { HomepageContext } from "components/homepage";
import gsap from "gsap";
import { useContext, useRef } from "react";

const Lever = () => {
    const leverRef = useRef(null as any)
    const transformRef = useRef(null as any)

    const {state, setState} = useContext(HomepageContext)
    return (  
        <div
            style={{
                width:`10%`,
                height:`100%`,
                // background:`green`
                display:`flex`,
                // justifyContent:`center`,
                alignItems:`center`
            }}
        >
            <div
                style={{
                    width:`10px`,
                    background:`#0b0b0b`,
                    height:`7rem`,
                    border:`1px solid black`,
                    borderRadius:`4px`,
                    position:`relative`,
                    // overflow:`hidden`,
                }}
                onClick={()=>{
                    // Animation
                    if(leverRef.current && transformRef.current){
                        leverRef.current.style.transform = `rotate(60deg)`
                        transformRef.current.style.transform = `translate(-20px,70px)`

                        setTimeout(()=>{
                            leverRef.current.style.transform = `rotate(-60deg)`
                            transformRef.current.style.transform = `translate(-20px,-20px)`
                        },200)
                    }

                    // Set progress
                    state.speed = ((Math.random() - 0.5) * 2.0) * 100
                    
                }}
            >
                <div
                    ref={transformRef}
                    style={{
                        transform:`translate(-20px,-20px)`,
                        transition:`transform 0.2s ease-in-out`
                    }}
                >
                    <img
                        ref={leverRef}
                        src="/images/logo/lever.png"
                        style={{
                            position:`absolute`,
                            width:`6rem`,
                            transform:`rotate(-60deg)`,
                            transition:`transform 0.2s ease-in-out`
                            
                        }}
                    />
                </div>

            </div>
        </div>
    );
}
 
export default Lever;