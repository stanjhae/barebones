import React from 'react';
import { Button } from 'react-native';

export const HomeComponent = (props) => {
  const { navigation } = props;
  return (
    <Button title="Add Item" onPress={() => navigation.navigate('NewItemScreen')}/>
  );
};
