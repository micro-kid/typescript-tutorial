interface Person {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: string | number;
}

let tom: Person = {
  id: 1,
  name: 'Tom',
  age: 25,
  gender: 'male'
};

console.log(tom)