import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppNavigator from './navigation/AppNavigator';
import { JustFlex } from './utils/JustFlex';
import TopModal from './utils/topModal/TopModal';
import { getAsyncStorage } from './redux/helper/helper.actions';

class RootContainer extends React.Component {
  componentDidMount() {
    this.props.getAsync('user');
  }

  render() {
    const { isLoading, message } = this.props;
    return (
      <JustFlex>
        <TopModal visible={isLoading} message={message}/>
        <AppNavigator/>
      </JustFlex>
    );
  }
}

RootContainer.propTypes = {
  getAsync: PropTypes.any,
  isLoading: PropTypes.any,
  message: PropTypes.any,
};

const mapStateToProps = state => ({
  isLoading: state.helper.isLoading,
  message: state.helper.message,
});

const mapDispatchToProps = dispatch => ({
  getAsync: item => dispatch(getAsyncStorage(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
