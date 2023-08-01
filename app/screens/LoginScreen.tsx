import {Text} from 'native-base';
import Layout from '../components/Layout';
import ButtonComponent from '../components/ButtonComponent';
import {navigate} from '../services/navigation.service';
import {Screens} from '../helpers/screenConstant';

const LoginScreen = () => {
  return (
    <Layout>
      <Text>Login</Text>
      <ButtonComponent
        onPress={() => navigate(Screens.login)}
        title={'Create an Account'}
        marginTop={0}
        type={'Primary'}
        width={90}
      />
    </Layout>
  );
};

export default LoginScreen;
