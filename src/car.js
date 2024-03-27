import React from "react"
class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "red",
            name: "Bekir"
        }
    }

    changeColor = () => {
        this.setState({ color: "Green" });
    }

    render() {
        return (
            <>
                <h2>Hi, I am a {this.state.color} Car!</h2>
                <button type="button"
                    onClick={this.changeColor}>
                    Change Color
                </button>
            </>
        )
    }
}

export default Car;