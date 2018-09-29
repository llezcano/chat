import { ActionTypes } from './actions';

const initialState = {
  name: '',
  message: '',
  isReady: false,
  messages: []
}

export default function chatApp(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        ...state,
        isReady: true,
      }
    case ActionTypes.RECEIVE_MSG:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      }
    case ActionTypes.SEND_MSG:
      return {
        ...state,
        message: ''
      }
    case ActionTypes.CHANGE_MESSAGE:
      return {
        ...state,
        message: action.payload
      }
    case ActionTypes.CHANGE_NAME:
      return {
        ...state,
        name: action.payload
      }
    default:
      return state;
  }
}