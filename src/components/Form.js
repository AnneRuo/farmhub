import React, { useState } from 'react'
import PropTypes from 'prop-types'

const getAllTimeData = async (farmId) => {
  const res = await fetch(`http://localhost:8080/v1/farms/${farmId}/stats`)
  return await res.json()
}

const getMonthlyData = async (farmId, sensor) => {
  const res = await fetch(
    `http://localhost:8080/v1/farms/${farmId}/stats/${sensor}/monthly`,
  )
  return await res.json()
}

const Form = ({ setAllData, setMonthlyData, setDataType }) => {
  const [farmData, setFarmData] = useState({
    farmId: '',
    sensorType: '',
  })

  const dataType = {
    type: 1,
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    dataType.type === 1
      ? setAllData(await getAllTimeData(farmData.farmId))
      : setMonthlyData(
          await getMonthlyData(farmData.farmId, farmData.sensorType),
        )
    setDataType(dataType.type)
  }

  function handleChange(event) {
    const { name, value } = event.target
    setFarmData((prevValue) => ({ ...prevValue, [name]: value }))
  }

  return (
    <div className="form-box">
      <form onSubmit={handleSubmit}>
        <div className="form-selector">
          <label>Farm:</label>
          <select
            type="text"
            name="farmId"
            onChange={handleChange}
            value={farmData.farmId}
            placeholder="Choose..."
          >
            <option value="">Choose...</option>
            <option value="1">Friman Metsola Collective</option>
            <option value="2">PartialTech Research Farm</option>
            <option value="3">Noora&apos;s Farm</option>
            <option value="4">
              Organic Ossi&apos;s Impact That Lasts Plantation
            </option>
          </select>

          <label>Sensor:</label>
          <select
            type="text"
            name="sensorType"
            onChange={handleChange}
            value={farmData.sensorType}
          >
            <option value="">Choose...</option>
            <option value="temperature">Temperature</option>
            <option value="ph">Ph</option>
            <option value="rainfall">Rainfall</option>
          </select>
        </div>

        <button
          type="submit"
          onClick={() => (dataType.type = 1)}
          className="submitBtn"
        >
          Show all data
        </button>
        <button
          type="submit"
          onClick={() => (dataType.type = 2)}
          className="submitBtn"
        >
          Show monthly data
        </button>
      </form>
    </div>
  )
}

export default Form

Form.propTypes = {
  setAllData: PropTypes.func,
  setMonthlyData: PropTypes.func,
  setDataType: PropTypes.func,
}