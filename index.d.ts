export default class Logger {
  protected colors: {[key:string]:[number,number,number]}
  protected darkColors: {[key:string]:[number,number,number]} //If darkmode is true apply these dark colors on top of colors
  protected name: string;
  constructor(name:string,darkMode:boolean)
  protected getTimeStamp(): string
  custom(func:(...str) => void,type: "LOG"|"DEBUG"|"WARN"|"ERROR"|"FATAL",...str: string[]): void
  debug(...str:string[]): void
  log(...str:string[]): void
  warn(...str:string[]): void
  error(...str:string[]): void
  fatal(...str:string[]): void
}