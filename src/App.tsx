import './styles/global.css';
import './styles/theme-colors.css';

import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/appRoutes';
import { MessageContainer } from './components/messageContainer';
import { AuthProvider } from './features/auth/context/authProvider';

export function Index() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <MessageContainer />
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}
