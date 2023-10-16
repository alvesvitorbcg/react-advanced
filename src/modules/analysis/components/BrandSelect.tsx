import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useDetailedTableEnrichedWithProductData } from '../hooks/useDetailedTableEnrichedWithProductData';
import * as Service from '../service';

export function BrandSelect({
  brandFilter,
  setBrandFilter,
}: {
  brandFilter: any;
  setBrandFilter: Function;
}) {
  const detailedTableEnrichedWithProducts =
    useDetailedTableEnrichedWithProductData();

  const brandsOptions = React.useMemo(() => {
    if (detailedTableEnrichedWithProducts) {
      const brandsNames = Service.queryAllBrandNames(
        detailedTableEnrichedWithProducts
      );
      return Service.removeDuplicates(brandsNames);
    }
  }, [detailedTableEnrichedWithProducts]);

  React.useEffect(() => {
    if (brandsOptions) {
      setBrandFilter(brandsOptions[0]);
    }
  }, [brandsOptions, setBrandFilter]);

  return (
    brandFilter && (
      <FormControl>
        <InputLabel id="demo-simple-select-label">Brand</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={brandFilter}
          label="Brand"
          onChange={(event) => {
            setBrandFilter(event.target.value);
          }}
          variant="outlined"
        >
          {brandsOptions?.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )
  );
}
