declare module "luxon" {
  export class Duration {

    static fromISO(text: string, opts?: object): Duration;
    static fromMillis(count: number, opts?: object): Duration;
    static fromObject(obj: object): Duration;
    static invalid(reason: string, explanation?: string): Duration;

    as(unit: string): number;
    get(unit: string): number;

    toFormat(fmt: string, opts?: object): string;
    toObject(opts?: any): object;
    toISO(): string;

    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;

    conversionAccuracy: string;
    isValid: boolean;
  }
}