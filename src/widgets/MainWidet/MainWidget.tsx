import { CurrencyEnter } from 'features/CurrencyEnter/ui/CurrencyEnter';
import { CurrencyOutput } from 'entities/CurrencyOutput/ui/CurrencyOutput';
import kitten from 'shared/assets/images/Kitten.png';
import { useGetAllCurrenciesQuery } from 'features/CurrencyEnter/api/CurrencyController';
import { Rings } from 'react-loader-spinner';
import styles from './MainWidgets.module.scss';

export function MainWidget() {
  const { data: currencies, isSuccess } = useGetAllCurrenciesQuery();

  return (
    <>
      <div className={styles.headerContainer}>
        {isSuccess && <CurrencyEnter currencies={currencies} />}{' '}
        {!isSuccess && (
          <Rings
            color="black"
            width={200}
            height={200}
            wrapperClass={styles.loader}
          />
        )}
        <img className={styles.kitten} src={kitten} alt="Котик" />
      </div>
      <CurrencyOutput />
    </>
  );
}
