import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import Tabs from './components/tabs/Tabs';
import IMergedDetailedTableWithProducts from './interfaces/IProductsMergedWithDetailedData';
import * as Service from './service';
import './View.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchDetailedTableData,
  fetchProductsData,
} from './redux/actions/http-actions';
import { IProductsResponse } from './interfaces/IProduct';

export default function View() {
  const dispatch = useDispatch();
  const [categoryFilter, setCategoryFilter] = useState('');

  const { data, loading, error } = useSelector(
    (state: any) => state.analysis.products
  );
  const { data: data2 } = useSelector(
    (state: any) => state.analysis.detailedTable
  );

  const DetailedTableData = React.useMemo(() => {
    if (data2) return data2 as IMergedDetailedTableWithProducts;
  }, [data2]);

  React.useEffect(() => {
    dispatch(fetchProductsData() as any);
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(fetchDetailedTableData() as any);
  }, [dispatch]);

  const products = React.useMemo(() => {
    if (data) return data as IProductsResponse;
  }, [data]);

  React.useEffect(() => {
    console.log('Analysis View products', products);
  }, [products]);

  const detailedTableEnrichedWithProducts = React.useMemo(() => {
    if (products && DetailedTableData)
      return Service.getDetailedTableDataEnrichedWithProducts(
        products,
        DetailedTableData
      );
  }, [products, DetailedTableData]);

  const [filteredResults, setFilteredResults] = useState(
    null as IMergedDetailedTableWithProducts | null
  );

  React.useEffect(() => {
    if (detailedTableEnrichedWithProducts) {
      setFilteredResults(
        JSON.parse(
          JSON.stringify(detailedTableEnrichedWithProducts)
        ) as IMergedDetailedTableWithProducts
      );
    }
  }, [detailedTableEnrichedWithProducts]);

  const retailersOptions = React.useMemo(() => {
    if (DetailedTableData) {
      const retailersIds = Service.queryAllRetailerIds(DetailedTableData);
      return Service.removeDuplicates(retailersIds);
    }
  }, [DetailedTableData]);

  const categoriesOptions = React.useMemo(() => {
    if (products) {
      const categoriesIds = Service.queryAllCategoryIds(products);
      return Service.removeDuplicates(categoriesIds);
    }
  }, [products]);

  const brandsOptions = React.useMemo(() => {
    if (detailedTableEnrichedWithProducts) {
      const brandsNames = Service.queryAllBrandNames(
        detailedTableEnrichedWithProducts
      );
      return Service.removeDuplicates(brandsNames);
    }
  }, [detailedTableEnrichedWithProducts]);

  const productsOptions = React.useMemo(() => {
    if (detailedTableEnrichedWithProducts) {
      const productsNames = Service.queryAllProductNames(
        detailedTableEnrichedWithProducts
      );
      const res = Service.removeDuplicates(productsNames);
      return res;
    }
  }, [detailedTableEnrichedWithProducts]);

  const [brandFilter, setBrandFilter] = useState('');
  const [productFilter, setProductFilter] = useState('');

  React.useEffect(() => {
    if (categoriesOptions) {
      setCategoryFilter(categoriesOptions[0]);
    }
  }, [categoriesOptions]);

  React.useEffect(() => {
    if (brandsOptions) {
      setBrandFilter(brandsOptions[0]);
    }
  }, [brandsOptions]);

  React.useEffect(() => {
    if (productsOptions) {
      setProductFilter(productsOptions[0]);
    }
  }, [productsOptions]);

  React.useEffect(() => {
    if (retailersOptions) {
      console.log('retailersOptions', retailersOptions);
      setRetailerFilter(retailersOptions[0]);
    }
  }, [retailersOptions]);

  const [retailerFilter, setRetailerFilter] = useState(null as null | number);

  const handleApplyFilter = () => {
    if (!detailedTableEnrichedWithProducts) return;
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
          {DetailedTableData && (
            <MenuItem value={1}>{DetailedTableData.name}</MenuItem>
          )}
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
            {retailersOptions &&
              retailersOptions.map((option, index) => (
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
            {categoriesOptions &&
              categoriesOptions.map((option, index) => (
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
            {brandsOptions &&
              brandsOptions.map((option, index) => (
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
            {productsOptions &&
              productsOptions.map((option, index) => (
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
        {detailedTableEnrichedWithProducts && (
          <Button
            variant="contained"
            sx={{ width: '200px', backgroundColor: '#e0e0e0' }}
            onClick={() => {
              setFilteredResults(detailedTableEnrichedWithProducts);
            }}
          >
            <Typography>CLEAR FILTERS</Typography>
          </Button>
        )}
      </div>
      <div className="container-section">
        {filteredResults && <Tabs detailedTableData={filteredResults}></Tabs>}
      </div>
    </div>
  );
}
