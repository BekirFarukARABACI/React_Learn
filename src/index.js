/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { type } from '@testing-library/user-event/dist/type';
import message from './test'

const root = ReactDOM.createRoot(document.getElementById('root'));


const hello = function(){
  return "Hello world"
}

const hello1 = () => {
  return "Hello World"
}

console.log(hello)
console.log(hello1)

const hello2 = () => "Hello World"
console.log(hello2)

const hello3 = (val) => "hello " + val
console.log(hello3(""))


function myMethod(){
  console.log("test1")
}

const myMethod2 = () =>{
  console.log("test2")
}

myMethod();
myMethod2();



var x = 5;
let y = 7;
{
  var x = 10;
  let y = 14;
  
}
console.log(x);
console.log(y);


const myArray = [1,5,3,4]

const myList = myArray.map((val) => val*2)

console.log(myList)



const vehicles = ["Ford", "BMW" , "Audi"];

//const[car,truck,suv] = vehicles;

//const[car] = vehicles;

const vehicleOne = {
    brand : "BMW",
    model : "F90",
    type : "araç",
    year : 2016,
    color : "Mavi"
 }

 function myVehicle(){
  const {brand , color , model,type} = vehicleOne;
  const message = "benim aracım " + brand + " " +
  model + " model olup " + color + " renk bir  " + type +"tır.";

  console.log(message)
 }

 myVehicle();



const users = [
  {
    name: "Bekir",
    lastName: "Arabacı"
  },
  {
    name: "Gül",
    lastName: "Büyükeken"
  }
];

const users2 = [...users]; 

const user = {...users[0]};


console.log(message())


const auth = true;

if(auth){
  console.log("Giriş işlemi başarılı")
}else{
  console.log("Giriş işlemi başarısız")
}

auth == true 
?  console.log("Giriş işlemi başarılı") 
: console.log("Giriş işlemi başarısız")




//const myElement = <h1>My First Element</h1>
//const myElement = React.createElement("h1",{},"My First Element")
//const name = "Bekir";
//const myElement = <h1>React is {name}</h1>

const myElement = (
  <ul>
      <li>Elma</li>
      <li>Armut</li>
      <li>Kiwi</li>
  </ul>
)



const x = 11;
var text = "Goodbye";
if(x < 10 ){
  text = "hello";
}

const myElement = <h1>{text}</h1>


const x = 11;
var text = "Goodbye";

const myElement = x < 10 ? "Hello":"Goodbye";
root.render(
  <>
    {myElement}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


import React from "react";
import  ReactDOM  from "react-dom/client";
import FunctionCar from "./function";
import ClassCar from "./class";






const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<>
<ClassCar/>
<FunctionCar color="red" name="Faruk"/>
</>
)


*/

import React from "react";
import  ReactDOM  from "react-dom/client";
import Car from "./car";







const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<>
  <Car color="Mavi"/>
</>
)