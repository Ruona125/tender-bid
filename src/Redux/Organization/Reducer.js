import { actionTypes } from "./ActionTypes"

const initialState = {
    isSignedIn: false,
    isRegistered: false,
    user: {},
    isLoading: false,
    errorMsg: '',
    notification: []
}

const organizationReducer = (state = initialState, action) => {
    switch (action.type) {
        // Login
        case actionTypes.ORGANIZATION_LOGIN_START:
            return {
                ...state, isLoading: true, isSignedIn: false, errorMsg: ''
            }
        case actionTypes.ORGANIZATION_LOGIN_SUCCESS:
            return {
                ...state, isLoading: false, isSignedIn: true, user: action.payload
            }
        case actionTypes.ORGANIZATION_LOGIN_FAILED:
            return {
                ...state, isLoading: false, isSignedIn: false, errorMsg: action.payload
            }

        // Get Notification
        case actionTypes.ORGANIZATION_REGISTER_START:
            return {
                ...state, isLoading: true, isRegistered: false
            }
        case actionTypes.ORGANIZATION_REGISTER_SUCCESS:
            return {
                ...state, isLoading: false, isRegistered: true
            }
        case actionTypes.ORGANIZATION_REGISTER_FAILED:
            return {
                ...state, isLoading: false, isRegistered: false
            }
        default:
            return state
    }

}

export default organizationReducer