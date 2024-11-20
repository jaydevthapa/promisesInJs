/*
//example for sync operation in js

let a= 10 ;
let b= 3;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

// in this line of code the line of code executed from top to button and we got the result instently.


// Now note: async task returns the promises which we are going to learn today.

let resultFromServer =  fetch(
  " https://jsonplaceholder.typicode.com/posts" 
  );
console.log(resultFromServer);


// fetch is a building function in js 
// this function will return the promises we have to await the reult now
*/

// a wait result in async
let a= 10 ;
let b= 3;
async function getData(){
    let resultFromServer = await fetch(
        " https://jsonplaceholder.typicode.com/posts"
     );
      console.log(await resultFromServer.json());
    
}
getData();


console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
//even though we call the function first we have the result of arthamatic operation because the code goes from top to button and see the async funtion which is waiting so it returns the arthimetic result first
// note await only works on async function
