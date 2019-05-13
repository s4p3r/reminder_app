import {ADD_REMINDER} from '../constants'

const reminder = (action) => {
  return {
    text: action.text,
    id: Math.random()
  }
}

const reminders = (state = [], action = {}) => {
  switch(action.type) {
    case ADD_REMINDER:
    reminder(action)
    return [
      ...state,
      reminder(action)
    ]
    default: return state;
  }
}

export default reminders;

