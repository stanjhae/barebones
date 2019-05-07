import React from 'react';
import { connect } from 'react-redux';
import NewItemComponent from './NewItemComponent';

class NewItemScreen extends React.Component {
  render() {
    return <NewItemComponent {...this.props}/>;
  }
}

const mapStateToProps = state => ({
  item: state.item.item,
  stores: state.store.stores,
});

export default connect(mapStateToProps)(NewItemScreen);
