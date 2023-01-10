import { useEffect, useState } from 'react';

export const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    // Обновленное значение после задержки
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    // Отмена таймаута при изменении значения
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};
