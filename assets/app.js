// --------------operators----------------
let a = 5;
let b = 2;
console.log("a + b = ", a + b);
let aa = 30;
let bb = 4;
console.log("aa + bb =", aa + bb)

let aaa = 30;
let bbb = 20;
console.log("aaa * bbb =", aaa * bbb);

let one = 20;
let two = 30;
console.log("one - two = ", one - two);

let three = 40;
let four = 50;
console.log("three + four =", three - (-four));

let five = 3;
let six = 3;
console.log("five ** six =", five ** six);



// ------------settimeout--------------
setTimeout(() => {
    let seven = 7;
    let eight = 8;
    console.log("seven = ", seven, "& eight = ", eight);
}, 2000);
console.log("abc")
// -----------turefalse---------------
let aaaa = 40;
let bbbb = 40;
console.log("40 == 40", aaaa == bbbb);

let truue = 50;
let falsee = 30;
console.log("50 == 30", truue == falsee);

let are = 40;
let era = 40;
console.log("40 == 40", are == era);


//    ------------operators in js (logical and &&)-------------
let x = 9;
let y = 8;
let condition1 = x > y;
let condition2 = x === 9;
console.log("condition1 && condition2 =", condition1 && condition2);


let xy = 10;
let yx = 12;
let cond1 = xy < yx;
let cond2 = xy === 10;
console.log("cond1 && cond2 = ", cond1 && cond2)


//-------------logical or (//)---------------

let xxy = 20;
let yyx = 30;
let con1 = xxy < yyx;
console.log("con1 // con2 = ", xxy < yyx && xxy === yyx);


//  --------------logical not (!)---------------
let i = 5;
let j = 6;
console.log(!(i === 5));



//  ---------------if-else----------------



let age = 20;
if (age >= 18) {
    console.log(" give vote")
}
if (age < 18) {
    console.log("not give vote")
}



let mode = "dark"
let color;
if (mode === "dark") {
    color = "red"
} if (mode === "blue ") {
    color = "orange"
}
console.log(color);



let modes = "green";
let colors;
if (modes === "blue") {
    colors = "red"
} else if (modes === "green") {
    colors = "black"
} else {
    colors = "white";
}
console.log(colors);

let num = prompt("");

if (num % 2 === 0) {
    console.log("it is even number")
}
else {
    console.log("it is odd number")
}


//  ------------this---------------
const user = {
    name: "abc",
    birthday: 1990,
    birth: function () {
        const currentyear = (new Date()).getFullYear();
        return currentyear - this.birthday;
    }
}
console.log(user.birth());


const use = {
    name: "abcd",
    birtht: 1200,
    birthh: function () {
        const currentyear = (new Date()).getFullYear();
        return currentyear - this.birtht;
    }
}
console.log(use.birthh());
// ------------Coercion-------------
let aab = 2;
let bba = "4";
console.log("aab + bba = ", aab + bba);
let ccc = "3";
let ddd = "4";
console.log("ccc - ddd =", ccc - ddd)

let aac = true;
let cca = 1;
console.log(aac === cca);
let ccca = false;
let aaac = 0;
console.log(ccca == aaac);
console.log(4 + "4");
console.log("4" + "5");
console.log(4 + 4);


 let v = -1;
 let r = 1;
 console.log(v + r)
