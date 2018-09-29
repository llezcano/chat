import io from 'socket.io-client';
import {
  ActionTypes,
  actions
} from './actions';

export default function chatMiddleware({getState, dispatch}) {
  const socket = io('http://localhost:8888');
  return (next) => (action) => {
    switch (action.type) {
      case ActionTypes.LOGIN:
        console.log(`${ActionTypes.LOGIN}: name ${getState().name}`)
        socket.emit('login', getState().name);
        socket.on('message', (msg) => {
          console.log(`${ActionTypes.RECEIVE_MSG}: from ${msg.user} content: ${msg.msg}`)
          dispatch(actions.receiveMsg(msg))
        });
        break;
      case ActionTypes.SEND_MSG:
        console.log(`${ActionTypes.SEND_MSG}: msg ${getState().message}`)
        socket.emit('message', getState().message);
        break;
      default:
        break;
    }
    return next(action)
  }
}