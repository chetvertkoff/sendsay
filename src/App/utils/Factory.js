
class Factory {
  formFields(){
    return {
      val: "",
      err: false
    }
  }

  httpLogin(fields){
    const {login, subLgn, pass} = fields;
    const authData = {action: "login", login: login.val, passwd: pass.val};
    if(subLgn.val) authData.sublogin = subLgn.val;
    return authData;
  }
}

export default function getModel(model, data){
  const factory = new Factory();
  return factory[model](data);
}

