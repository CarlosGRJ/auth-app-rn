import { useState } from 'react';

import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import { IUserInfoAuth } from '../components/Auth/types/index';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { Alert } from 'react-native';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const signupHandler = async ({ email, password }: IUserInfoAuth) => {
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
    } catch (error: unknown) {
      Alert.alert(
        'Authentication failed!',
        'Could not create user, please check your input and try again later.',
      );
    }
    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message='Creating user...' />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
