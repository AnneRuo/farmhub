import React, { useState } from "react";

const getFarmers = async () => {
    const res = await fetch('http://localhost:8080/v1/farms');
    return await res.json();
}

const Farmers = () => {

/*     const [farmerList, setFarmerList] = useState([]);

    setFarmerList(getFarmers()) 
    

    console.log(farmerList)
 */
    return (
        <div>
           
        </div>
    )
    

}

export default Farmers;