import React from "react";
import Car from "./car";

class Garage extends React.Component {
    render() {
        return (
            <>
                <h1>Bu garajda kim yaşıyor</h1>
                <p>Bu garaj classıdır</p>
                <Car color = "yellow"/>
            </>

        )
    }
}

export default Garage;