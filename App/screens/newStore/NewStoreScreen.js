import React from 'react';
import { connect } from 'react-redux';
import NewStoreComponent from './NewStoreComponent';

class NewStoreScreen extends React.Component {
  render() {
    return (
      <NewStoreComponent {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  store: state.store.store,
});

export default connect(mapStateToProps)(NewStoreScreen);
