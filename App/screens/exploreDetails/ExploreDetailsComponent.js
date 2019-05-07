import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from 'react-native';

const ExploreDetailsComponent = (props) => {
  const { navigation, item } = props;
  return (
    <>
      <Text>{item.name}</Text>
      <Button title={'Edit Item'} onPress={() => navigation.navigate('EditItemScreen')}/>
    </>
  );
};

export default ExploreDetailsComponent;

ExploreDetailsComponent.propTypes = {
  item: PropTypes.any,
  navigation: PropTypes.any,
};
