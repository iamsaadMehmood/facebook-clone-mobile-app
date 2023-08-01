import {Pressable, Text} from 'native-base';
import {StyleSheet} from 'react-native';
import {responsiveFontSize, widthToDp} from '../utils/responsive';
import {Colors} from '../utils/colors';
interface IProps {
  onPress: Function;
  title: string;
  marginTop: number;
  type: 'Primary' | 'Secondary';
  width: number;
  height?: number;
}

const ButtonComponent = (props: IProps) => {
  const {type} = props;

  return (
    <Pressable
      height={props.height ? props.height : 50}
      onPress={() => props.onPress()}
      marginTop={props.marginTop}
      width={widthToDp(props.width)}
      style={[
        styles.btn,
        type === 'Primary'
          ? {
              backgroundColor: Colors.primary500,
            }
          : {
              backgroundColor: Colors.primary,
            },
      ]}>
      <Text
        style={[
          styles.title,
          type === 'Primary'
            ? {
                color: Colors.primary,
              }
            : {
                color: Colors.primary500,
              },
        ]}>
        {props.title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: responsiveFontSize(16),
  },
});

export default ButtonComponent;
