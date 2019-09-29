export default (state = null, action) => {
  switch (action.type) {

    case 'UPDATE_MENU':
      return {
        ...state,
        activeMenuName: action.menuName
      }
  
    default:
      return state
  }
}