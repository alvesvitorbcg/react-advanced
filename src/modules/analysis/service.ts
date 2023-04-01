import DetailedTableData from '../../dummy_data/detailed_table_data.json';
import ProductsData from '../../dummy_data/products.json';
import IMergedDetailedTableWithProducts from './interfaces/IProductsMergedWithDetailedData';

export function getDetailedTableDataEnrichedWithProducts(): IMergedDetailedTableWithProducts {
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

export function queryAllCategoryIds() {
  return ProductsData.products.map((x) => x.category_name);
}

export function queryAllRetailerIds() {
  return DetailedTableData.product_kpis.map((productKpi) => {
    return productKpi.retailer_id;
  });
}

export function removeDuplicates(arr: any[]) {
  return arr.filter((element, index) => {
    return arr.indexOf(element) === index;
  });
}
