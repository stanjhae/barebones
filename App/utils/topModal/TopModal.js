import PropTypes from 'prop-types';
import React from 'react';
import { Modal } from 'react-native';
import Loading from '../Loading';

export default class TopModal extends React.Component {
  render() {
    const { visible, message } = this.props;
    return (
      <Modal visible={visible} animationType="fade" transparent >
        <Loading message={message}/>
      </Modal>
    );
  }
}

TopModal.propTypes = {
  message: PropTypes.any,
  visible: PropTypes.any,
};
