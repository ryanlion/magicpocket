import { Base } from './base.model';

export interface StockHistory extends Base {
  timestamp: string;
  tradingDay: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  openInterest: string;
}
