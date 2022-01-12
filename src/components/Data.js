import React, { useState } from "react";
import Form from "./Form";
import BasicTableAll from "./BasicTableAll";

const Data = () => {

  const [data, setData] = useState({measurements: [""]});
  
  const dataToShow = Array.from(data.measurements);

  return (
    <div>
      <h2>Select data to show:</h2>

      <div id="form">
        <Form setData={setData} />
      </div>
      <div id="data">
        <BasicTableAll data={dataToShow} />

      
      </div>

    </div>
  );
}
 
export default Data;