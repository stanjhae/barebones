import React from 'react';
import { connect } from 'react-redux';
import EditItemComponent from './EditItemComponent';

class EditItemScreen extends React.Component {
  render() {
    return (
      <EditItemComponent {...this.props}/>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item.item,
});

export default connect(mapStateToProps)(EditItemScreen);
