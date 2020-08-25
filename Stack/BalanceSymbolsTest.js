import {parenthesesChecker} from "./BalanceSymbols.js";

console.log('{([])}', parenthesesChecker('{([])}')); // true
console.log('{{([][])}()}', parenthesesChecker('{{([][])}()}')); // true
console.log('[{()]', parenthesesChecker('[{()]')); // false
