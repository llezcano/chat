import {createAction} from 'redux-actions'

export const ActionTypes = {
  SEND_MSG: 'SEND_MSG',
  RECEIVE_MSG: 'RECEIVE_MSG',
  LOGIN: 'LOGIN',
  CHANGE_NAME: 'CHANGE_NAME',
  CHANGE_MESSAGE: 'CHANGE_MESSAGE'
}

export const actions = {
  sendMsg: () => {
    return createAction(ActionTypes.SEND_MSG)()
  },
  receiveMsg: (msg) => {
    return createAction(ActionTypes.RECEIVE_MSG)(msg)
  },
  login: () => {
    return createAction(ActionTypes.LOGIN)()
  },
  changeName: (event) => {
    return createAction(ActionTypes.CHANGE_NAME)(event.target.value)
  },
  changeMessage: (event) => {
    return createAction(ActionTypes.CHANGE_MESSAGE)(event.target.value)
  }
}