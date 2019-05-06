import { StyleSheet } from 'react-native';
import Layout, { BIG_FONT } from '../../constants/Layout';

const ProfileStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileNameAndPictureViewContainer: {
    alignItems: 'center',
    height: Layout.window.height * 0.35,
    width: Layout.window.width * 1,
  },
  profilePictureContainer: {
    height: '65%',
    width: '100%',
    ...Layout.center,
  },
  profilePictureView: {
    height: Layout.window.width * 0.3,
    width: Layout.window.width * 0.3,
    borderRadius: (Layout.window.width * 0.3) / 2,
  },
  name: {
    fontSize: BIG_FONT,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ProfileStyles;
