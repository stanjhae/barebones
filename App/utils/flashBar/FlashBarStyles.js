import { StyleSheet } from 'react-native';

const FlashBarStyles = StyleSheet.create({

  fontStyle: {
    color: 'white',
    fontSize: 13,
  },

  iconView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  errorMessageContainer: {
    height: '100%',
    width: '80%',
    justifyContent: 'center',
    paddingLeft: '4%',
  },

  errorContainer: {
    height: 64,
    flexDirection: 'row',
    position: 'absolute',
    width: '100%',
    zIndex: 100,
    top: 0,
    bottom: 0,
  },
});

export default FlashBarStyles;
