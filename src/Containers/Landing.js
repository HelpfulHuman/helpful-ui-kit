import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Landing from '../Components/Landing';
import { addNumber, subtractNumber } from '../Actions/Number.js';

function mapStateToProps (state) {
  return {
    number: state.number.value
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    addNumber,
    subtractNumber
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
