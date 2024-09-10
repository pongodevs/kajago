const Time = () => {
    function unixTimestampToHHMM(timestamp:number) {
        const date = new Date(timestamp);
    
        const hours = String(date.getUTCHours() + 7).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    
        // Return the formatted time
        return `${hours}:${minutes}`;
    }
    
    return (  
        <div
            style={{
                display:`flex`,
                justifyContent:`center`,
                alignItems:`center`,
                fontSize:`2.4rem`
            }}
        >
            {unixTimestampToHHMM(Date.now())}
        </div>
    );
}
 
export default Time;