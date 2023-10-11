import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsData } from '../redux/actions/http-actions';
import { IProductsResponse } from '../interfaces/IProduct';

export const useProductsData = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: any) => state.analysis.products);

  React.useEffect(() => {
    dispatch(fetchProductsData() as any);
  }, [dispatch]);

  const products = React.useMemo(() => {
    if (data) return data as IProductsResponse;
  }, [data]);

  return products;
};
