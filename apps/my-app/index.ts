// index.ts
import { greet } from "@my-lib/index";
import { otherFunction } from "@my-lib/helpers";
import { cloneDeep } from "lodash";

const a = { a: 42 };
const b = cloneDeep(a);
console.log(greet("b"));
otherFunction();
