// //  Destructuring ....................>>>>>>>>>     
// let a, b, rest;
// [a, b] = [10, 20];

const { receiveMessageOnPort } = require("worker_threads");

// console.log(a);
// // Expected output: 10
// [a,b, ...rest]=[2,4,5,6,7,8,9,9,0]
// console.log(rest);


// swapping value
// let a=5;
// let b=1;
// [a,b]=[b,a]
// console.log(a+'\n'+b)

// let [tomato , mushroom ]= ['🍅','🍄'];
// console.log(tomato); 
// console.log(mushroom ); 

//<<<<<<<<<<<-------------nested array--------->>>>>>>>>>>>

// let fruits = ['🍈', '🍍', '🍌', '🍉', '🍅',[ '🍄', '🥕']];
// let veg=fruits[5]
// let fr=fruits.slice([0],[4])
// console.log("fruits ="+fr+'\n'+"and veg ="+veg)

// let [,,,,[,,carrot]] =[2,4,5,6,7,8,9,9,0]
//  console.log(carrot)

// const salad = [2,4,5,6,7,8,9,9,0]

// const saladCloned = [...salad];
// console.log(saladCloned); 

// let b=salad == saladCloned
// console.log(b)

//<<<<<<<<<<--------concat--------->>>>>>>>>//
// let a=[1,2,3]
// let b=[4,5,6]
// let c=[6,7,8]
// let d=[6,7,8]
// let e=[6,7,8]
// let f=[6,7,8]
// merge=a.concat(b,c,d,e,f)
// console.log({merge})
//<<<<<<<<<<--------join--------->>>>>>>>>//
// const a=["q","w","e","r","t","y","u","i"]
// const join=a.join('!and')
// console.log({join})
// console.log({join})
//<<<<<<<<<<--------splice--------->>>>>>>>>//
// const a=["q","w","e","r","t","y","u","i"]
// a.splice(1,0,"raul")
// console.log(a)
//<<<<<<<<<<--------filter--------->>>>>>>>>//
//const result = words.filter(word => word.length > 6);

// function isBigEnough(value) {
//     return value >= 10;
//   }
  
//   const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
//   // filtered is [12, 130, 44]
  

let students = [
    {
       'id': 001,
       'f_name': 'Alex',
       'l_name': 'B',
       'gender': 'M',
       'married': false,
       'age': 22,
       'paid': 250,  
       'courses': ['JavaScript', 'React']
    },
    {
       'id': 002,
       'f_name': 'Abraham',
       'l_name': 'M',
       'gender': 'M',
       'married': true,
       'age': 32,
       'paid': 150,  
       'courses': ['JavaScript', 'PWA']
    },
    {
       'id': 003,
       'f_name': 'Ruby',
       'l_name': 'S',
       'gender': 'F',
       'married': false,
       'age': 27,
       'paid': 350,  
       'courses': ['Blogging', 'React', 'UX']
    },
    {
       'id': 004,
       'f_name': 'Zach',
       'l_name': 'F',
       'gender': 'M',
       'married': true,
       'age': 36,
       'paid': 250,  
       'courses': ['Git', 'React', 'Branding']
    } 
 ];

// const female=students.filter((Element,index)=>{
// return Element.gender=="F"
// })
// console.log(female)

//---------prime number filter----->>>>>>>>..//

// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// function isPrime(num){
//     for(let i=2; num>i; i++){
//         if(num % i===0){
//             return false
//         }
//     } 
//     return num >1
// }

// const prime= array.filter(isPrime)
// console.log(prime)


// const words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
// const deleteWords = words.filter((word, index, arr) => {
//   arr.pop();
//   return word.length < 6;
// });
// console.log(words)

//<<<<<<<<<<<<---------map----->>>>>>>>..//

//The map() method creates a new array by iterating through the elements and applying logic we provided in the function as an argument.
// We'll create a new array of full names of all the students in the students array.

// const fullNames = students.map((element, index) => {
//     return {'fullName':element['f_name']+" "+element['l_name']}
//   });
  
//   console.log(fullNames);

// const array1 = [1, 4, 9, 16];

// // Pass a function to map
// const map1 = array1.map(x=>x* 2);

// console.log(map1);
// //output: Array [2, 8, 18, 32]
// const numbers = [1, 4, 9];
// const roots = numbers.map((num) => Math.sqrt(num));
// console.log(roots)
// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]

// const array=[1,2,3]
// const newOne=array.map((num)=>Math.sqrt(num))
// console.log(newOne)

// var a=["1", "2", "3"]
// var b= a.map((num)=>parseInt(num))
// console.log(b)

//<<<<<<<<<<<<---------reduce----->>>>>>>>..//

// const total = students.reduce(
//     (accumulator, student, currentIndex, array) => {
//        accumulator = accumulator + student.paid;
//        return (accumulator);
//     }, 
//  0);
 
//  console.log(total);
//<<<<<<<<<<<<---------reduce()----->>>>>>>>..//


// const student = students.find((element, index) => {
//     return element.age < 30;
//   });
  
//   console.log(student);

//<<<<<<<<<<<<--------find()----->>>>>>>>..//
// const student = students.find((element, index) => {
//     return element.age < 30;
//   });
  
//   console.log(student);
//<<<<<<<<<<<<--------every()----->>>>>>>>..//

// const atLeastTwoCourses = students.every((elements, index) => {
//     return elements.courses.length >= 2;
//   });
  
//   console.log(atLeastTwoCourses); // true

// const array1 = [1, 30, 39, 29, 10, 13];

// console.log(array1.every((min) =>min < 40));
// // Expected output: true


// function isBigEnough(element, index, array) {
//     return element <= 130;
//   }
//   var a=[12, 5, 8, 130, 44].every(isBigEnough); // false
//   var b=[12, 54, 18, 130, 44].every(isBigEnough); // true
//   console.log(a+'\n'+b)

// const arrayLike = {
//     length: 3,
//     0: "a",
//     1: "5",
//     2: "c",
//   };
//   console.log(
//     Array.prototype.every.call(arrayLike, (x) => typeof x === "string"),
//   ); // true


//<<<<<<<<<<<-------------find()--------->>>>>>>>>>>>
// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find(element => element > 5);

// console.log(found);
// // Expected output: 12

// const inventory = [
//     { name: "apples", quantity: 2 },
//     { name: "bananas", quantity: 0 },
//     { name: "cherries", quantity: 5 },
//   ];
  
//   const result = inventory.find(({name} ) => name === "cherries");
  
//   console.log(result); // { name: 'cherries', quantity: 5 }

//<<<<<<<<<<<-------------forEach()--------->>>>>>>>>>>>
// const array1 = ['a', 'b', 'c'];
// array1.forEach(element => console.log(element));    


// const months = [2,3,4,5,6,7,1,3];
// months.sort();
// console.log(months);
// // Expected output: Array ["Dec", "Feb", "Jan", "March"]

// //<<<<<<<<<<<-------------sort()--------->>>>>>>>>>>>
// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);
// // Expected output: Array [1, 100000, 21, 30, 4]
// //<<<<<<<<<<<-------------created server using express()--------->>>>>>>>>>>>
// const express=require('express')
// const app=express()
// const port=8080;
// app.get('/',(req,res)=>{   
//    res.send('hello mr Paswan')
// })
// app.listen(port,()=>{
// console.log('server is running',port)
// })

// //<<<<<<<<<<<-------------Initialize a promise--------->>>>>>>>>>>>

// const promise = new Promise((resolve, reject) => {
//    setTimeout(()=> resolve('Resolving an asynchronous request!'), 2000)
     
//    })
// promise.then((resolve)=>{
//    console.log(resolve,"message is resolve")
// })


// //<<<<<<<<<<<-------------switch statement--------->>>>>>>>>>>>
// var fruits='papaya';
// switch(fruits){
//    case 'mango':
//       console.log("mango is good for health")
//    break;
//    case 'apple':
//    console.log("apple have many variety")
//    break;
//    case 'papaya':
//       console.log("papaya is good for health")
//       break;
//       default:
//          console.log("papaya is not found for health")
//  }


// //<<<<<<<<<<<------------using recursion--------->>>>>>>>>>>>

// program to count down numbers to 1


// for (let i = 1; i <= 10; i++) {
//   console.log(`5 * ${i}=${5*i}`)
//  }
 
//<<<<<<<<<------------leet code solve--->>>>>>>>>>>>>>>>//
// var arraySign = function(nums) {
//     let sign = true;
//     for(let i = 0; i < nums.length; i++) {
//         if(nums[i] == 0) return 0;
//         if(nums[i] < 0) sign = !sign;
//     }    
//     return sign ? 1 : -1;
// };
// nums = [-1,-2,-3,-4,3,2,1]
// console.log(arraySign(nums));


// nums = [1,2,3]
// console.log(nums[2])


// let rat= prompt('enter number')
// let str="";
// for(let i=1;i<=5;i++){
//    if(i<=rat){
//       str+="*";
//    }
//    else{
//       str+="_";
//    }
// }
// console.log(str)

// //<<<<<<<---------reverse-------->>>>>>>
// function FirstReverse(str) { 
//   var reversedStr = '';
//   for (var i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
//   }
//   return reversedStr;
// }

// // Example usage:
// console.log(FirstReverse('Hello, world!')); // Outputs !dlrow ,olleH

// //<<<<<<<---------factorial-------->>>>>>>
// function FirstFactorial(num) { 
//   if (num === 0 || num === 1) {
//     return 1;
//   } else {
//     return num * FirstFactorial(num - 1);
//   }
// }

// // Example usage:
// console.log(FirstFactorial(5)); // Outputs 120
// //<<<<<<<---------factorial-------->>>>>>>

function SearchingChallenge(str) {
   // Extract all the numbers from the string and sum them up
   const nums = str.match(/\d+/g).map(Number);
   const sum = nums.reduce((acc, element) => acc + element, 0);
  
   
   // Count the number of letters in the string
   const letters = str.match(/[a-zA-Z]/g).length;
   
   // Calculate the final result and round it to the nearest whole number
   const result = Math.round(sum / letters);
   
   return result;
 }
 console.log(SearchingChallenge("Hello6 9World 2, Nic8e D7ay!")); // Output: 2
 
 //<<<<<<<<<---------->>>>>>>>>>>>>>>>>>>>
 function Division(num1, num2) { 
    var largestFactor = 1; 
    var smallerNum; 

    if (num1 > num2) { 
        smallerNum = num2; 
    } else { 
        smallerNum = num1; 
    }          

    for (i = 1; i <= smallerNum; i++) { 
        if ((num1 % i === 0) && (num2 % i === 0) && (i > largestFactor)) { 
            largestFactor = i; 
        } 
    } 
    return largestFactor; 
} 

//<<<<<<<<<------promises---->>>>>>>>>>>>>>>>>>>>


// // let data=new Promise((resolve,reject)=>{
// //     setTimeout(()=>{
// //         resolve({data:3,4:"mohit",1:"ram",date:"new date()"})

// //     },)
// // })
// // data.then((data)=>{
// //     console.log(data)
// // })
// // console.log("hero")


let data=fetch("http:localhost:8000/api/v1/auth/find")
data.then((item)=>{
    return item.json()

}).then((result)=>{
    console.log(result)
})


 
