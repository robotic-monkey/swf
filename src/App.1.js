import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import DataParser from "./components/DataParser"
import {connect} from 'react-redux';
import Image from 'react-graceful-image'




class App extends Component {
  constructor(props) {
    super(props)
  };
  render() {
    let trigger = false;
    return (
      <div>
        <header className="App-header"></header>

        <div  id="app-holder">
          <DataParser></DataParser>
          
          <div className="map-container">
         
            <div className="zone-holder" id="zone1">{this
                .props
                .output
                .playerData
                .map((m, index) => {
                  if (m.slot == 1) 
                    return <ul key={index}>
                      <li>{m.team}</li>
                    </ul>
                })}</div>

            <div className="zone-holder" id="zone2">{this
                .props
                .output
                .playerData
                .map((m, index) => {
                  if (m.slot == 2) 
                    return <ul key={index}>
                      <li>{m.team}</li>
                    </ul>
                })}</div>

            <div className="zone-holder" id="zone3">{this
                .props
                .output
                .playerData
                .map((m, index) => {
                  if (m.slot == 3) 
                    return <ul key={index}>
                      <li>{m.team}</li>
                    </ul>
                })}</div>

            <div className="zone-holder" id="zone4">{this
                .props
                .output
                .playerData
                .map((m, index) => {
                  if (m.slot == 4) 
                    return <ul key={index}>
                      <li>{m.team}</li>
                    </ul>
                })}</div>

            <div className="zone-holder" id="zone5">{this
                .props
                .output
                .playerData
                .map((m, index) => {
                  if (m.slot == 5) 
                    return <ul key={index}>
                      <li>{m.team}</li>
                    </ul>
                })}</div>

            <div className="zone-holder" id="zone6">{this
                .props
                .output
                .playerData
                .map((m, index) => {
                  if (m.slot == 6) 
                    return <ul key={index}>
                      <li>{m.team}</li>
                    </ul>
                })}</div>

            <div className="zone-holder" id="zone7">{this
                .props
                .output
                .playerData
                .map((m, index) => {
                  if (m.slot == 7) 
                    return <ul key={index}>
                      <li>{m.team}</li>
                    </ul>
                })}</div>

            <div className="zone-holder" id="zone8">{this
                .props
                .output
                .playerData
                .map((m, index) => {
                  if (m.slot == 8) 
                    return <ul key={index}>
                      <li>{m.team}</li>
                    </ul>
                })}</div>

            <div className="zone-holder" id="zone9">{this
                .props
                .output
                .playerData
                .map((m, index) => {
                  if (m.slot == 9) 
                    return <ul key={index}>
                      <li>{m.team}</li>
                    </ul>
                })}</div>

            <div className="zone-holder" key="zone10" id="zone10">{this
                .props
                .output
                .playerData
                .map((m, index) => {
                  if (m.slot == 10) 
                    return <ul key={index}>
                      <li>{m.team}</li>
                    </ul>
                })}</div>

            <Image className="map" src="images/map.png" alt="My awesome image"
            placeholderColor="#000"/>
            <div>
              <h2>Team Notes:</h2>
              <ol>
                {this
                  .props
                  .output
                  .playerData
                  .map((m, index) => {
                    if (m.code.includes(")")) {
                      trigger = true;
                      return <li>{m.team}: {m
                          .code
                          .replace(/[X()]/g, '')}</li>
                    } else {
                      if (index === this.props.output.playerData.length - 1 && (trigger === false)) 
                        //trigger = false;
                        return <p>none</p>
                    }
                  })}
              </ol>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {output: state.magicform};
};

export default connect(mapStateToProps, undefined)(App);
