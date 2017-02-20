import {CHANGE_DROPDOWN_SELECTION} from '../constants'

export default (selections = [], action) => {
    const {type, payload} = action;

    switch (type) {
        case CHANGE_DROPDOWN_SELECTION:
            return payload
            break;

    }
    return selections;
}