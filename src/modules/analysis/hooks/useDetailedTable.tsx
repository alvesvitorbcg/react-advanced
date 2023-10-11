import React from 'react';
import IMergedDetailedTableWithProducts from '../interfaces/IProductsMergedWithDetailedData';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailedTableData } from '../redux/actions/http-actions';

export const useDetailedTable = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: any) => state.analysis.detailedTable);

  React.useEffect(() => {
    dispatch(fetchDetailedTableData() as any);
  }, [dispatch]);

  const detailedTable = React.useMemo(() => {
    if (data) return data as IMergedDetailedTableWithProducts;
  }, [data]);

  return detailedTable;
};
