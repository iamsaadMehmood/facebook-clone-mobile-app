import {Dimensions, PixelRatio} from 'react-native';

export const {width, height, fontScale} = Dimensions.get('window');

const responsiveFontSize = (fontSize: number) => {
  return PixelRatio.roundToNearestPixel(fontSize * fontScale);
};

const widthToDp = (number: number) => {
  const givenWidth = typeof number === 'number' ? number : parseFloat(number);
  return PixelRatio.roundToNearestPixel((width * givenWidth) / 100);
};

const heightToDp = (number: number) => {
  const givenHeight = typeof number === 'number' ? number : parseFloat(number);
  return PixelRatio.roundToNearestPixel(height * (givenHeight / 100));
};

const IsMobileHeight = height < 1000;
const IsMobileWidth = width < 500;

export {
  IsMobileHeight,
  IsMobileWidth,
  heightToDp,
  responsiveFontSize,
  widthToDp,
};
