import '../shared/styles/global.css';
import '../shared/styles/root-colors.css';

import { Input } from '../shared/components/input';

export function Index() {
  return (
    <>
      <Input id='user' labelText='user' placeholder='Type your username' />
    </>
  );
}
