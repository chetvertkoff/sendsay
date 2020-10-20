class Validate{

  constructor(){
    this.field = {};
    this.fields = {};
  }

  _login(){
    if(!this.field.val) return true;
    return !/[a-zA-Z@_0-9]/g.test(this.field.val);
  }

  _password(){
    if(!this.field.val) return true;
    return !/^((?![а-яА-Я]).)*$/g.test(this.field.val);
  }

  _sublogin(){
    if(!this.field.val) return false;
    return this._login();
  }

  isValidField(obj){
    this.field = {...obj, err: false};
    const type = `_${this.field.type}`;
    const isErr = this[type]();
    return {...this.field, err: isErr};
  }  

  isValidForm(state){
    this.fields = state.fields;
    let isErr = state.isErr;
    for (let type in this.fields) {
      this.fields[type] = this.isValidField({...this.fields[type], type});
      delete this.fields[type].type;
      if(this.fields[type].err) isErr = true;
    }

    return {fields: this.fields, isErr};
  }
}

export default new Validate();


