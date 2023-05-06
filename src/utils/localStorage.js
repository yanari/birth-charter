import { DATA_KEY } from '../models/LocalStorage';

export class LocalStore {
  static setData = (data) => {
    localStorage.setItem(DATA_KEY, JSON.stringify(data));
  };
  
  static getData = () => {
    const stringData = localStorage.getItem(DATA_KEY);
    const { data, calculation } = JSON.parse(stringData)
    console.log(calculation)
    return { data, calculation }
  };

  static removeData = () => {
    localStorage.clear();
  };
}
