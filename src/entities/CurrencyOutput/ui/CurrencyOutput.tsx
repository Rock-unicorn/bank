import { useAppSelector } from 'app/store/hook';
import styles from './CurrencyOutput.module.scss';

export function CurrencyOutput() {
  const name = useAppSelector((state) => state.currencyReduser.name);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.fullCurrency}>{name}</h2>
    </div>
  );
}
