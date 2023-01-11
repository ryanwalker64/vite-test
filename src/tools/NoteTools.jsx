
function notesReducer(state, action) {
    switch(action.type) {
      case "ADD_NOTE":
        return [...state, action.data]
  
      case "DELETE_NOTE":
        return
  
      case "UPDATE_NOTE":
        return 
  
      default: throw Error('type not recognised or added')
    }
  }

  
export default notesReducer