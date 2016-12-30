import { Base } from './base.model';

export interface Stock extends Base {
  name: string;
  code: string;
  description: string;
  market: string;
}
