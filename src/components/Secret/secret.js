import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as secretActions from '../../actions/secretActions';

class Secret extends React.Component {
  render() {
    return (
      <div>

      <h1>SecretPage</h1>
      </div>
    );
  }
}

// function mapStateToProps (state) {
//   return {
//     secret:state.secrets
// }
//
//   function mapDispatchToProps (dispatch) {
//     return {
//         secretAction: bindActionCreators(secretActions, dispatch),
//     };
//   }


export default Secret;
