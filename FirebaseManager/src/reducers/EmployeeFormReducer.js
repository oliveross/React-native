import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_EDIT_SUCCESS,
    EMPLOYEE_FORM_RESET
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return {...state,
                [action.payload.prop]: action.payload.value};
        case EMPLOYEE_CREATE:
            return INITIAL_STATE;
        case EMPLOYEE_EDIT_SUCCESS:
            return INITIAL_STATE;
        case EMPLOYEE_FORM_RESET:
            return INITIAL_STATE;
        default:
            return state;
    }
};
