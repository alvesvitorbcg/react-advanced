import { SxProps, Theme } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

interface IData {
  classification_name: string;
  number_of_offers: number;
  total_incremental_sales: string;
  total_incremental_margin: string;
  classification: string;
}

const colors = ['#c31653', '#d7df3c', '#7ca893', '#54775c'];
export default function EffectivenessTable({
  sx,
  campaigns,
}: {
  sx?: SxProps<Theme>;
  campaigns: IData[];
}) {
  return (
    <TableContainer sx={sx}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Classification</TableCell>
            <TableCell align="center">Number of offers</TableCell>
            <TableCell align="center">Total Incremental Sales (€)</TableCell>
            <TableCell align="center">Total Incremental Margin (€)</TableCell>
            <TableCell align="center">Classification (%)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {campaigns.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <div
                  style={{
                    height: 20,
                    width: 20,
                    backgroundColor: colors[index],
                    marginRight: '8px',
                  }}
                ></div>
                {row.classification_name}
              </TableCell>
              <TableCell align="center">{row.number_of_offers}</TableCell>
              <TableCell align="center">
                {row.total_incremental_sales}
              </TableCell>
              <TableCell align="center">
                {row.total_incremental_margin}
              </TableCell>
              <TableCell align="center">{row.classification}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
