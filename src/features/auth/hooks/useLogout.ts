import { AxiosError } from 'axios';
import { showMessage } from '../../../adapters/showMessage';
import { AuthActionTypes } from '../context/authActions';
import { authLogout } from '../services/authLogout';
import { useAuthContext } from './useAuthContext';

export function useLogout() {
  const { dispatch } = useAuthContext();

  async function handleLogout() {
    showMessage.dismiss();

    try {
      await authLogout();
      dispatch({ type: AuthActionTypes.LOGOUT });
      showMessage.success('User logged out successfully!');
    } catch (error) {
      if (error instanceof AxiosError) {
        showMessage.error(`${error.response?.data.errors}`);
      } else {
        showMessage.error('Internal error');
      }
    }
  }

  return { handleLogout };
}
