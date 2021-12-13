import { CLEAN_ERROR, SET_ERROR } from './actions'

const initialState = ''

export function errorReducer (state = initialState, action) {
    switch(action.type) {
        case SET_ERROR: return 'Улица не найдена';
        case CLEAN_ERROR: return initialState;
        default: return state;
    }
}