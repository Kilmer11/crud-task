import { showMessage } from '../../../adapters/showMessage';
import { AuthActionTypes } from '../context/authActions';
import { authLogout } from '../services/authLogout';
import type { FetchServiceError } from '../../../types/fetchError';
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
      const err = error as FetchServiceError;
      showMessage.error(`${err.message}`);
    }
  }

  return { handleLogout };
}
