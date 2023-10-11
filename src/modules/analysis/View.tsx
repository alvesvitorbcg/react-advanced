import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import DetailedTableData from '../../dummy_data/detailed_table_data.json';
import Tabs from './components/tabs/Tabs';
import IMergedDetailedTableWithProducts from './interfaces/IProductsMergedWithDetailedData';
import * as Service from './service';
import './View.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './redux/actions/http-actions';

export default function View() {
  const dispatch = useDispatch();
  const {
    data: products,
    loading,
    error,
  } = useSelector((state: any) => state.analysis);

  React.useEffect(() => {
    dispatch(fetchData() as any);
  }, [dispatch]);
  React.useEffect(() => {
    // if (products) {
    //   Service.setProducts(products);
    // }
    console.log('Analysis View products', products);
  }, [products]);

  const detailedTableEnrichedWithProducts =
    Service.getDetailedTableDataEnrichedWithProducts();
  const [filteredResults, setFilteredResults] = useState(
    JSON.parse(
      JSON.stringify(detailedTableEnrichedWithProducts)
    ) as IMergedDetailedTableWithProducts
  );
  const allRetailersIds = Service.queryAllRetailerIds();
  const retailersOptions = Service.removeDuplicates(allRetailersIds);

  const categoriesIds = Service.queryAllCategoryIds();
  const categoriesOptions = Service.removeDuplicates(categoriesIds);

  const brandsNames = Service.queryAllBrandNames(
    detailedTableEnrichedWithProducts
  );
  const brandsOptions = Service.removeDuplicates(brandsNames);

  const productsNames = Service.queryAllProductNames(
    detailedTableEnrichedWithProducts
  );
  const productsOptions = Service.removeDuplicates(productsNames);

  const [categoryFilter, setCategoryFilter] = useState(categoriesOptions[0]);
  const [retailerFilter, setRetailerFilter] = useState(retailersOptions[0]);
  const [brandFilter, setBrandFilter] = useState(brandsOptions[0]);
  const [productFilter, setProductFilter] = useState(productsOptions[0]);

  const handleApplyFilter = () => {
    const filtered = {
      ...detailedTableEnrichedWithProducts,
      promo_events: detailedTableEnrichedWithProducts.promo_events.filter(
        (x) => {
          const product = detailedTableEnrichedWithProducts.product_kpis.find(
            (kpi) => kpi.product_id === x.product_id
          )?.product;
          return (
            x.retailer_id === retailerFilter &&
            product?.category_name === categoryFilter &&
            product?.product_brand === brandFilter &&
            product?.product_name === productFilter
          );
        }
      ),
    };
    setFilteredResults(filtered);
  };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>There was an error</div>;
  // }
  return (
    <div className="flex-column container" style={{ padding: '20px 50px' }}>
      <div
        className="container-section"
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={1}
          onChange={() => {}}
          variant="standard"
          sx={{ alignSelf: 'flex-end' }}
        >
          <MenuItem value={1}>{DetailedTableData.name}</MenuItem>
        </Select>
      </div>
      <div
        className="container-section"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <FormControl sx={{ width: '200px' }}>
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
            {retailersOptions.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ width: '200px' }}>
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
            {categoriesOptions.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ width: '200px' }}>
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
            {brandsOptions.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ width: '200px' }}>
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
            {productsOptions.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          variant="contained"
          sx={{ width: '200px' }}
          onClick={handleApplyFilter}
        >
          <Typography color="white">APPLY FILTERS</Typography>
        </Button>
        <Button
          variant="contained"
          sx={{ width: '200px', backgroundColor: '#e0e0e0' }}
          onClick={() => {
            setFilteredResults(detailedTableEnrichedWithProducts);
          }}
        >
          <Typography>CLEAR FILTERS</Typography>
        </Button>
      </div>
      <div className="container-section">
        <Tabs detailedTableData={filteredResults}></Tabs>
      </div>
    </div>
  );
}
