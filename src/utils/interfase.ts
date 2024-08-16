

export interface FinancialChartProps{
  dataChart:MoneyUser
}

export interface MoneyUser {
  id:string,
  money:Money,
}

export interface Money {
    short_term: number;
    medium_term: number;
    long_term: number;
  }