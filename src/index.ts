// Basic/Primitive Types
let id: number = 1;
let username: string = "Six";
let isOnline: boolean = true;

// Arrays
let number: number[] = [23, 34, 39, 30];
let spcificOrder: [number, boolean, string] = [12, true, "orange"];

//Tuple Array
let arrOfArr: [number, string][] = [
    [1, "red"], [2, "blue"], [3, "green"]
];

//Enums
enum dir {
    UP,
    DOWN,
    LEFT,
    RIGHT,
}

//Assertions
let cid: any = 1;
let customerId = <number>cid;

//Unions
let pid: number | string = "1";
pid = "one";

// Objects
type User = {
    id: number,
    name: string
}

let user: User = {
    id: 1,
    name: "red"
}

//functions 
function add(a: number, b:number): number{
    return a +b;
}
add(3, 2);

//Void Functions
function log(msg: string, name: string): void{
    console.log(`Hello ${name}, ${msg}`);
}

//interfaces
// interface can't use unions
interface UserInterface {
    id: number,
    name: string,
}

let vipUser: UserInterface = {
    id: 1,
    name: "blue"
}

interface MathFunc {
    (x: number, y: number) : number
}

const addition: MathFunc = (a, b) => a + b;
const division: MathFunc = (a, b) => a / b;


addition(5, 7);
division(90, 6);