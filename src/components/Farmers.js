import React from "react";

const Farmers = async () => {
    const res = await fetch('http://localhost:8080/v1/farms');
    return await res.json();
}

export default Farmers;