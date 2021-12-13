import { CLEAN_STREETS, FETCH_STREETS } from './actions'

const initialState = {
    streetsData: []
}

export function streetsReducer (state = initialState, action) {
    switch(action.type) {
        case FETCH_STREETS: return { streetsData: action.value.suggestions  };
        case CLEAN_STREETS: return initialState;
        default: return state;
    }
}