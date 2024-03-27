/*import React from "react"
class Car extends React.Component {
    // İlk çalışan constructor
    constructor(props) {
        super(props);
        this.state = {
            color: "Kırmızı",
            name: "Bekir"
        }
    }

    changeColor = () => {
        this.setState({ color: "Green" });
    }

    // 2. getDerivedStateFromProps çalışır
    static getDerivedStateFromProps(props,state){
        return {color : props.color};
    }

    //3. olarak render çalışır

    render() {
        return (
            <>
                <h2>Hi, I am a {this.state.color} Car!</h2>
                <button type="button"
                    onClick={this.changeColor}>
                    Change Color
                </button>

                <hr/>
                <h1>Arabamın rengi {this.state.color} </h1>
            </>
        )
    }

    //4. olarak componentDidMount çalışır

    componentDidMount(){
        setTimeout(()=>{
            this.setState({color:"Sarı"})
        },2000)
    }

}

export default Car;



import React from "react";

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "Kırmızı",
        }
    }
    /*
        static getDerivedStateFromProps(props, state){
            return {color : props.color}
        }
    
    
        shouldComponentUpdate(){
            return false; //true
        }
    

    componentDidMount() {
        setTimeout(() => {
            this.setState({ color: "Mor" })
        })
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
            "Öncekli değer :     " + prevState.color;
    }

    componentDidUpdate() {
        document.getElementById("div2").innerHTML =
            "Değiştirilmiş hali : " + this.state.color;
    }

    changeColor = () => {
        this.setState({ color: "yellow" });
    }


    render() {
        return (
            <>
                <h2>Lifecycle Updating</h2>
                <h3>Arabamın rengi {this.state.color}</h3>
                {<button type="button" onClick={this.changeColor}>
                    Renk değiştir
                </button>}
                <div id="div1"></div>
                <div id="div2"></div>

            </>
        )
    }




}

export default Car;

*/

import React from "react";
import Child from "./child";

class Car extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show : true
        }
    }

    delHeader = () =>{
        this.setState({show : false})
    }

    render(){
        let myHeader;
        if(this.state.show){
            myHeader = <Child/>
        }
        return(
            <>
                {myHeader}
                <button onClick={this.delHeader}>Delete header</button>
            </>
        )
    }
}



export default Car;