
import LoginPage from '../pages/LoginPage/LoginPage';

export const authPaths = {
  login: '/login',
  signUp: '/signUp',
  requestResetPassword: '/reset-password',
  resetPassword: '/reset-password/:confirmationToken',
};

export default [
  {
    path: authPaths.login,
    component: LoginPage,
    authenticated: false,
    exact: true,
  }
];
