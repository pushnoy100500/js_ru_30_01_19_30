import {INCREMENT, DELETE_ARTICLE, CHANGE_DROPDOWN_SELECTION, CHANGE_CALENDAR_SELECTION} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }

    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function ChangeDropdownSelection(selection) {
    return {
        type: CHANGE_DROPDOWN_SELECTION,
        payload: selection
    }
}

export function changeCalendarSelection(selection) {
    return {
        type: CHANGE_CALENDAR_SELECTION,
        payload: selection
    }
}