import {HStack, Text} from 'native-base';
import {StyleSheet} from 'react-native';

interface IProps {}
const AppBar = (props: IProps) => {
  return (
    <HStack >
      <Text>facebook</Text>
      <HStack></HStack>
    </HStack>
  );
};
const styles = StyleSheet.create({
    appBar:{
        
    }
});
export default AppBar;
