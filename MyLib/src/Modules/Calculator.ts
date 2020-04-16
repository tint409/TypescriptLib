import { internalParse } from "./Helpers/Parser.js"

export class Calculator {
    add(x: number, y: number): number {
        return x + y;
    }
    addStr(x: string, y: string): number {
        return internalParse(x) + internalParse(y);
    }
    minus(x: number, y: number): number {
        return x - y;
    }
}