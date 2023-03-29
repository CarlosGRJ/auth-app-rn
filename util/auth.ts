import axios from 'axios';
import { IAuthResponse } from './types';

const API_KEY = 'AIzaSyAMseZ85Q8GlWt049gewf87yMArl5Ckj2w';

const authenticate = async (mode: string, email: string, password: string) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post<IAuthResponse>(url, {
    email,
    password,
    returnSecureToken: true,
  });
  console.log('responseData ', response.data);
};

export const createUser = async (email: string, password: string) => {
  await authenticate('signUp', email, password);
};

export const login = async (email: string, password: string) => {
  await authenticate('signInWithPassword', email, password);
};
