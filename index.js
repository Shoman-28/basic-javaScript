
//while loop
var num = 10;
while (num <= 15){
    console.log(num);
    num++
}

//for loop
for (var i = 0; i <= 10; i++){
    console.log(i);
}
var num = [33, 32, 11, 12, 13, 14, 13];
for (var i = 0; i <= num.length; i++){
    var element = num[i];
    console.log(element);
}

//call function
function shoman(name){
    let result = name * 2;
    return result;

    // console.log(result);

}
shoman( 5);
let fast = shoman(4);
let secend = shoman(3);
 let total = fast+secend;
 console.log(total);
 console.log(fast, secend);

// JavaScript object
let student = { id:20, phone:001122, name:"shoman"};
let student2 = { id:210, phone:00112244, name:"555shoman"};
let student3 = { id:210, phone:00112244, name:"555shoman"};
console.log(student);

let id = student.id;
console.log(id);

let nam = student["name"];
console.log(nam);

// set new phone number.
let mahi = student.phone = 22;
console.log(mahi);

let mahi2 = student['phone'] = 522;
console.log(mahi2);

// add new object
let rmahi = student2.cinama = 'ww242';
console.log(student2);