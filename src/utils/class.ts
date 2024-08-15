import { Money } from "./interfase";

export class MoneyClass implements Money {
    short_term: number = 0;
    medium_term: number = 0;
    long_term: number = 0;
  
    constructor(short_term?: number, medium_term?: number, long_term?: number) {
      this.short_term = short_term ?? 0;
      this.medium_term = medium_term ?? 0;
      this.long_term = long_term ?? 0;
    }
  }