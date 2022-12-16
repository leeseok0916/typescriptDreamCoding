{// javascript type
/**
  - Primitive : number, string, boolean, binint, null, undefined
  - Object : function, array…
 */

// number
const num:number = -6

// string
const str:string = 'aaaaa';

// boolean
const bool:boolean = true;

// undefined
let age: number | undefined;
age = undefined;
age = 1;

// null
let person: string | null;

// unknown
let notSure: unknown = 0;
notSure = 'a';
notSure = true;

// any
let anything: any = 0;
anything = 'hello';

// void
function print(): void {
  console.log('--------------------------------');
  return;
}

// never
function throwError(message: string): never {
  throw new Error(message);
}

// object
let obj: object;
function acceptSomeObject(obj: object):  {}
acceptSomeObject({ name: 'twostones' });
acceptSomeObject({ animal: 'dog' });}