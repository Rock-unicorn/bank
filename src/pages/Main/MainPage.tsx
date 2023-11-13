import { MainWidget } from 'widgets/MainWidet/MainWidget';
import styles from './MainPage.module.scss';

export function MainPage() {
  return (
    <div className={styles.layout}>
      <MainWidget />
    </div>
  );
}
