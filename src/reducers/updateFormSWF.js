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
          selectionArray.push({slot:sel[index+1].slice(1), code:sel[index],team: "Geos" })
        }

        if (index === 3 && sel[index].includes("X")) {
          selectionArray.push({slot:sel[index+1].slice(1), code:sel[index],team: "CLS" })
        }

        if (index === 5 && sel[index].includes("X")) {
          selectionArray.push({slot:sel[index+1].slice(1), code:sel[index],team: "Traya" })
        }

        if (index === 7 && sel[index].includes("X")) {
          selectionArray.push({slot:sel[index+1].slice(1), code:sel[index],team: "Jedi (ideally JKR)" })
        }

        if (index === 9 && sel[index].includes("X")) {
          selectionArray.push({slot:sel[index+1].slice(1), code:sel[index],team: "RJT" })
        }

        if (index === 11 && sel[index].includes("X")) {
          selectionArray.push({slot:sel[index+1].slice(1), code:sel[index],team: "NS, no Nest" })
        }

        if (index === 13 && sel[index].includes("X")) {
          selectionArray.push({slot:sel[index+1].slice(1), code:sel[index],team: "Scoundrels and/or OR" })
        }

        if (index === 15 && sel[index].includes("X")) {
          selectionArray.push({slot:sel[index+1].slice(1), code:sel[index],team: "Drevan" })
        }

        if (index === 17 && sel[index].includes("X")) {
          selectionArray.push({slot:sel[index+1].slice(1), code:sel[index],team: "BH + Nest" })
        }

        if (index === 19 && sel[index].includes("X")) {
          selectionArray.push({slot:sel[index+1].slice(1), code:sel[index],team: "Droids/Seps" })
        }

        if (index === 21 && sel[index].includes("X")) {
          selectionArray.push({slot:sel[index+1].slice(1), code:sel[index],team: "Fleet" })
        }

       
        index++;
    }); 
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
