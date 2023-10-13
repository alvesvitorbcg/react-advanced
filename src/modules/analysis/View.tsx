import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import './View.scss';
import { BrandSelect } from './components/BrandSelect';
import { CategorySelect } from './components/CategorySelect';
import { ProductSelect } from './components/ProductSelect';
import { RetailerSelect } from './components/RetailerSelect';
import Tabs from './components/tabs/Tabs';
import { useDetailedTableEnrichedWithProductData } from './hooks/useDetailedTableEnrichedWithProductData';
import IMergedDetailedTableWithProducts from './interfaces/IProductsMergedWithDetailedData';
import { CalendarSelect } from './CalendarSelect';

export default function View() {
  const [categoryFilter, setCategoryFilter] = useState(null as null | string);
  const [brandFilter, setBrandFilter] = useState(null as null | string);
  const [productFilter, setProductFilter] = useState(null as null | string);
  const [retailerFilter, setRetailerFilter] = useState(null as null | number);
  const [filteredResults, setFilteredResults] = useState(
    null as IMergedDetailedTableWithProducts | null
  );
  const [calendarFilter, setCalendarFilter] = useState(null as string | null);

  const detailedTableEnrichedWithProducts =
    useDetailedTableEnrichedWithProductData();

  React.useEffect(() => {
    if (detailedTableEnrichedWithProducts) {
      setFilteredResults(structuredClone(detailedTableEnrichedWithProducts));
    }
  }, [detailedTableEnrichedWithProducts]);

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

  return (
    <div className="flex-column container row-padding">
      <div className="container-section flex-column-end">
        <CalendarSelect
          calendarFilter={calendarFilter}
          setCalendarFilter={setCalendarFilter}
        ></CalendarSelect>
      </div>
      <div className="container-section flex-row-space-between">
        <RetailerSelect
          retailerFilter={retailerFilter}
          setRetailerFilter={setRetailerFilter}
        ></RetailerSelect>

        <CategorySelect
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
        ></CategorySelect>

        <BrandSelect
          brandFilter={brandFilter}
          setBrandFilter={setBrandFilter}
        ></BrandSelect>

        <ProductSelect
          productFilter={productFilter}
          setProductFilter={setProductFilter}
        ></ProductSelect>

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
