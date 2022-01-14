import React, { useState } from 'react'
import Form from './Form'
import DataGridAll from './DataGridAll'
import DataGridMonthly from './DataGridMonthly'

const Data = () => {
  const [allData, setAllData] = useState({ measurements: [''] })
  const [monthlyData, setMonthlyData] = useState({ stats: [''] })
  const [dataType, setDataType] = useState()

  return (
    <div>
      <h2>Select data to show:</h2>

      <div id="form">
        <Form
          setAllData={setAllData}
          setMonthlyData={setMonthlyData}
          setDataType={setDataType}
        />
      </div>
      <div id="data">
        {dataType === 1 && allData.measurements.length > 1 ? (
          <DataGridAll data={allData} />
        ) : null}
        {dataType === 2 && monthlyData.stats.length > 1 ? (
          <DataGridMonthly data={monthlyData} />
        ) : null}
      </div>
    </div>
  )
}

export default Data
