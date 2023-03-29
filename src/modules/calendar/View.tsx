import { Button, SxProps, Theme, Typography } from '@mui/material';
import * as React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CalendarsData from '../../dummy_data/all_calendars.json';

function BasicTable({ sx }: { sx?: SxProps<Theme> }) {
  return (
    <TableContainer component={Paper} sx={sx}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Last Edit</TableCell>
            <TableCell align="left">Export</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {CalendarsData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.last_edited}</TableCell>
              <TableCell align="left">
                <DownloadIcon></DownloadIcon>
              </TableCell>
              <TableCell align="left">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default function View() {
  return (
    <div style={{ padding: '20px 200px' }}>
      <div className="flex-row-space-between">
        <Typography color="primary" variant="h6" component="div" align="left">
          All Calendars
        </Typography>
        <Button variant="contained">
          <Typography color="white">
            <div className="flex-row">
              <AddIcon
                sx={{
                  marginRight: 1,
                }}
              ></AddIcon>
              New Calendar
            </div>
          </Typography>
        </Button>
      </div>
      <BasicTable
        sx={{
          marginTop: 4,
        }}
      ></BasicTable>
    </div>
  );
}
