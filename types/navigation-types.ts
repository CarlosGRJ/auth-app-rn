import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Welcome: undefined;
};

export type TUseNavigation = NativeStackNavigationProp<RootStackParamList>;
