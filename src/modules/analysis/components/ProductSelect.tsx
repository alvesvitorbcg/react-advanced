import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useDetailedTableEnrichedWithProductData } from '../hooks/useDetailedTableEnrichedWithProductData';
import * as Service from '../service';

export function ProductSelect({
  productFilter,
  setProductFilter,
}: {
  productFilter: any;
  setProductFilter: Function;
}) {
  const detailedTableEnrichedWithProducts =
    useDetailedTableEnrichedWithProductData();

  const productsOptions = React.useMemo(() => {
    if (detailedTableEnrichedWithProducts) {
      const productsNames = Service.queryAllProductNames(
        detailedTableEnrichedWithProducts
      );
      const res = Service.removeDuplicates(productsNames);
      return res;
    }
  }, [detailedTableEnrichedWithProducts]);

  React.useEffect(() => {
    if (productsOptions) {
      setProductFilter(productsOptions[0]);
    }
  }, [productsOptions, setProductFilter]);

  return (
    <FormControl
      sx={{
        width: '200px',
      }}
    >
      <InputLabel id="demo-simple-select-label">Product</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={productFilter}
        label="Product"
        onChange={(event) => {
          setProductFilter(event.target.value);
        }}
        variant="outlined"
      >
        {productsOptions &&
          productsOptions.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}