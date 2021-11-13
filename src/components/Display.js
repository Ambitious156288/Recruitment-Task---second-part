import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}));

const Display = ({ weatherInfo, city, delay }) => {
  useEffect(delay, [weatherInfo]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <StyledTableCell>City</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Humidity</StyledTableCell>
            <StyledTableCell align="right">Temp</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {city &&
            weatherInfo.map(item => (
              <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>{city}</TableCell>
                <TableCell align="right">{item.dt_txt}</TableCell>
                <TableCell align="right">{item.main.humidity}</TableCell>
                <TableCell align="right">{item.main.temp}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Display;
