let id: number = 5
let company: string = 'Traversy Media'
let isPublished: boolean = true
let x: any = 'Hello'
x = true 
let age: number 
age = 10

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true, 'Hello']

//TUPLE
let person: [number, string, boolean] = [1, 'Heello', true]

//Tuple Array
let employee: [number, string][]
employee = [
    [1, 'Bran'],
    [2, 'John'],
    [3, 'Jill']
]

//UNION - can hold multiple types
let pid: string | number
pid = '22'
pid = 22

//ENUM -  Numeric by default
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

//OBJECTS
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}
    //annaunimous declaration possible for Objects
const uxer: {
    id: number,
    name: string
} = {
    id: 1,
    name: 'john'
}

//TYPE ASSERTION
let cid: any = 1
// let customerId = <number>cid 
let customerId = cid as number 


//FUNCTIONS -
function addNum(x: number, y: number): number  {
    return x + y
}

    //void return type in function
function log(message: string | number): void {
    console.log(message)
}


//INTERFACES
interface UserInterface {
    // readonly id: number
    id: number
    name: string 
    age?: number  //optional entry
}

const user1: UserInterface = {
    id: 1,
    name: 'John',
}

interface MathFunc {
    (x: number, y: number): number 
}

const add: MathFunc = (x: number, y: number): number => x + y 
const sub: MathFunc = (x: number, y: number): number => x - y 




interface PersonInterface {
    id: number
    name: string 
    register(): string
}

//CLASSES
// class Person {
class Person implements PersonInterface {
    id: number
    name: string 

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }

    register(){
        return `${this.name} is now registered`
    }
}
const brad = new Person(1, 'Brad Traversy')
const mike = new Person(2, 'Michael Jordan')

    //Subclass - extending classes - inheritance
class Employee extends Person {
    position: string 

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Shawn', 'Developer')

//GENERICS 
// function getArray(items: any[]): any[] {
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

// let numArray = getArra([1,2,3,4])
let numArray = getArray<number>([1,2,3,4])
// let strArray = getArray(['Brad', 'John', 'Jill'])
let strArray = getArray<string>(['Brad', 'John', 'Jill'])

// numArray.push('Hello')
numArray.push(9)



console.log('ID:', id)