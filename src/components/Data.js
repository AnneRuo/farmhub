import React, { useState } from "react";
import Form from "./Form";
import BasicTableAll from "./BasicTableAll";
import BasicTableMonthly from "./BasicTableMonthly";

const Data = () => {

  const [allData, setAllData] = useState({measurements: [""]});
  const [monthlyData, setMonthlyData] = useState({stats: [""]});
  const [dataType, setDataType] = useState();

  return (
    <div>
      <h2>Select data to show:</h2>

      <div id="form">
        <Form setAllData={setAllData} setMonthlyData={setMonthlyData} setDataType={setDataType}/>
      </div>
      <div id="data">
        {(dataType === 1 && allData.measurements.length > 1) ? <BasicTableAll data={allData} /> : null}
        {(dataType === 2 && monthlyData.stats.length > 1) ? <BasicTableMonthly data={monthlyData} /> : null}

      
      </div>

    </div>
  );
}
 
export default Data;