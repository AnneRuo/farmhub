import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types'

const columns = [
  {
    field: 'farm_id',
    headerName: 'Farm Id',
    type: 'number',
    width: 150,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
  },
  {
    field: 'location',
    headerName: 'Farm',
    width: 400,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
  },
  {
    field: 'datetime',
    headerName: 'Datetime',
    width: 200,
    type: 'dateTime',
    valueGetter: ({ value }) => value && new Date(value),
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
  },
  {
    field: 'value',
    headerName: 'Value',
    type: 'number',
    width: 150,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
  },
  {
    field: 'sensor_type',
    headerName: 'Sensor type',
    width: 150,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
  },
];

export default function DataGridAll({ data }) {

  const dataToShow = Array.from(data.measurements);

  function createData(location, datetime, value, farm_id, sensor_type, id) {
    return { location, datetime, value, farm_id, sensor_type, id }
  }

  const dataRows = []
  dataToShow.forEach((item, index) => {
    dataRows.push(
      createData(
        item.location,
        item.datetime,
        item.value,
        item.farm_id,
        item.sensor_type,
        index,
      ),
    )
  })

  return (
    <Box className='data-grid'
      sx={{
        height: 1000, 
        width: 1075,
        '& .super-app-theme--header': {
          backgroundColor: '#FFBD35',
        },
      }}
    >
      <DataGrid 
        density='compact'
        rows={dataRows}
        columns={columns}
        pageSize={50}
        rowsPerPageOptions={[50]}
      />
    </Box>
  );
}

DataGridAll.propTypes = {
  data: PropTypes.object,
}