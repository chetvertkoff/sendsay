import Sendsay from 'sendsay-api';
import Cookies from 'js-cookie';

const sendsay = new Sendsay();

export default async function logout () {
  await sendsay.request({action: "logout"});
  Cookies.remove('sendsay_session'); 
  localStorage.removeItem('user_info');
}