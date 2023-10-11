import React from 'react';
import * as Service from '../service';
import { useDetailedTable } from './useDetailedTable';
import { useProductsData } from './useProductsData';

export const useDetailedTableEnrichedWithProductData = () => {
  const detailedTable = useDetailedTable();
  const products = useProductsData();

  const detailedTableEnriched = React.useMemo(() => {
    if (products && detailedTable)
      return Service.getDetailedTableDataEnrichedWithProducts(
        products,
        detailedTable
      );
  }, [products, detailedTable]);

  return detailedTableEnriched;
};
