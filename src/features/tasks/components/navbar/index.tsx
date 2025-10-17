import styles from './styles.module.css';

import { Button } from '../../../../components/button';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1>My tasks</h1>
      <Button children={<Link to={"/create/task"}>New Task</Link>}/>
    </nav>
  );
}
