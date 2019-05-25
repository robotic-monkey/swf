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
          selectionArray.push({slot:sel[index+1].slice(1), code:sel[index],team: "DR Malak" })
        }

        if (index === 3 && sel[index].includes("X")) {
          selectionArray.push({slot:sel[index+1].slice(1), code:sel[index],team: "Qira" })
        }

        if (index === 5 && sel[index].includes("X")) {
          selectionArray.push({slot:sel[index+1].slice(1), code:sel[index],team: "Padme" })
        }

        if (index === 7 && sel[index].includes("X")) {
          selectionArray.push({slot:sel[index+1].slice(1), code:sel[index],team: "NS w/Spirit" })
        }

        if (index === 9 && sel[index].includes("X")) {
          selectionArray.push({slot:sel[index+1].slice(1), code:sel[index],team: "JKR" })
        }

        if (index === 11 && sel[index].includes("X")) {
          selectionArray.push({slot:sel[index+1].slice(1), code:sel[index],team: "GG Droids" })
        }

        if (index === 13 && sel[index].includes("X")) {
          selectionArray.push({slot:sel[index+1].slice(1), code:sel[index],team: "BH" })
        }

        if (index === 15 && sel[index].includes("X")) {
          selectionArray.push({slot:sel[index+1].slice(1), code:sel[index],team: "Kru Zarriss" })
        }

        if (index === 17 && sel[index].includes("X")) {
          selectionArray.push({slot:sel[index+1].slice(1), code:sel[index],team: "Carth" })
        }

        if (index === 19 && sel[index].includes("X")) {
          selectionArray.push({slot:sel[index+1].slice(1), code:sel[index],team: "Droids" })
        }

        if (index === 21 && sel[index].includes("X")) {
          selectionArray.push({slot:sel[index+1].slice(1), code:sel[index],team: "Fleet" })
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
