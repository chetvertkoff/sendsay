class Validate{

  constructor({val, type}){
    this.type = type;
    this.val = val;
    this.err = false
  }

  login(){
    return /[a-zA-Z]/.test(this.val);
  }

  #pass(){

  }

  #subLgn(){

  }

  isValidField(){
    const type = this.type;
    console.log(this[type]());
    return this[type]();
  }  
}

export default function isValid(obj){
  return new Validate(obj).isValidField();
}


