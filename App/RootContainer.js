import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { JustFlex } from './utils/JustFlex';
import TopModal from './utils/topModal/TopModal';
import AppNavigator from './navigation/AppNavigator';
import { getAsyncStorage } from './redux/helper/helper.actions';
import FlashBar from './utils/flashBar/FlashBar';

class RootContainer extends React.Component {
  componentDidMount() {
    this.props.getAsync('user');
  }

  render() {
    const { isLoading, message, flashBarVisible } = this.props;
    return (
      <JustFlex>
        <StatusBar hidden/>
        { flashBarVisible && <FlashBar type='success' visible={true} message='Something went wrong. Try again' /> }
        <TopModal visible={isLoading} message={message}/>
        <AppNavigator />
      </JustFlex>
    );
  }
}

RootContainer.propTypes = {
  getAsync: PropTypes.any,
  isLoading: PropTypes.any,
  message: PropTypes.any,
  flashBarVisible: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isLoading: state.helper.isLoading,
  message: state.helper.message,
  flashBarVisible: state.helper.flashBarVisible,
});

const mapDispatchToProps = dispatch => ({
  getAsync: item => dispatch(getAsyncStorage(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
