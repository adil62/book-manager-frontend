import Axios from 'axios'

const profileSectionClickedActionCreator = () => {
    return {
        type : 'TOGGLE_USER_PROFILE_DROPDOWN'
    }
}

const closeProfileDropdownActionCreator = () => {
    return {
        type : 'CLOSE_USER_PROFILE_DROPDOWN'
    }
}

const fetchProductsSuccess = (books) => {
    return {
        type : 'FETCH_BOOKS_SUCCESS',
        payload : books
    }
}

const getBooksActionCreator = () => {
    return dispatch => {
        Axios.get('http://localhost:8080/api/books?limit=2')
        .then((resp) => resp.data)
        .then((resp) => {
            dispatch(fetchProductsSuccess(resp.books ))

            return resp.books
        })
    }    
}
 
export {
    profileSectionClickedActionCreator,
    closeProfileDropdownActionCreator,
    getBooksActionCreator
}