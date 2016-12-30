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

  filter?: historyFilter;

  sessionCode?: string;
  tickPrice?: string;
  tickSize?: string;
}
interface historyFilter{
  startDate: string;
  endDate: string;
  maxRecords: string;
  interval: string;
  sessionFilter: string;
  splits: string;
  dividends: string;
  volume: string;
  nearby: string;
  exchange: string;

}
