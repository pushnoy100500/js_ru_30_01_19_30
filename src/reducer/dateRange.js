import {CHANGE_CALENDAR_SELECTION} from '../constants';

export default (selection = {from: null, to: null}, action) => {
    const {type, payload} = action;

    switch (type) {
        case CHANGE_CALENDAR_SELECTION:
            return payload;
            break;
    }

    return selection;
}
