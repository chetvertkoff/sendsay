import FormFields from './FormFields';
import AuthFields from './AuthFields';

class Factory {
  static list = {
    FormFields,
    AuthFields
  }

  constructor(data){
    this.data = data;
  }

  create(name){
    return new Factory.list[name](this.data);
  }
}

const getModel = (name, data) => {
  return new Factory(data).create(name);
}

export default getModel;
