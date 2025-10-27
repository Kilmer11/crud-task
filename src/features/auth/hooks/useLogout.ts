import { showMessage } from '../../../adapters/showMessage';
import { authLogout } from '../services/authLogout';
import type { FetchServiceError } from '../../../types/fetchError';
import { useAuthContext } from './useAuthContext';

export function useLogout() {
  const { dispatch } = useAuthContext();

  async function handleLogout() {
    dispatch({ type: 'REQUEST', payload: { operation: 'LOGOUT' } });
    showMessage.dismiss();

    try {
      await authLogout();
      dispatch({ type: 'LOGOUT_SUCCESS' });
      showMessage.success('User logged out successfully!');
    } catch (error) {
      const err = error as FetchServiceError;
      showMessage.error(`${err.message}`);
      dispatch({
        type: 'FAILURE',
        payload: { operation: 'LOGOUT', message: err.message },
      });
    }
  }

  return { handleLogout };
}
