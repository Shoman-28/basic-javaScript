
// //while loop
// var num = 10;
// while (num <= 15){
//     console.log(num);
//     num++
// }

// //for loop
// for (var i = 0; i <= 10; i++){
//     console.log(i);
// }
// var num = [33, 32, 11, 12, 13, 14, 13];
// for (var i = 0; i <= num.length; i++){
//     console.log('shoman');

// }

// var num = [33, 32, 11, 12, 13, 14, 13];
// for (var i = 0; i <= num.length; i++){
    
//     console.log(element);
// }

// //call function
// function shoman(name){
//     let result = name * 2;
//     return result;

//     // console.log(result);

// }
// shoman( 5);
// let fast = shoman(4);
// let secend = shoman(3);
//  let total = fast+secend;
//  console.log(total);
//  console.log(fast, secend);

// function add(number1, number2){
//     let total = number1 +number2;
//     return total;
// }
// let result = add(44, 45);
// console.log(result);

// console.log("shoman");
// console.log("jahid");

// let result2 = add(441, 145);
// console.log(result2);

// function largestNumber(number){
//     var larger = number[0];

//     for (var i =0; i < number.length; i++){
//         var element = number[i];
//         if(element > larger){
//             larger = element;
//         }

//     }
   
//     return larger;
// }

// var output = largestNumber([11, 123, 132, 441, 145]);
// console.log('output', output);


// // JavaScript object
// let student = { id:20, phone:001122, name:"shoman"};
// let student2 = { id:210, phone:00112244, name:"555shoman"};
// let student3 = { id:210, phone:00112244, name:"555shoman"};
// console.log(student);

// let id = student.id;
// console.log(id);

// let nam = student["name"];
// console.log(nam);

// // set new phone number.
// let mahi = student.phone = 22;
// console.log(mahi);

// let mahi2 = student['phone'] = 522;
// console.log(mahi2);

// // add new object
// let rmahi = student2.cinama = 'ww242';
// console.log(student2);

// convart kilometer to meter
// function kelometerToMeter(kelometer){
//     if(kelometer < 0){
//         return "please enter you positive number"; 
//     }else{
//         let meter = kelometer * 1000;
//         return meter;
//     }
// }
// console.log(kelometerToMeter(3));

// factorial
// let i = 1;
// let factorial = 1;
// while(i <= 10){
//     factorial = factorial * i;
//     // console.log(i, factorial);
//     i++
    
// }
// console.log(i, factorial);

// function factorial(number){
//     let i = 1;
//     let factorial = 1;
//     while(i <= number){
//         factorial = factorial * i;
//         // console.log(i, factorial);
//         i++
//     }
//     return factorial;
// }
// var result = factorial(6);
// console.log(result);

// function factorial(num){
//     let i = 1;
//     let fact = 1;
//     while(i <= num){
//         fact = fact * 1;
//         i++
//     }
//     return fact;
// }
// let result = factorial(5);
// console.log(result);

//  function factorial(n){
//      let fact = 1;
//      for(let i = 1; i <= n; i++){
//         fact = fact * i;
//      }
//      return fact;
//  }
//  let result = factorial(77)
//  console.log(result)

// function factorial(n){
//     if( n == 0){
//         return 1;
//     }else{
//         return n * factorial(n - 1);
//     }
// }
// let result = factorial(5);
// console.log(result);

// fibonacci
let fibo = [0, 1];
for(let i = 2; i <= 10; i++){

    fibo[i] = fibo[i - 1] + fibo[i - 2];
    // console.log(fibo[i], fibo[i-i], fibo[i-2]);
}
console.log(fibo);

function fibonacci(n){
    
    if(n == 0){
        return 0;
    } if(n == 1){
        return 1;
    }else{
        return fibonacci(n -1) + fibonacci(n -2);
    }
}
let result = fibonacci(10);
console.log(result);
function fibonacci(n){
    let fibo = [0, 1];
    if(n == 0){
        return [0];
    } if(n == 1){
        return [0, 1];
    }else{
        return fibonacci(n -1) + fibonacci(n -2);
    }
}
let result = fibonacci(10);
console.log(result);

################# javaScript problem ###############

var a = 4;
var b = 5;
console.log("before swap: a =", a, "b =", b);
var temp = a;
var a = b;
var b = a;
console.log("after swap: a =", a, "b =", b)
 var x = 5;
 var y = 3;
 x = x + y;
 y = x - y;
 x = x - y;
 console.log("after swap: x =", x, "y =", y);
  var p = 4;
  var q = 3;
  [p, q] = [q, p];
  console.log("after swap: p =", p, "q =", q);

Array

let arry = [23, 21, 33, 44, 24, 55];
let sum = 0;
for(i = 0; i < arry.length; i++){
   var element = arry[i];
    sum = sum + element;
}
console.log(sum);
function array(number){
    
    let sum = 0;
    for(i = 0; i < number.length; i++){
    var element = number[i];
        sum = sum + element;
    }
    return sum;

}
let number = [23, 21, 33, 44, 24, 55];
let result = array(number);
console.log(result);

let total = array([20, 40, 45, 60, 50, 40, 45, 60,]);
console.log(total);

uniqueName
let name = [20, 40, 45, 60, 50, 40, 45, 60,];
let uniqueName = [];
for( let i = 0; i < name.length; i++){
    let element = name[i];
    let index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);

function uniqueNumber(name){
    
    let uniqueName = [];
    for( let i = 0; i < name.length; i++){
        let element = name[i];
        let index = uniqueName.indexOf(element);
        if(index == -1){
            uniqueName.push(element);
        }
    }
    return uniqueName;
    
}
let name = [20, 40, 45, 60, 50, 40, 45, 60,];
let number = uniqueNumber(name);
console.log(number);

 reverse
 
function forAlien(str){
    let reverse = "";
    for(let i = 0; i < str.length; i++){
        let char = str[i];
         reverse = char + reverse;
    }
    return reverse;
}
let statement = "Hello, I am Shoman";
// let result = forAlien(statement);
// console.log(result)

console.log(forAlien(statement))