/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import { useAppDispatch } from 'app/store/hook';
import Select, {
  DropdownIndicatorProps,
  SingleValue,
  components,
} from 'react-select';
import { useMemo } from 'react';
import { ChevronDown } from 'shared/assets/SVGIcons/ChevronDown';
import styles from './CurrencyEnter.module.scss';
import { setCurrency } from '../model/CurrencySlice';
import { Option, customStyles, customTheme } from './Select.theme';
import { CurrencyEnterProps } from '../model/types';

const DropdownIndicator: React.FC<DropdownIndicatorProps<Option>> = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <ChevronDown />
    </components.DropdownIndicator>
  );
};

export function CurrencyEnter({ currencies }: CurrencyEnterProps) {
  const dispatch = useAppDispatch();

  const handleChange = (currentCurrency: SingleValue<Option>) => {
    dispatch(setCurrency(currentCurrency?.value));
  };

  const options: readonly Option[] = useMemo(
    () =>
      currencies.map((currency) => ({
        label: currency.id,
        value: currency.name,
      })),
    [currencies]
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>CAT</h1>
        <p className={styles.description}>currencies academic terms</p>
      </div>
      <Select
        className={styles.select}
        options={options}
        defaultValue={options[0]}
        maxMenuHeight={175}
        theme={customTheme}
        styles={customStyles}
        components={{ DropdownIndicator }}
        onChange={(cur) => handleChange(cur as SingleValue<Option>)}
      />
    </div>
  );
}
