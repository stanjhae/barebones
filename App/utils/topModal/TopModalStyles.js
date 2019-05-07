import { StyleSheet } from 'react-native';
import Layout from '../../constants/Layout';

const topModalStyles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerView: {
    height: Layout.window.height * 0.2,
    width: Layout.window.height * 0.2,
    borderRadius: 20,
    backgroundColor: '#555',
    ...Layout.center,
  },
});

export default topModalStyles;
