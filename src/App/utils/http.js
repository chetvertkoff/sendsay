import Sendsay from 'sendsay-api';

export default async function http (req) {
  const sendsay = new Sendsay();

  try {
    sendsay.setSessionFromCookie();
    const {action} = req;
    const response = await sendsay.request({...req, action});
    
    return response;
  } catch (e) {
    return e;
  }
}