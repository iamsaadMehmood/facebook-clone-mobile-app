import {FC, ReactNode} from 'react';
import {SafeAreaView, View} from 'react-native';
interface IProps {
  children: ReactNode;
}
const Layout: FC<IProps> = props => {
  return (
    <SafeAreaView>
      <View>{props.children}</View>
    </SafeAreaView>
  );
};
export default Layout;
