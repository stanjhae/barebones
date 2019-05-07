import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { JustFlex } from './utils/JustFlex';
import TopModal from './utils/topModal/TopModal';
import AppNavigator from './navigation/AppNavigator';
import { getAsyncStorage } from './redux/helper/helper.actions';
import FlashBar from './utils/flashBar/FlashBar';
import { getMyItems, getItems } from './utils/actions/item.util';
import { getStores } from './utils/actions/store.util';

class RootContainer extends React.Component {
  async componentDidMount() {
    await this.props.getAsync('user');
    await getMyItems();
    await getItems();
    await getStores();
  }

  render() {
    const {
      isLoading, message, flashBarVisible, flashErr, flashType,
    } = this.props;
    return (
      <JustFlex>
        <StatusBar hidden/>
        { flashBarVisible && <FlashBar type={flashType} visible={true} message={flashErr} /> }
        <TopModal visible={isLoading} message={message}/>
        <AppNavigator />
      </JustFlex>
    );
  }
}

RootContainer.propTypes = {
  flashBarVisible: PropTypes.bool.isRequired,
  flashErr: PropTypes.any,
  flashType: PropTypes.any,
  getAsync: PropTypes.any,
  isLoading: PropTypes.any,
  message: PropTypes.any,
};

const mapStateToProps = state => ({
  isLoading: state.helper.isLoading,
  message: state.helper.message,
  flashBarVisible: state.helper.flashBarVisible,
  flashErr: state.helper.flashErr,
  flashType: state.helper.flashType,
});

const mapDispatchToProps = dispatch => ({
  getAsync: item => dispatch(getAsyncStorage(item)),
  getMyItems: (user, offset, status, type) => dispatch(getMyItems(user, offset, status, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
