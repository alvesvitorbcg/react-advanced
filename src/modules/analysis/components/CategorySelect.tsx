import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import * as Service from '../service';
import { useProductsData } from '../hooks/useProductsData';

export function CategorySelect({
  setCategoryFilter,
  categoryFilter,
}: {
  setCategoryFilter: Function;
  categoryFilter: any;
}) {
  const products = useProductsData();
  const categoriesOptions = React.useMemo(() => {
    if (products) {
      const categoriesIds = Service.queryAllCategoryIds(products);
      return Service.removeDuplicates(categoriesIds);
    }
  }, [products]);

  React.useEffect(() => {
    if (categoriesOptions) {
      setCategoryFilter(categoriesOptions[0]);
    }
  }, [categoriesOptions, setCategoryFilter]);

  return (
    categoryFilter && (
      <FormControl>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={categoryFilter}
          onChange={(event) => {
            setCategoryFilter(event.target.value);
          }}
          variant="outlined"
          placeholder="Category"
          label="Category"
        >
          {categoriesOptions?.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )
  );
}
