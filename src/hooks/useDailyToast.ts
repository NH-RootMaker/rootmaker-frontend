import { useState, useEffect } from 'react';

export const useDailyToast = (storageKey: string) => {
  const [shouldShowToast, setShouldShowToast] = useState(false);

  useEffect(() => {
    const today = new Date().toDateString();
    const lastShownDate = localStorage.getItem(storageKey);

    if (lastShownDate !== today) {
      setShouldShowToast(true);
      localStorage.setItem(storageKey, today);
    }
  }, [storageKey]);

  const hideToast = () => {
    setShouldShowToast(false);
  };

  return { shouldShowToast, hideToast };
};