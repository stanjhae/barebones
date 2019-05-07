import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native';

const ItemDetailsComponent = (props) => {
  const { navigation } = props;
  return (
    <Button title={'Edit Item'} onPress={() => navigation.navigate('EditItemScreen')}/>
  );
};

ItemDetailsComponent.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ItemDetailsComponent;
