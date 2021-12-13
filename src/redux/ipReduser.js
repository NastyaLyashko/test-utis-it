import { FETCH_IP } from './actions'

const initialState = {
    ip: ''
}

export function ipReducer (state = initialState, action) {
    switch(action.type) {
        case FETCH_IP: return { ip: action.value };
        default: return state;
    }
}