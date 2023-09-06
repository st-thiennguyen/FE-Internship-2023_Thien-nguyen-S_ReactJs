import { StorageKey } from '../constants';

export const getDataFromStorage = (key: StorageKey): any => {
  return JSON.parse(localStorage.getItem(key)!) || [];
};

export const saveDataToStorage = (key: StorageKey, items: any) => {
  localStorage.setItem(key, JSON.stringify(items));
};
