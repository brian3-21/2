export interface FinancialChartProps{
  dataChart:Money
}
export interface Money {
    id: string;
    short_term: number;
    medium_term: number;
    long_term: number;
  }