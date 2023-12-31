import { IProductsResponse } from './interfaces/IProduct';
import IMergedDetailedTableWithProducts from './interfaces/IProductsMergedWithDetailedData';

export function getDetailedTableDataEnrichedWithProducts(
  ProductsData: IProductsResponse,
  DetailedTableData: IMergedDetailedTableWithProducts
): IMergedDetailedTableWithProducts {
  return {
    ...DetailedTableData,
    product_kpis: DetailedTableData.product_kpis.map((productKpi) => {
      return {
        ...productKpi,
        product: ProductsData.products.find(
          (p) => p.product_id === productKpi.product_id
        ),
      };
    }),
  };
}
export function queryAllProductNames(data: IMergedDetailedTableWithProducts) {
  return data.product_kpis.map((kpi) => kpi.product?.product_name);
}

export function queryAllBrandNames(data: IMergedDetailedTableWithProducts) {
  return data.product_kpis.map((kpi) => kpi.product?.product_brand);
}

export function queryAllCategoryIds(ProductsData: IProductsResponse) {
  return ProductsData.products.map((x) => x.category_name);
}

export function queryAllRetailerIds(
  DetailedTableData: IMergedDetailedTableWithProducts
) {
  return DetailedTableData.product_kpis.map((productKpi) => {
    return productKpi.retailer_id;
  });
}

export function removeDuplicates(arr: any[]) {
  return arr.filter((element, index) => {
    return arr.indexOf(element) === index;
  });
}
