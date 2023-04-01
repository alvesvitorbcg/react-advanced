import IProduct from './IProduct';

export default interface IMergedDetailedTableWithProducts {
  product_kpis: {
    product: IProduct | undefined;
    product_id: number;
    retailer_id: number;
    volume: number;
    baseline_volume: number;
    profit_waterfall_cpg: {
      baseline: number;
      uplift: number;
      discount: number;
      execution_cost: number;
      cannibalization: number;
      pull_forward: number;
      total: number;
    };
    profit_waterfall_retailer: {
      baseline: number;
      uplift: number;
      discount: number;
      execution_cost: number;
      cannibalization: number;
      pull_forward: number;
      total: number;
    };
    sales_waterfall_cpg: {
      baseline: number;
      uplift: number;
      discount: number;
      execution_cost: number;
      cannibalization: number;
      pull_forward: number;
      total: number;
    };
    sales_waterfall_retailer: {
      baseline: number;
      uplift: number;
      discount: number;
      execution_cost: number;
      cannibalization: number;
      pull_forward: number;
      total: number;
    };
  }[];
  calendar_id: number;
  name: string;
  start_date: string;
  end_date: string;
  promo_events: {
    promo_id: number;
    product_id: number;
    start_date: string;
    end_date: string;
    retailer_id: number;
    promo_spend: number;
    price_mechanics: {
      value: number;
      type: string;
      unit: string;
      multiple: number;
    };
    execution_mechanics: { execution_flags: string };
    product_kpi: {
      product_id: number;
      retailer_id: number;
      volume: number;
      baseline_volume: number;
      profit_waterfall_cpg: {
        baseline: number;
        uplift: number;
        discount: number;
        execution_cost: number;
        cannibalization: number;
        pull_forward: number;
        total: number;
      };
      profit_waterfall_retailer: {
        baseline: number;
        uplift: number;
        discount: number;
        execution_cost: number;
        cannibalization: number;
        pull_forward: number;
        total: number;
      };
      sales_waterfall_cpg: {
        baseline: number;
        uplift: number;
        discount: number;
        execution_cost: number;
        cannibalization: number;
        pull_forward: number;
        total: number;
      };
      sales_waterfall_retailer: {
        baseline: number;
        uplift: number;
        discount: number;
        execution_cost: number;
        cannibalization: number;
        pull_forward: number;
        total: number;
      };
    };
  }[];
}
