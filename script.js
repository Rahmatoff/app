// // // function number(num){
// // //     let newNumber = num - 1;

// // //     if(newNumber > 0){
// // //         number(newNumber);
        
// // //         console.log(newNumber);
// // //     }

// // // }

// // // number(99);

// // // ----new one----


// // let num2 = 1;


// // function num(num1){
// //     console.log(`${num2} * ${num1} = ${num1*num2}` );
// //     num2++;
// //    if(num2 <=10){
// //      num(num1);
// //    }

// // }


// // num(7);
fdjfalldfjlsdl





// // // function factorial(x) {

// // //     // if number is 0
// // //     if (x === 0) {
// // //         return 1;
// // //     }

// // //     // if number is positive
// // //     else {
// // //         return x * factorial(x - 1);
// // //     }
// // // }


// // // console.log(factorial(5));



// // const student = { 
// //     name: 'John', 
// //     age: 20,
// //     marks: {
// //         science: 70,
// //         math: 75
// //     }
// // }


// // console.log(student);a







// // function Person(){
// //     this.name = 'Jonh',
// //     this.age = 23
// // }

// // const person = new Person();

// /////////////////




// // const noSpace=x=>x.split(" ").join("");




// // function noSpace(x){
// //     return x.split(" ").join("");
// //   }





// //   function noSpace(x){
// //     return x.replace(/\s/g, '');
// //   }




// //   const noSpace = x => x.replace(/ /g, "");




// //   function noSpace(x){
// //     var result = ""
// //     for(var index = 0; index < x.length; index++){
// //       if(x[index] !== " "){
// //         result += x[index];
// //       }
// //     }
// //     return result;
// //   }




// //   function noSpace(x){
// //     return x.replace(/ /g,'')
// //  }



// ///////////////

// // function abbrevName(name){

// //     let nameArray = name.split(" ");
// //     return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
// //   }


// // console.log( abbrevName('Rahmatov Azizbek'));




// // function abbrevName(name){

// //     let nameArray = name.split(" ");
// //     return nameArray[0][0].toUpperCase() + "." + nameArray[1][0].toUpperCase();
// //   }


// // console.log( abbrevName('Rahmatov Azizbek'));




// //////////////////////






// function stringToArray(string){

//     let newStr = "";
//      let result = [];
//      for (let i= 0; i < string.length; i++) {
//         if (string[i]!==" "){
//             newStr = newStr + string[i]
//         }  
//         else{
//             result.push(newStr);
//             newStr = "";
//         }                                                                                                                                                  
//      }
//      result.push(newStr);
//      return result;
//  }


//  console.log(stringToArray('ali and vali'));



// function twoSort(s) {
//     return s.sort()[0].split('').join('***');
//   }
  
//   console.log(['banan', 'apelsin', 'mango']);

// console.log(twoSort(['banan', 'apelsin', 'mango']));
 



// function sumMix(x = [9, 8, '6']){
//     let somme = 0;
//     for (i = 0; i<x.length; i++) {
//       somme += Number(x[i]);
//     }
//     return somme;
//   }


// console.log(sumMix());



// const words = [
//     'I love you',
//     'a little',
//     'a lot',
//     'passionately',
//     'madly',
//     'not at all',
// ];


// function  howMuchILoveYou(n){
//   return  words[(n-1)%words.length];
// }


// console.log(howMuchILoveYou(2));


/////////////////////////





// function expressionMatter(a, b, c) {
//     if (a == 1 && b == 1 && c == 1) {
//       return 3;
//     } else if (a == 1 && c == 1) {
//       return a + b + c;
//     } else if ((a == 1 || c == 1) || (a != 1 && b == 1 && c != 1)) {
//       return a < c ? (a+b)*c : a*(b+c);
//     } else {
//       return a * b * c;
//     }
//   }


//   console.log(expressionMatter(9, 6, 3));










// let newArr = arr.map(num => num * 3);

// console.log(newArr);

// console.log(arr);



// let newArr = arr.filter(num => num % 2 ===0);

// console.log(newArr);



// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];


// let newArr = animals.slice(1, 3);

// console.log(newArr);
// console.log(animals);






// const arr = [1, 2, 3, [12, 13]];

// let newA = arr.flat();

// console.log(newA);




// let arr = [3, 5, 7, 9, 12,0];



// let newAr = arr.splice(1, 5, 'drum', 'newww');

// // console.log(newAr);

// // console.log(arr);
// // console.log([...arr]);

// let res = arr.map(num => num )


// console.log(res);





// const person = {
//   name:"John",
//    name1:"Doe", 
//    age:25
//   };



//   let text = '';
//   for(let key in person){
//      console.log(person[key]);
  // }

// let arr = 'I hate ya';

//   function last(x){
//     let result = x.split(' ').sort((a, b) => a[a.length-1] > b[b.length-1]);
//     return result;
//   }


// console.log(last(arr));

// console.log(arr);




// const obj = {
//  id: 1,
//  name: 'Allen',
//  room: 'Pinterest'
// }


// for (let key in obj){
//    console.log(obj[key][0]);
// }



const now = ['hello', 'world'];


for(let key of now){
   console.log(key);
}