import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const tabBarHeight = height * 0.08;
const addPhotoIconDimension = width * 0.12;
const starRatingSize = width * 0.03;
const ratingsAndReviewsStarRatingSize = width * 0.022;
const hundredPercentWidth = width * 1;
const ninetyPercentWidth = width * 0.9;
const bottomBarIconsStyle = width * 0.053;
export const BIG_FONT = width * 0.055;
export const TEXT_FONT = width * 0.035;
export const TAB_FONT = width * 0.025;
export const myImage = 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-9/38768523_1813651182049801_407605435911110656_n.j'
  + 'pg?_nc_cat=111&_nc_ht=scontent-vie1-1.xx&oh=91dbbc238a47d46d7511193190d3a552&oe=5CF9F6FB';

export default {
  flexBackgroundWhite: {
    flex: 1,
    backgroundColor: 'white',
  },
  starRatingSize,
  ninetyPercentWidth,
  ratingsAndReviewsStarRatingSize,
  addPhotoIconDimension,
  bottomBarIconsStyle,
  hundredPercentWidth,
  tabBarHeight,
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
