declare module "luxon" {
  export class Duration {

  	static fromISO(text: string, opts?: object): Duration;
  	static fromMillis(count: number, opts?: object): Duration;
  	static fromObject(obj: object): Duration;

  	as(unit: string): number;
  	get(unit: string): number;

  	toFormat(fmt: string, opts?: object): string;
  	toObject(opts?: any): object;
  }
}