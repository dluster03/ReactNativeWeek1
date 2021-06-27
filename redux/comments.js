import * as ActionTypes from './ActionTypes';

export const comments = (state = { errMess: null, comments: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};

        default:
            return state;
    }
};

export const comment = ( state = {comment: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            return { ...state, comment: action.payload};
    }
};