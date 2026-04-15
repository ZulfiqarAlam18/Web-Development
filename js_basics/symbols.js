let a = Symbol("id");
let b = Symbol("id");

console.log(a === b); // false



let user = {
  name: "Zulfi"
};

let id = Symbol("id");

user[id] = 101;

console.log(user[id]); // 101