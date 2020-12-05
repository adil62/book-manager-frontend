import { combineReducers } from 'redux'

/* state --
    isUserProfileDropDownOpen: false
    books : []
*/

const isUserProfileDropDownOpen = (state = false, action) => {
    if (action.type === 'TOGGLE_USER_PROFILE_DROPDOWN') { 
        
        return !state         
    } else if (action.type === 'CLOSE_USER_PROFILE_DROPDOWN') {
        // closed
        return false ;
    }

    return state 
}

const books  = (state = [], action) => {
    if (action.type === 'FETCH_BOOKS_SUCCESS') {
       
        return action.payload
    }

    return state
}

// const viewBooksPage = (state = {}, action) => {
//     if (action.type === 'VIEWPAGE:PAGINATE_CLICKED') {
        
//         return {...state, ...action.payload}
//     }

//     return state
// }

export default combineReducers({
    isUserProfileDropDownOpen,
    books
})