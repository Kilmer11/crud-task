import '../shared/styles/global.css';
import '../shared/styles/root-colors.css';

import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/appRoutes';

export function Index() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
