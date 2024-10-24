export default class Logger {
  protected name: string=""
  constructor(name:string)
  debug(...str: string[])
  log(...str: string[])
  warn(...str: string[])
  error(...str: string[])
  fatal(...str: string[])
}