import React, { useState } from "react";

export const Getdata = async (timestampStart, timestampEnd) => {
    const url = ``;
    const response = await fetch(url);
    return await response.json();
}

const Form = ({setData}) => {
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    
    const handleSubmit = async (event) => {
        if (fromDate === "" || toDate === "") {
            alert("Select date range");
        }
        event.preventDefault();
        let timestampStart = (new Date(fromDate).getTime())/1000;
        let timestampEnd = (new Date(toDate).getTime() + (1*60*60*1000))/1000;
        if (timestampStart >= timestampEnd) {
            alert("Check date range, end date can't be earlier than start date");
        }
        
        const fetchData = await Getdata(timestampStart, timestampEnd);
        setData(fetchData);
    }    

    return (
        <div className="form-box">
            <form onSubmit={handleSubmit}>
                <label>
                    Start date:
                    <input type="date" name="fromdate" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
                </label>
                <label>
                    End date:
                    <input type="date" name="todate" value={toDate} onChange={(e) => setToDate(e.target.value)} />
                </label>
                <button type="submit" id="submitBtn">Show data</button>
            </form>
        </div>
    );
}

export default Form;