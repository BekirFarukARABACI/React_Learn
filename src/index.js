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


import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './app.css'
import styles from './myStyle.module.css'

const root = ReactDOM.createRoot(document.getElementById("root"));

export default function App() {
  const myStyle = {
    color: "Blue",
    backgroundColor: "Green"
  }
  return (
    <>
      <h1>CSS Styling</h1>
      <p style={{ color: "red", backgroundColor: "yellow" }}>Bekir Faruk ARABACI</p>
      <p style={myStyle}>Gül Büyükeken</p>
      <hr />
      <h1>Css dosyasından css ayarlama</h1>
      <h2 className={styles.bigBlue}>Style module üzerinden ayarlama</h2>
    </>
  )
}

root.render(<App />)



import React from "react";
import ReactDOM from "react-dom/client";
import './my-sass.scss'

const root = ReactDOM.createRoot(document.getElementById("root"));

export default function App() {

  return (
    <>
      <h1>Sass Styling
        <p>Mavi</p>
      </h1>
    </>
  )
}

root.render(<App />)


import React , {useState} from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

export default function App() {
  const [color,setColor]=useState("kırmızı")
  return (
    <>
      <h1>Hooks</h1>
      <h4>Benim rengim {color}</h4>
      <button onClick={() => setColor("mavi") }>Mavi</button>
      <br/>
      <br/>
      <button onClick={() => setColor("Yeşil") }>Yeşil</button>
    </>
  )
}

root.render(<App />)


import React, { useState } from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

export default function App() {
  const [name, setName] = useState("Taner saydam")
  const [newName, setNewName] = useState("")
  const [user, setUser] = useState({
    name: "Bekir Faruk",
    lastName: "Arabacı",
    newName: ""
  })

  const updateNewName = (e) => {
    setUser(prv => {
      return { ...prv, newName: e.target.value }
    })
  }

  const updateName = () => {
    setUser(prv => {
      return { ...prv, name: user.newName }
    })
  }

  return (
    <>
      <h1>useState</h1>
      <h4>Benim adım {user.name}</h4>
      {<input value={name} onChange={(name)=> setName(name.target.value)}/>
      <br/>
      <br/>
      <input value={newName} onChange={(name)=> setNewName(name.target.value)}/>
  <button onClick={()=>setName(newName)}>Adımı değiştir</button>}
      <input value={user.newName} onChange={updateNewName} />
      <button onClick={updateName}>Adımı değiştir</button>
    </>
  )
}

root.render(<App />)



import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

export default function App(){
  const [count,setCount] = useState(0);
  const [name,setName] = useState("")

  useEffect(()=>{
    setTimeout(()=>{
      setCount((count)=> count + 1)
    },1000)
  },[name])

  return(
    <>
      <h1>useEffect</h1>
      <h2>Sayfa Render Sayısı : {count}</h2>
      <button onClick={() => setName("Bekir Faruk")}>Değiştir </button>
    </>
  )
}

root.render(<App/>)




import React, {  createContext, useState, useContext } from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
const UserContext = createContext();

export default function App(){
  const [user,setUser] = useState("Bekir Faruk ARABACI")

  return(
    <>
      <h1>useContext</h1>
      {<h2>{`Merhaba ${user}`}</h2>
      <Component1 user = {user}/>}

      <UserContext.Provider value = {user}>
        <h2>Merhaba {user}</h2>
        <Component1 user = {user}/>
      </UserContext.Provider>
    </>
  )
}

function Component1(){
  return(
    <>
      <h4>Component 1</h4>
      <Component2 />
    </>
  )
}

function Component2(){
  return(
    <>
      <h4>Component 2</h4>
      <Component3 />
    </>
  )
}

function Component3(){
  const user = useContext(UserContext)
  return(
    <>
      <h4>Component 3</h4>
      <h5>Benim adım {user}</h5>
    </>
  )
}

root.render(<App/>)




import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

export default function App() {

  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1
  });
 

  const inputRef = useRef(null)
  const[value , setValue] = useState("")

  const handleClick = ()=>{
    console.log(inputRef.current.value)
    setValue(inputRef.current.value)
  }

  return (
    <>
      <h1>useRef</h1>
      <input
        type="text"
        ref={inputRef}
      />
      <button onClick={handleClick}>Değeri göster</button>
      <h1>{value}</h1>
    </>
  )
}

root.render(<App />)

*/
/*

import React , {useReducer} from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";

const root = ReactDOM.createRoot(document.getElementById("root"));

const initialState = {count : 0}

function reducer(state,action){
  switch(action.type){
    case 'increment':
      return {count : state.count + 1}
    case 'decrement':
      return {count : state.count - 1}
    default:
      break

  }
}

export default function App() {
  const [state,dispatch] = useReducer(reducer,initialState);
  return (
    <>
      <h1>useReducer</h1>
      <h2>Count {state.count}</h2>
      <button onClick={()=> dispatch({type : 'increment'})}>+</button>
      <button onClick={()=> dispatch({type : 'decrement'})}>-</button>
    </>
  )
}

root.render(<App />)

*/
/*

import React , {useCallback, useState}  from "react";
import ReactDOM from "react-dom/client";
import Todos from "./todo";

const root = ReactDOM.createRoot(document.getElementById("root"));


export default function App() {
  const [count,setCount] = useState(0)
  const [todos,setTodos] = useState([])

  const increment = () => {
    setCount((c) => c+1)
  }

  const addTodo = useCallback(() => {
    setTodos((t)=>[...t,"New Todo"])
  },[todos])

  return (
    <>
      <h1>useCallBack</h1>
      <Todos todos= {todos} addTodo = {addTodo}/>
      <div>
        Count : {count}
        <button onClick={increment}> + </button>
      </div>
    </>
  )
}

root.render(<App />)

*/
/*

import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));


export default function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])
  const calculation = useMemo(()=>expensiveCalculation(count),[count])

  const increment = () => {
    setCount((c) => c + 1)
  }

  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"])
  }
  return (
    <>
      <h1>useMemo</h1>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return (<p key={index} > {todo}</p>)
        })}
        <button onClick={addTodo}> Add Todo</button>
      </div>
      <hr/>
      <div>
        Count : {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </>
  )
}

const expensiveCalculation = (num) => {
  console.log("Calculating")
  for (let i = 0; i < 100000000; i++) {
    num += 1
  }
}

root.render(<App />)

*/
/*
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import useFetch from "./useFetch";

const root = ReactDOM.createRoot(document.getElementById("root"));


export default function App() {
  const [data] = useFetch('https://jsonplaceholder.typicode.com/todos/');


  return (
    <>
      <h1>Custom Hooks</h1>
      {data &&
        data.map((item, index) => {
          return <p key={index}>{item.title}</p>
        })}
    </>
  )
}


root.render(<App />)
*/
/*

import axios from "axios";
import React, { Component } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      data: null,
      isLoading: true,
      error: null
    }
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { title } = this.state;
    let model = { userId: 1, title: title, completed: true };
    axios.post("https://jsonplaceholder.typicode.com/todos", model)
      .then((res) => {
        console.log(res)
      })
      .catch(err => {
        this.setState({
          error: err,
          isLoading: false
        })
      });
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(res => {
        this.setState({
          data: res.data,
          isLoading: false
        });
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          error: err
        })
      })
  }

  render() {
    const { data, isLoading, error } = this.state
    if (isLoading) {
      return <div>Yükleniyor</div>
    }
    if (error) {
      return <div>Hata: {error.message}</div>
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Başlık</label>
            <input type="text" id="title" name="title" value={this.title} onChange={this.handleInputChange}></input>
            <button type="submit">Gönder</button>
          </div>
        </form>
        <hr/>
        <h1>To do Listesi</h1>
        <ul>
          {data.map((item, index) => {
            return <li key={index}>{item.title}</li>
          })}
        </ul>
      </div>
    )
  }
}

root.render(<AppComponent />)
*/
/*

import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function AppComponent() {
  const [title, setTitle] = useState("")
  const [completed, setCompleted] = useState(false)
  const [response, setResponse] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [todos, setTodos] = useState([])

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    type === 'checkbox' ? setCompleted(checked) : setTitle(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true)
    axios.post("https://jsonplaceholder.typicode.com/todos",
      { title, completed })
      .then(res => {
        setResponse(res.data)
        setIsLoading(false)
      })
      .catch(err => {
        setError(err)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    setIsLoading(true)
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(response => {
        setTodos(response.data)
        setIsLoading(false)
      })
      .catch(err => {
        setError(err)
        setIsLoading(false)
      })
  }, [])

  return <>
    <h1>Function Component</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Başlık</label>
        <input type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleInputChange}
        ></input>
      </div>
      <div>
        <label htmlFor="completed">Tamamlandı mı?</label>
        <input type="checkbox"
          id="completed"
          name="completed"
          checked={completed}
          onChange={handleInputChange}
        ></input>
      </div>
      <button type="submit">Gönder</button>
    </form>
    {isLoading && <div>Loading...</div>}
    {error && <div>Error : {error}</div>}
    {response && (
      <div>
        <h2>Sonuç : </h2>
        <p>ID : {response.id}</p>
        <p>Başlık: {response.title}</p>
        <p>Tamamlandı mı {response.completed ? "Evet" : "Hayır"}</p>
      </div>
    )}
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo.title}</li>
      ))}
    </ul>
  </>
}


root.render(<AppComponent />)
*/
/*

import React, { useState } from "react";
import ReactDOM from "react-dom/client"

function AppComponent(){
  const[names,setNames] = useState([
    "Faruk",
    "Ahmet",
    "Ayşe",
    "Gül"
  ])
  const [search,setSearch] = useState("")

  const filteredNames = names.filter(s => 
    s.toLowerCase().includes(search.toLowerCase()))

  return(
    <>
      <h1>Search</h1>
      <input type="search"
      value={search}
      onChange={(e)=>setSearch(e.target.value)}/>
      <ul>
        {filteredNames.map((name,index)=>(
          <li key={index}>{name}</li>
        ))}
      </ul>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppComponent/>)
*/
/*

import React, { useState } from "react";
import ReactDOM from "react-dom/client"

function AppComponent() {
  const [search, setSearch] = useState("")
  const [users, setUsers] = useState([
    {
      name: "Bekir Faruk",
      lastName: "Arabacı",
      age: 22
    },
    {
      name: "Gül",
      lastName: "Büyükeken",
      age: 22
    },
    {
      name: "Selim",
      lastName: "özdemir",
      age: 20
    },
    {
      name: "Burak",
      lastName: "Mumcu",
      age: 21
    }
  ])

  const filteredNames = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.lastName.toLowerCase().includes(search.toLowerCase()) ||
    user.age.toString().includes(search))

  return (
    <>
      <h1>Multi Search</h1>
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table>
        <tr>
          <th># </th>
          <th>Name </th>
          <th>LastName</th>
          <th>Age</th>
        </tr>
        {filteredNames.map((user, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.lastName}</td>
            <td>{user.age}</td>
          </tr>
        ))}
      </table>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppComponent />)

*/
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter, Link, Outlet, Route, Routes, useNavigate} from "react-router-dom";

function HomeComponent() {
  return (
    <>
      <h1>Home Component</h1>
    </>
  )
}
function AboutComponent() {
  return (
    <>
      <h1>About Component</h1>
    </>
  )
}
function LoginComponent() {
  const navigate = useNavigate()
  const handleButtonClick = () =>{
    //Sayfa yenileyerek diğer sayfaya atıyor
    window.location.href = "/"
  }
  const handleButtonClick2 = () =>{
    //Sayfa yenileyerek diğer sayfaya atmayı önlemek için
    localStorage.setItem("token","Deneme Token")
    navigate("/")
  }

  return (
    <>
      <h1>Login Component</h1>
      <button onClick={handleButtonClick}>Sasyfa yenileyerek Giriş Yap</button>
      <button onClick={handleButtonClick2}>Tek sayfa kurallarına uygun Giriş Yap</button>
    </>
  )
}

function LayoutComponent() {
  const navigate = useNavigate();

  useEffect(()=>{
    if (!localStorage.getItem("token")) {
      navigate("/login")
    }
  })

  function logOut(){
    localStorage.clear();
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li><Link to="/about"> About</Link></li>
          <li><Link to="/login"> Login</Link></li>
          <li>
            <a onClick={logOut}>Çıkış Yap</a>
          </li>
        </ul>
      </nav>

      {/* Seçilen yapının yerleşmesini Outlet sağlıyor */}
      <Outlet/>
    </>
  )
}



function AppComponent() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LayoutComponent/>}>
        <Route index element={<HomeComponent/>}/>
        <Route path="about" element={<AboutComponent/>}/>
      </Route>
      <Route path="login" element={<LoginComponent/>}/>

      </Routes>
    </BrowserRouter>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppComponent />)