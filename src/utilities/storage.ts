type Callback = (value: any) => void;
type Storage = { [key:string]: Array<Callback> };
type SetValue = (key: string, value: any) => void;
type GetValue = (key: string) => string | null;
type Subscribe = (key: string, callback: Callback) => void;

const storage: Storage = {};

export const setValue: SetValue = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));

  if (storage[key]) storage[key].forEach(callback => callback(value));
};

export const getValue: GetValue = (key) => {
  const lsValue = localStorage.getItem(key);

  if (!lsValue) return null;

  return JSON.parse(lsValue);
};

export const subscribe: Subscribe = (key, callback) => {
  if (!storage[key]) storage[key] = [];
  storage[key].push(callback);

  callback(getValue(key));
};
