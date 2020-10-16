class Validate{

  constructor(obj){
    this.data = {...obj, err: false}
  }

  _login(){
    return !/[a-zA-Z@_0-9]/g.test(this.data.val);
  }

  _pass(){
    return !/^((?![а-яА-Я]).)*$/g.test(this.data.val);
  }

  _subLgn(){
    return this._login();
  }

  isValidField(){
    const type = '_'+this.data.type;
    const isErr = this[type]();
    return {...this.data, err: isErr}
  }  
}

export default function isValid(obj){
  return new Validate(obj).isValidField();
}


