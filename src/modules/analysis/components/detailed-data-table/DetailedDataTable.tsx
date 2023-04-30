import { SxProps, TablePagination, Theme } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IMergedDetailedTableWithProducts from '../../interfaces/IProductsMergedWithDetailedData';
import { useState } from 'react';

export default function DetailedDataTable({
  sx,
  data,
}: {
  sx?: SxProps<Theme>;
  data: IMergedDetailedTableWithProducts;
}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const mappedData = data.promo_events.map((e) => {
    const product = data.product_kpis.find(
      (kpi) => kpi.product?.product_id === e.product_id
    )?.product;

    return {
      promo_id: e.promo_id,
      brand: product?.product_brand,
      product: product?.product_name,
      mechanics: `${e.price_mechanics.value} ${e.price_mechanics.unit}`,
      volume: Math.round(e.product_kpi.volume),
      roi: 0.02,
      promo_spend: Math.round(e.promo_spend),
      volume_uplift: (
        (e.product_kpi.volume - e.product_kpi.baseline_volume) /
        e.product_kpi.baseline_volume
      ).toFixed(2),
      sales_uplift: 1.26,
      margin_uplift: 1.02,
    };
  });

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer component={Paper} sx={sx}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Promo Id</TableCell>
              <TableCell align="left">Brand</TableCell>
              <TableCell align="left">Product</TableCell>
              <TableCell align="left">Mechanics</TableCell>
              <TableCell align="left">Volime (Unit)</TableCell>
              <TableCell align="left">ROI</TableCell>
              <TableCell align="left">Promo Spend (€)</TableCell>
              <TableCell align="left">Volume Uplift</TableCell>
              <TableCell align="left">Sales Uplift</TableCell>
              <TableCell align="left">Margin Uplift</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mappedData
              .slice(
                page * rowsPerPage,
                Math.min(mappedData.length, (page + 1) * rowsPerPage)
              )
              .map((row) => (
                <TableRow
                  key={row.promo_id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.promo_id}
                  </TableCell>
                  <TableCell align="left">{row.brand}</TableCell>
                  <TableCell align="left">{row.product}</TableCell>
                  <TableCell align="left">{row.mechanics}</TableCell>
                  <TableCell align="left">{row.volume}</TableCell>
                  <TableCell align="left">{row.roi}</TableCell>
                  <TableCell align="left">{row.promo_spend}</TableCell>
                  <TableCell align="left">{row.volume_uplift}</TableCell>
                  <TableCell align="left">{row.sales_uplift}</TableCell>
                  <TableCell align="left">{row.margin_uplift}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={mappedData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
