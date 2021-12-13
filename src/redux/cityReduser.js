import { FETCH_CITY } from './actions'

const initialState = {
    city: ''
}

export function cityReducer (state = initialState, action) {
    switch(action.type) {
        case FETCH_CITY: return { city: action.value};
        default: return state;
    }
}