export interface ICredentials {
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
}

export interface ICredentialsValidation {
  email: boolean;
  confirmEmail: boolean;
  password: boolean;
  confirmPassword: boolean;
}

export interface IUserInfoAuth {
  email: string;
  password: string;
}
