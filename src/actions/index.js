import { ADD_REMINDER, REMOVE_REMINDER, REMOVE_ALL } from "../types";

export const add_reminders = (text,date) => {
    const action = {
        type: ADD_REMINDER,
        text: text,
        date
    }
    console.log(" add ", action)
    return action;
}

export const remove_reminders = (id) => {
    const action = {
        type: REMOVE_REMINDER,
        id: id
    }
    console.log(" remove.....", action)
    return action
}

export const remove_all = () => {
    const action = {
        type: REMOVE_ALL
    }

    return action;
}