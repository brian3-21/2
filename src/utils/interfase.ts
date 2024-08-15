import { MoneyClass } from "./class";

export interface FinancialChartProps{
  dataChart:MoneyUser
}

export interface MoneyUser {
  id:string,
  money:MoneyClass,
}

export interface Money {
    short_term: number;
    medium_term: number;
    long_term: number;
  }