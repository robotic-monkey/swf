import React, {Component, Fragment} from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { updateMap } from '../actions/updateForm';

let suggestions = []

const colourStyles = {
    control: styles => ({
        ...styles,
        width: 250
    }),
    dropdownIndicator: styles => ({
        ...styles
    }),
    clearIndicator: styles => ({
        ...styles
    }),
    container: styles => ({
        ...styles,
        width: 250
    }),
    group: styles => ({
        ...styles
    }),
    groupHeading: styles => ({
        ...styles
    }),
    input: styles => ({
        ...styles
    }),
    indicatorContainer: styles => ({
        ...styles
    }),
    indicatorSeparator: styles => ({
        ...styles
    })
}

type State = {
    isClearable: boolean,
    isDisabled: boolean,
    isLoading: boolean,
    isRtl: boolean,
    isSearchable: boolean
};

class SingleSelect extends Component <*,
State > {

    constructor(props) {
        super(props)

        console.log("constructor")
        this.state = {

            isSearchable: true,
            isAutofocus: true,
            data: [],
            names: [],
            selectedOption: null
        };

        this.updateData = this
            .updateData
            .bind(this);
        this.updateData()

    }

    componentDidMount() {
        console.log("mount")
        this.setState({
            data: [1, 2, 3]
        })
    }

    handleChange = (selectedOption) => {
        this.setState({selectedOption});
       // console.log(`Option selected:`, selectedOption);
        this.populateMap(this.state.data[selectedOption.slot])

    }

    populateMap(sel) {
        
      //  const selection = sel
        this.props.updateMap(sel);
      /*  //console.log(sel)
        let index = 0;
        sel.forEach(el => {
            if (index === 1 && sel[index].includes("X")) {
                console.log("KRU KRU")
            }

            if (index === 3 && sel[index].includes("X")) {
                console.log("CLS")
            }

            if (index === 5 && sel[index].includes("X")) {
                console.log("RJT")
            }

            if (index === 7 && sel[index].includes("X")) {
                console.log("SITH 2")
            }

            if (index === 9 && sel[index].includes("X")) {
                console.log("SITH 1")
            }

            if (index === 11 && sel[index].includes("X")) {
                console.log("NS")
            }

            if (index === 13 && sel[index].includes("X")) {
                console.log("70K")
            }

            if (index === 15 && sel[index].includes("X")) {
                console.log("70k")
            }

            if (index === 17 && sel[index].includes("X")) {
                console.log("Phoenix")
            }

            if (index === 19 && sel[index].includes("X")) {
                console.log("Jedi")
            }

            if (index === 21 && sel[index].includes("X")) {
                console.log("Fleet")
            }





            index++;
        });
*/
    }

    componentWillReceiveProps(nextProps) {

        // this.state.data = this.props.datar
        let index = 0

        nextProps
            .datar
            .forEach((name) => {
                suggestions.push({value: name[0], label: name[0], slot: index})
                index++
            })

        this.setState({names: suggestions})
        this.setState({data: nextProps.datar})
        //  console.log(clour + "will receive props")
    }

    updateData() {}

    render() {
        //  console.log(suggestions + "suggestions")

        const {isAutofocus, selectedOption} = this.state;
        return (
            <Fragment>
                <Select
                    className="basic-single"
                    classNamePrefix="select"
                    name="color"
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={this.state.names}
                    autoFocus={isAutofocus}
                    styles={colourStyles}/>

            </Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    //startAddUserData: (userData) => dispatch(startAddUserData(userData))
      updateMap: (input) => dispatch(updateMap(input)),
    // sendNote: (input) => dispatch(updateNote(input)),
    // submitAll: (input, userData) => dispatch(submitAll(input, userData))
  });

export default connect(undefined, mapDispatchToProps)(SingleSelect);