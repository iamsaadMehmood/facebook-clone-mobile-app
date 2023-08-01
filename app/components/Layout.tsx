import {FC, ReactNode} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {heightToDp, widthToDp} from '../utils/responsive';
import {Colors} from '../utils/colors';
interface IProps {
  children: ReactNode;
}
const Layout: FC<IProps> = props => {
  return (
    <SafeAreaView style={styles.screen}>
      <View>{props.children}</View>
    </SafeAreaView>
  );
};
export default Layout;
const styles = StyleSheet.create({
  screen: {
    height: heightToDp(100),
    width: widthToDp(100),
    backgroundColor: Colors.background,
  },
});
