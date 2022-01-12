import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const BasicTableAll = ({data}) => {

  function createData(location, datetime, value, farm_id, sensor_type) {
    return { location, datetime, value, farm_id, sensor_type };
  }

  const dataRows = [];
  data.forEach((item, i) => {
    dataRows.push(createData(item.location, item.datetime, 
      item.value, item.farm_id, item.sensor_type));
  })
  console.log(dataRows);

  return (

    <TableContainer className="table" component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Farm</TableCell>
            <TableCell align="right">Datetime</TableCell>
            <TableCell align="right">Sensor</TableCell>
            <TableCell align="right">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataRows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {row.location}
              </TableCell>
              <TableCell align="right">{row.datetime}</TableCell>
              <TableCell align="right">{row.sensor_type}</TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTableAll;