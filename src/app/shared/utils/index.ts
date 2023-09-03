import { StorageKey } from "../constants";

export const getDataFromStorage = (key: StorageKey): [] => {
    return JSON.parse(localStorage.getItem(key)!) || [];
};

export const saveDataToStorage = (key: StorageKey, items: []) => {
    localStorage.setItem(key, JSON.stringify(items));
};