import React, { useState } from "react";
import Form from "./Form";

 
const Data = () => {

  const [data, setData] = useState({});
  console.log(data);

  return (
    <div>
      <h2>Show farm data</h2>
      <h3>Select data to show:</h3>

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