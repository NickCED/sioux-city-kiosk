import Button from '../misc/Button';
import styles from './HomeButton.module.css';
import active from './assets/HOME_active.png';
import inactive from './assets/HOME_inactive.png';
import { useContext } from 'react';
import { navigationContext } from '../../App';

export default function HomeButton(props) {
  const { page, setPage } = useContext(navigationContext);
  const handleHomeClick = (e) => {
    props.onClick('Home');
  };

  return (
    <div className={styles.HomeButton}>
      <Button
        style={{ position: 'unset', marginBottom: '7px', marginRight: '28px' }}
        altText='Home'
        defaultImage={inactive}
        activeImage={active}
        onClick={props.onClick}
      ></Button>
    </div>
  );
}
