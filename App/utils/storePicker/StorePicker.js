import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, Picker } from 'react-native';

const StorePicker = (props) => {
  const {
    value, error, onChange, stores,
  } = props;
  return (
    <View>
      <Picker selectedValue={value} style={{ height: 150, width: 100 }} onValueChange={onChange}>
        {stores.map(store => <Picker.Item key={store._id} label={store.name} value={store._id} />)}
      </Picker>
      <Text>{error}</Text>
    </View>
  );
};

export default StorePicker;

StorePicker.propTypes = {
  error: PropTypes.any,
  onChange: PropTypes.any,
  stores: PropTypes.any,
  value: PropTypes.any,
};
