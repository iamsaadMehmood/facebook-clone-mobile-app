import {HStack, Text} from 'native-base';
import {StyleSheet} from 'react-native';
import {heightToDp, responsiveFontSize} from '../utils/responsive';
import {Colors} from '../utils/colors';

const AppBar = () => {
  return (
    <HStack style={styles.appBar}>
      <Text style={styles.title}>facebook</Text>
      <HStack></HStack>
    </HStack>
  );
};
const styles = StyleSheet.create({
  appBar: {
    height: heightToDp(9),
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: responsiveFontSize(24),
    fontWeight: '800',
    color: Colors.primary,
    lineHeight: 30,
  },
});
export default AppBar;
