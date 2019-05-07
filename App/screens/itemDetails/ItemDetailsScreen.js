import React from 'react';
import { connect } from 'react-redux';
import ItemDetailsComponent from './ItemDetailsComponent';

class ItemDetailsScreen extends React.Component {
  render() {
    return (
      <>
        <ItemDetailsComponent {...this.props} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item.item,
});

export default connect(mapStateToProps)(ItemDetailsScreen);
