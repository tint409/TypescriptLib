﻿//https://hackernoon.com/building-and-publishing-a-module-with-typescript-and-rollup-js-faa778c85396

import { Calculator } from "./Modules/Calculator.js"

export { Calculator }
export let pi = new Calculator();