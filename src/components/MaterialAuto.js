import React from 'react';
import PropTypes from 'prop-types';
import keycode from 'keycode';
import Downshift from 'downshift';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';
//import DataParser from './DataParser'

/*const suggestions = [
  {
    label: 'Afghanistan'
  }, {
    label: 'Aland Islands'
  }
];
*/

let suggestions = []

function renderInput(inputProps) {
  const {
    InputProps,
    classes,
    ref,
    ...other
  } = inputProps;

  return (<TextField
    InputProps={{
    inputRef: ref,
    classes: {
      root: classes.inputRoot
    },
    ...InputProps
  }}
    {...other}/>);
}

function renderSuggestion({suggestion, index, itemProps, highlightedIndex, selectedItem}) {
  const isHighlighted = highlightedIndex === index;
  const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1;

  return (

    <MenuItem
      {...itemProps}
      key={suggestion.label}
      selected={isHighlighted}
      component="div"
      style={{
      fontWeight: isSelected
        ? 500
        : 400
    }}>
      {suggestion.label}
    </MenuItem>
  );
}
renderSuggestion.propTypes = {
  highlightedIndex: PropTypes.number,
  index: PropTypes.number,
  itemProps: PropTypes.object,
  selectedItem: PropTypes.string,
  suggestion: PropTypes
    .shape({label: PropTypes.string})
    .isRequired
};

function getSuggestions(inputValue) {
  let count = 0;

  return suggestions.filter(suggestion => {
    const keep = (!inputValue || suggestion.label.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) && count < 5;

    if (keep) {
      count += 1;
    }

    return keep;
  });
}

class DownshiftMultiple extends React.Component {
  state = {
    inputValue: '',
    selectedItem: []
  };

  handleKeyDown = event => {
    const {inputValue, selectedItem} = this.state;
    if (selectedItem.length && !inputValue.length && keycode(event) === 'backspace') {
      this.setState({
        selectedItem: selectedItem.slice(0, selectedItem.length - 1)
      });
    }
    if (selectedItem.length && !inputValue.length && keycode(event) === 'enter') {
      // this.setState({   selectedItem: selectedItem.slice(0, selectedItem.length -
      // 1) });
      console.log("FFF")
    }

  };

  handleInputChange = event => {
    this.setState({inputValue: event.target.value});
  };

  handleChange = item => {
    let {selectedItem} = this.state;
    if (selectedItem.indexOf(item) === -1) {
      selectedItem = [
        ...selectedItem,
        item
      ];
    }

    this.setState({inputValue: '', selectedItem});
  };

  handleDelete = item => () => {
    this.setState(state => {
      const selectedItem = [...state.selectedItem];
      selectedItem.splice(selectedItem.indexOf(item), 1);
      return {selectedItem};
    });
  };

  render() {
    const {classes} = this.props;
    const {inputValue, selectedItem} = this.state;

    return (
      <Downshift
        inputValue={inputValue}
        onChange={this.handleChange}
        selectedItem={selectedItem}>
        {({
          getInputProps,
          getItemProps,
          isOpen,
          inputValue: inputValue2,
          selectedItem: selectedItem2,
          highlightedIndex
        }) => (
          <div className={classes.container}>
            {renderInput({
              fullWidth: true,
              classes,
              InputProps: getInputProps({
                startAdornment: selectedItem.map(item => (<Chip
                  key={item}
                  tabIndex={-1}
                  label={item}
                  className={classes.chip}
                  onDelete={this.handleDelete(item)}/>)),
                onChange: this.handleInputChange,
                onKeyDown: this.handleKeyDown,
                id: 'integration-downshift-multiple'
              })
            })}
            {isOpen
              ? (
                <Paper className={classes.paper} square>
                  {getSuggestions(inputValue2).map((suggestion, index) => renderSuggestion({
                    suggestion,
                    index,
                    itemProps: getItemProps({item: suggestion.label}),
                    highlightedIndex,
                    selectedItem: selectedItem2
                  }),)}
                </Paper>
              )
              : null}
          </div>
        )}
      </Downshift>
    );
  }
}

DownshiftMultiple.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 250
  },
  container: {
    flexGrow: 1,
    position: 'relative'
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`
  },
  inputRoot: {
    flexWrap: 'wrap'
  }
});

const popData = (playerData) => {
  playerData.forEach((name) => {
    suggestions.push({label: name[0]})
  })
}

function IntegrationDownshift(props) {
  const {classes} = props;
  popData(props.datar)
  return (
    <div className={classes.root}>

      <Downshift>

        {({
          getInputProps,
          getItemProps,
          isOpen,
          inputValue,
          selectedItem,
          highlightedIndex
        }) => (
          <div className={classes.container}>
            {renderInput({
              fullWidth: true,
              classes,
              InputProps: getInputProps({placeholder: 'Type your in-game name', id: 'integration-downshift-simple'})
            })}
            {isOpen
              ? (
                <Paper className={classes.paper} square>
                  {getSuggestions(inputValue).map((suggestion, index) => renderSuggestion({
                    suggestion,
                    index,
                    itemProps: getItemProps({item: suggestion.label}),
                    highlightedIndex,
                    selectedItem
                  }),)}
                </Paper>
              )
              : null}
          </div>
        )}
      </Downshift>
      <DownshiftMultiple classes={classes}/>
    </div>
  );
}

IntegrationDownshift.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IntegrationDownshift);
