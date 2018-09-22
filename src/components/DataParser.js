import React, {Component} from 'react';
import Papa from 'papaparse';
//import Searcher from './MaterialAuto'
import Selector from './Select'

let dataArray = []

class DataParser extends Component {

    constructor(props) {
        // Call super class
        super(props);
        this.state = {
            data: []
        }

        // Bind this to function updateData (This eliminates the error)
        this.updateData = this
            .updateData
            .bind(this);
    }

    componentWillMount() {

        // Your parse code, but not seperated in a function
        var csvFilePath = require("../defense.csv");

        Papa.parse(csvFilePath, {
            header: false,
            download: true,
            skipEmptyLines: true,
            // Here this is also available. So we can call our custom class method
            complete: this.updateData
        });
    }

    updateData(result) {
        const data = result.data;
        // Here this is available and we can call this.setState (since it's binded in
        // the constructor) this.setState({data: data}); // or shorter ES syntax:
        // this.setState({ data });

        for (let index = 1; index < 51; index++) {
            dataArray.push(data[index])
        }
        this.setState({data: dataArray})
        this.playerSelector("Poup")

    }

    playerSelector(name) {
        let datar = this.state.data
        for (let i = 0; i < 50; i++) {
            if (datar[i][0] === name) {
                //console.log(datar[i])
            }

        }
    }

    render() {
       // console.log(this.state.data +"####")
        // return <div><Searcher datar={this.state.data} ></Searcher></div>
        return <div className="selector"> <div id="instructions">Enter player name:</div><Selector datar={this.state.data}></Selector><div id="date">last updated 9/21/2018</div></div>
    }
}
export default DataParser;