import styles from './styles.module.css';

import { useCallback, useState } from 'react';
import { Button } from '../button';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../features/auth/hooks/useAuthContext';
import { LogIn, LogOut } from 'lucide-react';
import { useLogout } from '../../features/auth/hooks/useLogout';
import { ConfirmModal } from '../confirmModal';
import { Loading } from '../loading';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { state } = useAuthContext();
  const { handleLogout } = useLogout();
  const navigate = useNavigate();

  const openConfirm = useCallback(() => setOpen(true), []);
  const closeConfirm = useCallback(() => setOpen(false), []);

  const handleConfirm = useCallback(async () => {
    try {
      await handleLogout();
    } finally {
      setOpen(false);
    }
  }, [handleLogout]);

  const onActionClick = useCallback(() => {
    if (state.isLoggedIn) {
      openConfirm();
    } else {
      navigate('/login');
    }
  }, [state.isLoggedIn, openConfirm, navigate]);

  if (state.isLoading) return <Loading />;

  return (
    <nav className={styles.navbar}>
      {open && (
        <ConfirmModal
          message='Do you want to log out?'
          onConfirm={handleConfirm}
          onCancel={closeConfirm}
        />
      )}

      <h1>My tasks</h1>
      <div className={styles.actions}>
        <Button
          onClick={onActionClick}
          variant='cancel'
          title={state.isLoggedIn ? 'Log out' : 'Log in'}
        >
          {state.isLoggedIn ? (
            <>
              Log out <LogOut />
            </>
          ) : (
            <>
              Log in <LogIn />
            </>
          )}
        </Button>
        <Button>
          <Link to={'/create/task'}>New Task</Link>
        </Button>
      </div>
    </nav>
  );
}
