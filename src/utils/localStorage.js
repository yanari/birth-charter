import { DATA_KEY } from '@/models/LocalStorage';

export class LocalStore {
  static setData = (data) => {
    localStorage.setItem(DATA_KEY, JSON.stringify(data));
  };
  
  static getData = () => {
    const stringData = localStorage.getItem(DATA_KEY);
    const { dominant, lack, calculation, chartImage } = JSON.parse(stringData)
    
    return { dominant, lack, calculation, chartImage }
  };

  static removeData = () => {
    localStorage.clear();
  };
}
