import { connect } from 'react-redux';
import Chat from './components/Chat/Chat';
import { actions } from './components/actions';

const mapStateToProps = ({name, message, isReady, messages}) => ({name, message, isReady, messages});

const mapDispatchToProps = (dispatch) => ({
  _onNameChange: (name) => dispatch(actions.changeName(name)),
  _onReadyButtonClick: () => dispatch(actions.login()),
  _onMessageChange: (msg) => dispatch(actions.changeMessage(msg)),
  _onSendButtonClick: () => dispatch(actions.sendMsg())
})

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)

export default App;
