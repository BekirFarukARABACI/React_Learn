import React from "react";

class Child extends React.Component{

    componentWillUnmount(){
        alert("Compnent Yok oluyor")
    }
    
    render(){
        return <h1>Hello World</h1>
    }
}

export default Child;