import chalk from "chalk"
export default class Logger {
  colors = {
    "LOG":[0,0,0],
    "WARN":[255, 145, 0],
    "ERROR":[255, 60, 60],
    "FATAL":[209, 15, 15],
    "DEBUG":[50, 145, 250]
  }
  darkColors = {
    "LOG":[255,255,255]
  }
  constructor(name,darkMode) {
    this.name = name
    if(darkMode) {
      for (const key in this.darkColors) {
        const element = this.darkColors[key];
        this.colors[key] = element
      }
    }
  }
  getTimeStamp() {
    let date = new Date()
    return `[${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}]`
  }
  custom(func,type,...str) {
    func(chalk.rgb(this.colors[type][0],this.colors[type][1],this.colors[type][2])(`${this.getTimeStamp()} [${this.name}] [${type}] ${str.join(", ")}`))
  }
  debug(...str) {
    this.custom(console.debug,"DEBUG",this.name,...str)
  }
  log(...str) {
    this.custom(console.log,"LOG",this.name,...str)
  }
  warn(...str) {
    this.custom(console.warn,"WARN",this.name,...str) 
  }
  error(...str) {
    this.custom(console.error,"ERROR",this.name,...str)
  }
  fatal(...str) {
    custom(console.error,"FATAL",this.name,...str)
  }
}