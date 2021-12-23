import React, { useState } from "react";
import Form from "./Form";

 
const Data = () => {

  const [data, setData] = useState({});

  return (
    <div>
      <h2>Farm data</h2>
      <h3>Select date range:</h3>

      <div id="form">
        <Form setData={setData} />
      </div>
      <div id="data">

{/*   Show data in table format
      Add filtering options
      Show data in graphs */}
      
      </div>

    </div>
  );
}
 
export default Data;