import React  from "react"
class Car extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color : "red",
            name : "Bekir"
        }
    }

    render(){
        return <h2>Hi, I am a {this.props.color} Car!</h2>
    }
}

export default Car;