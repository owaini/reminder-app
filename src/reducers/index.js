import { ADD_REMINDER, REMOVE_REMINDER, REMOVE_ALL } from "../types";
import { bake_cookie, read_cookie } from "sfcookies";

const reminders = (state = [], action) => {
    let reminder = null;

    state = read_cookie('reminder')
    if(action.type === ADD_REMINDER) {
        reminder = [...state, {text: action.text, date: action.date, id: Math.random() * 13}]
        bake_cookie('reminder', reminder)
        return reminder
    } else if (action.type === REMOVE_REMINDER) {
			reminder = state.filter((rem) => rem.id !== action.id);
            bake_cookie("reminder", reminder);
			console.log("..From Reducer Remove...", reminder);
			return reminder;
		} else if (action.type === REMOVE_ALL) {
        reminder = []
        bake_cookie("reminder", reminder);
        console.log(reminder)
        return reminder
    }else {
        return state
    }
}

export default reminders;