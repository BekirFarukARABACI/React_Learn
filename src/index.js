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




import React from "react";
import  ReactDOM  from "react-dom/client";
import Car from "./car";







const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<>
  <Car color="Mavi"/>
</>
)



import React from "react";
import ReactDOM from "react-dom/client";


function Car(props) {
  return <h2>I am a {props.brand.model}</h2>
}

function Garage() {
  const carName = "Ford";
  const carInfo = {name:"Ford",model:"Mustang"}
  return <>
    <h1>Who lives in my garage</h1>
    <Car brand={carInfo} />
  </>
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Car brand="BMW" />
    <Garage />
  </>
)



import React from "react";
import ReactDOM from "react-dom/client";

/*

function Football(){
  const shoot = () => {
    alert("Great shot!");
  }
  return <button onClick={shoot}>Take the shot!</button>
}
*/
/*
function Football(){
  const shoot = (message) => {
    alert(message);
  }
  return <button onClick={() => shoot("Goal")}>Take the shot!</button>
}


function Football(){
  const shoot = (message,event) => {
    alert(message);
    console.log(event.type)
  }

  const getValue = (e) => {
    console.log(e.target.value)
  }
  return <>
      <input onKeyUp={(event) => getValue(event)}/>
      <button onClick={(event) => shoot("Goal",event)}>Take the shot!</button>
  </>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

//onclick = "function()" onClick = {function}

root.render(
  <>
    <h1>Events</h1>
    <Football/>
  </>
)




import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function MissedGoal() {
  return <h1>Missed</h1>
}

function MadeGoal() {
  return <h1>Goal!</h1>
}

function Goal(props) {
  const isGoal = props.isGoal;

  if (isGoal) {
    return <MadeGoal />
  }
  return <MissedGoal />
}

function Garage(props) {
  const cars = props.cars;
  return (
    <>
      {cars.length> 0 && 
      <h2>Araba sayın : {cars.length}</h2>
      }
    </>
  );
  
}

const cars = ["Ford"]
root.render(
  <>
    <h1>Conditional</h1>
    <Goal isGoal={false} />
    <hr />
    <Garage cars={cars} />
  </>
)



import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Car(props){
  return <li >{props.brand}</li>
}

function Garage(){
  const cars = [
    {
      id :1,
      brand: "BMW"
    },
    {
      id :2,
      brand: "Audi"
    },
    {
      id :3,
      brand: "Dacia"
    },
    {
      id :4,
      brand: "Mercedes"
    }
  ]
  return <>
    <h1>Who lives in my garage?</h1>

    <ul>
      {cars.map((car) => <Car 
      key={car.id} 
      brand = {car.brand}/>)}
    </ul>
  </>
}

root.render(
  <>
    <h1>Lists</h1>
    <Garage/>
  </>
)



import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

function MyForm() {
  // const [name,setName] = useState("");
  // const [surName,setSurName] = useState("");
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values,[name]:
      value}))
  }



  const handleSubmit = (event) => {
    event.preventDefault(0);
    console.log(inputs)
  }

  return <form onSubmit={handleSubmit}>
    <label>Name</label>
    <input
      type="text"
      name="userName"
      value={inputs.userName || ""}
      onChange={handleChange} />
    <br />
    <br />
    <label>SurName</label>
    <input
      type="text"
      name="lastName"
      value={inputs.lastName || ""}
      onChange={handleChange}
    />
    <br />
    <br />
    <label>Açıklama</label>
    <textarea
    name="description"
    value={inputs.description || ""}
    onChange={handleChange}
    ></textarea>
    <br />
    <br />
    <label>Şehir</label>
    <select
      name="city"
      value={inputs.city || ""}
      onChange={handleChange}
    >
      <option defaultChecked>Şehir seçiniz : </option>
      <option>Konya</option>
      <option>Antalya</option>
      <option>İstanbul</option>
      <option>İzmir</option>
    </select>
    <br />
    <br />
  <button type="submit">Save</button>
  </form>
}

root.render(
  <>
    <h1>Forms</h1>
    <MyForm />
  </>
)


import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Blogs from "./pages/blogs";
import Contact from "./pages/contact";
import NoPage from "./pages/nopage";
const root = ReactDOM.createRoot(document.getElementById("root"));

export default function App(){
  return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index  element={<Home/>}/>
            <Route path="blogs"  element={<Blogs/>}/>
            <Route path = "contact"  element={<Contact/>}/>
            <Route path = "*"  element={<NoPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

root.render(
  <>
    <h1>Router</h1>
    <hr/>
    <App/>
  </>
)

*/

import React , {useState} from "react";
import ReactDOM from "react-dom/client";
import Todos from "./todos";

const root = ReactDOM.createRoot(document.getElementById("root"));


export default function App(){
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState(["Todo 1","Todo 2"])

  const increment = () => {
    setCount((count) => count + 1)
  }
  return(
     <>
      <h1>Memo</h1>
      <Todos todos={todos}/>
      <div>
        Count : {count}
        <button onClick={increment}>+</button>

      </div>
     </>
  )
}

root.render(<App/>)
