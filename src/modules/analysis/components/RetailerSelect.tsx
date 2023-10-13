import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useDetailedTableEnrichedWithProductData } from '../hooks/useDetailedTableEnrichedWithProductData';
import * as Service from '../service';

export function RetailerSelect({
  retailerFilter,
  setRetailerFilter,
}: {
  retailerFilter: any;
  setRetailerFilter: Function;
}) {
  const detailedTable = useDetailedTableEnrichedWithProductData();

  const retailersOptions = React.useMemo(() => {
    if (detailedTable) {
      const retailersIds = Service.queryAllRetailerIds(detailedTable);
      return Service.removeDuplicates(retailersIds);
    }
  }, [detailedTable]);

  React.useEffect(() => {
    if (retailersOptions) {
      setRetailerFilter(retailersOptions[0]);
    }
  }, [retailersOptions, setRetailerFilter]);
  if (retailerFilter == null) return null;
  return (
    <FormControl
      sx={{
        padding: '0px 10px',
      }}
    >
      <InputLabel id="demo-simple-select-label">Retailer</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={retailerFilter}
        label="Retailer"
        onChange={(event) => {
          setRetailerFilter(Number(event.target.value));
        }}
        variant="outlined"
      >
        {retailersOptions &&
          retailersOptions.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}
