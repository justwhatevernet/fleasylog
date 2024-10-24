import chalk from "chalk"
const colors = {
  "LOG":[255,255,255],
  "WARN":[255, 145, 0],
  "ERROR":[255, 60, 60],
  "FATAL":[209, 15, 15],
  "DEBUG":[50, 145, 250]
}
function getTimeStamp() {
  let date = new Date()
  return `[${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}]`
}
function custom(type,name,...str) {
  console.log(chalk.rgb(colors[type][0],colors[type][1],colors[type][2])(`${getTimeStamp()} [${name}] [${type}] ${str.join(", ")}`))
}
export default class Logger {
  constructor(name) {
    this.name = name
  }
  debug(...str) {
    custom("DEBUG",this.name,...str)
  }
  log(...str) {
    custom("LOG",this.name,...str)
  }
  warn(...str) {
    custom("WARN",this.name,...str) 
  }
  error(...str) {
    custom("ERROR",this.name,...str)
  }
  fatal(...str) {
    custom("FATAL",this.name,...str)
  }
}