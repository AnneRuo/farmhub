import React, { useState } from "react";

// `http://localhost:8080/v1/farms/${farmId}`
// `http://localhost:8080/v1/farms/${farmId}/stats`
// `http://localhost:8080/v1/farms/${farmId}/stats/${sensor}/monthly`



const getAllTimeData = async (farmId) => {
    const res = await fetch(`http://localhost:8080/v1/farms/${farmId}/stats`);
    return await res.json();
}

const getMonthlyData = async (farmId, sensor) => {
    const res = await fetch(`http://localhost:8080/v1/farms/${farmId}/stats/${sensor}/monthly`);
    return await res.json();
}



const Form = ({setData}) => {

    const [farmData, setFarmData] = useState({
        farmId: "",
        sensorType: "",
      });

    const dataType = {
        type: 1
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        dataType.type === 1 
        ? setData(await getAllTimeData(farmData.farmId)) 
        : setData(await getMonthlyData(farmData.farmId, farmData.sensorType));
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setFarmData(prevValue => ({...prevValue, [name]: value }))
    }

    return (
        <div className="form-box">
            <form onSubmit={handleSubmit}>
                <label>
                    Farm:
                    <select 
                    type="text"
                    name="farmId" 
                    onChange={handleChange}
                    value={farmData.farmId} 
                    placeholder="Choose..." >
                        <option value="">Choose...</option>
                        <option value="1">Friman Metsola Collective</option>
                        <option value="2">PartialTech Research Farm</option>
                        <option value="3">Noora's Farm</option>
                        <option value="4">Organic Ossi's Impact That Lasts Plantation</option>
                    </select>
                </label>
                <label>
                    Sensor:
                    <select 
                    type="text" 
                    name="sensorType" 
                    onChange={handleChange}
                    value={farmData.sensorType} >
                        <option value="">Choose...</option>
                        <option value="temperature">Temperature</option>
                        <option value="ph">Ph</option>
                        <option value="rainfall">Rainfall</option>
                    </select>

                </label>
                
                    
                
                <button type="submit" onClick={() => (dataType.type = 1)} className="submitBtn">Show all data</button>
                <button type="submit" onClick={() => (dataType.type = 2)} className="submitBtn">Show monthly data</button>
            </form>
        </div>
    );
}

export default Form;