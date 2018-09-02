const testerReducerDefaultState = { playerData:[]  };

export default (state = testerReducerDefaultState, action) => {
  switch (action.type) {
    case 'UPDATE_MAP':
    const sel= action.input
   // this.props.updateMap(sel);
    //console.log(sel)
    let index = 0;
    const selectionArray = [];
    sel.forEach(el => {
        if (index === 1 && sel[index].includes("X")) {
          selectionArray.push({slot:sel[index+1].slice(1), code:sel[index],team: "KRU L" })
        }

        if (index === 3 && sel[index].includes("X")) {
          selectionArray.push({slot:sel[index+1].slice(1), code:sel[index],team: "CLS with Chaze" })
        }

        if (index === 5 && sel[index].includes("X")) {
          selectionArray.push({slot:sel[index+1].slice(1), code:sel[index],team: "RJT" })
        }

        if (index === 7 && sel[index].includes("X")) {
          selectionArray.push({slot:sel[index+1].slice(1), code:sel[index],team: "2nd team Sith/Empire" })
        }

        if (index === 9 && sel[index].includes("X")) {
          selectionArray.push({slot:sel[index+1].slice(1), code:sel[index],team: "EP or Traya L" })
        }

        if (index === 11 && sel[index].includes("X")) {
          selectionArray.push({slot:sel[index+1].slice(1), code:sel[index],team: "NS + Nest" })
        }

        if (index === 13 && sel[index].includes("X")) {
          selectionArray.push({slot:sel[index+1].slice(1), code:sel[index],team: "70k with synergy" })
        }

        if (index === 15 && sel[index].includes("X")) {
          selectionArray.push({slot:sel[index+1].slice(1), code:sel[index],team: "70k with synergy" })
        }

        if (index === 17 && sel[index].includes("X")) {
          selectionArray.push({slot:sel[index+1].slice(1), code:sel[index],team: "Bounty Hunters" })
        }

        if (index === 19 && sel[index].includes("X")) {
          selectionArray.push({slot:sel[index+1].slice(1), code:sel[index],team: "Jedi" })
        }

        if (index === 21 && sel[index].includes("X")) {
          selectionArray.push({slot:sel[index+1].slice(1), code:sel[index],team: "Full arena fleet" })
        }

       
        index++;
    }); 
      console.log(selectionArray)
      return { playerData: selectionArray };
    case 'UPDATE_NOTE':
     // console.log(action.input);
      return { ...state, note: action.input };
    case 'UPDATE_USER_DATA':
      return {...state, ...action.input}
    default:
      return state;
  }
};
