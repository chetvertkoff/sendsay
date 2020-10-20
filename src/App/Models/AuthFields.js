export default class AuthFields {
  constructor({login, sublogin, password}){
    this.login = login.val;
    if(sublogin.val) this.sublogin = sublogin.val || "";
    this.passwd = password.val;
  }
}