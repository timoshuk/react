import Log from "./log";
import Calc from "./calc";
import img from "./logo.png";

const calc = new Calc();
const log = new Log();

log.log(calc.add(1, 2, 3));
