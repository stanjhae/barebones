import { StyleSheet } from 'react-native';
import Layout from '../../constants/Layout';

const textInputStyles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  textInput: {
    height: Layout.window.height * 0.05,
    width: Layout.window.width * 0.9,
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
  },
});

export default textInputStyles;
