import { createContext, ReactNode, useEffect, useReducer } from 'react';
import { JWTContextType, AuthState } from '../types/auth';
import axios from '../utils/axios';
import { isValidToken, setSession } from '../utils/jwt';
import {
  INITIALIZE,
  JWTReducer,
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
} from './JWTReducer';

const AuthContext = createContext<JWTContextType | null>(null);

const initialState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(JWTReducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      const accessToken = window.localStorage.getItem('accessToken');

      if (accessToken && isValidToken(accessToken)) {
        setSession(accessToken);

        //   const response = await axios.get("/api/auth/my-account");
        //   const { user } = response.data;

        dispatch({
          type: INITIALIZE,
          payload: {
            isAuthenticated: true,
            user: null,
          },
        });
      } else {
        dispatch({
          type: INITIALIZE,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);

  const signIn = async (email: string, password: string) => {
    const response = await axios.post('/login', {
      email,
      password,
    });
    const { token, user } = response.data.value;
    setSession(token);
    dispatch({
      type: SIGN_IN,
      payload: {
        user,
      },
    });
  };

  const signOut = async () => {
    setSession(null);
    dispatch({ type: SIGN_OUT });
  };

  const signUp = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => {
    const response = await axios.post('/api/auth/sign-up', {
      email,
      password,
      firstName,
      lastName,
    });
    const { accessToken, user } = response.data;

    window.localStorage.setItem('accessToken', accessToken);
    dispatch({
      type: SIGN_UP,
      payload: {
        user,
      },
    });
  };

  const resetPassword = (email: string) => console.log(email);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'jwt',
        signIn,
        signOut,
        signUp,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
