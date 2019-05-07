import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from 'react-native';

const ItemDetailsComponent = (props) => {
  const { navigation, item } = props;
  return (
    <>
      <Text>name: {item.name}</Text>
      <Text>location: {item.location.name}</Text>
      <Button title={'Edit Item'} onPress={() => navigation.navigate('EditItemScreen')}/>
    </>
  );
};

ItemDetailsComponent.propTypes = {
  item: PropTypes.any,
  navigation: PropTypes.object.isRequired,
};

export default ItemDetailsComponent;
