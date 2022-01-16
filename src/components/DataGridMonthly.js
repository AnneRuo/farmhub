import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types'

const columns = [
  {
    field: 'year',
    headerName: 'Year',
    width: 150,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
  },
  {
    field: 'month',
    headerName: 'Month',
    type: 'number',
    width: 150,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
  },
  {
    field: 'average',
    headerName: 'Average',
    type: 'number',
    width: 150,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
  },
  {
    field: 'median',
    headerName: 'Median',
    type: 'number',
    width: 150,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
  },
  {
    field: 'standard_deviation',
    headerName: 'Standard deviation',
    type: 'number',
    width: 150,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
  },
];

export default function DataGridMonthly({ data }) {

  const dataToShow = Array.from(data.stats);

  function createData(month, year, average, median, standard_deviation, id) {
    return { month, year, average, median, standard_deviation, id }
  }

  const dataRows = []
  dataToShow.forEach((item, index) => {
    dataRows.push(
      createData(
        item.month,
        item.year,
        item.average,
        item.median,
        item.standard_deviation,
        index
      ),
    )
  })

  const [pageSize, setPageSize] = useState(20);

  return (
    <Box className='data-grid'
      sx={{
        height: 1000, 
        width: 780,
        '& .super-app-theme--header': {
          backgroundColor: '#FFBD35',
        },
      }}
    >
      <DataGrid
        density='compact'
        rows={dataRows}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[20, 30, 50]}
        pagination
      />
    </Box>
  );
}

DataGridMonthly.propTypes = {
  data: PropTypes.object,
}