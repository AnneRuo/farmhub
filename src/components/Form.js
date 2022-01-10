import React, { useState } from "react";

export const Getdata = async (props) => {
    const url = ``;
    const response = await fetch(url);
    return await response.json();
}

const Form = ({setData}) => {
    const [farmId, setFarmId] = useState("");
    const [sensor, setSensor] = useState("");
    const [month, setMonth] = useState("");
    
    const handleSubmit = async (event) => {
        if (farmId === "" || sensor === "") {
            alert("Select data type");
        }
        event.preventDefault();
                
        const fetchData = await Getdata();
        setData(fetchData);
    }    

    return (
        <div className="form-box">
            <form onSubmit={handleSubmit}>
                <label>
                    Farm:
                    <input type="text"
                    name="farmId" 
                    value={farmId} 
                    onChange={(e) => setFarmId(e.target.value)} />
                </label>
                <label>
                    Sensor:
                    <input type="text" 
                    name="sensor" 
                    value={sensor} 
                    onChange={(e) => setSensor(e.target.value)} />
                </label>
                <label>
                    Month:
                    <input type="text" 
                    name="month" 
                    value={month} 
                    onChange={(e) => setMonth(e.target.value)} />
                </label>
                
                <button type="submit" id="submitBtn">Show data</button>
            </form>
        </div>
    );
}

export default Form;