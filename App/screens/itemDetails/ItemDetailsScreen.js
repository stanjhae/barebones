import React from 'react';
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

export default ItemDetailsScreen;
