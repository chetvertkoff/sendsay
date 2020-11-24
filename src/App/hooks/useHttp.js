import React, { useCallback, useState } from 'react'
import Sendsay from 'sendsay-api';

export const useHttp = () =>{
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (req) => {
    const sendsay = new Sendsay();
    setLoading(true);
    try {
      sendsay.setSessionFromCookie();
      const action = req.action;
      const response = await sendsay.request({...req, action});
      setLoading(false);
      return response;
    } catch (e) {
      setLoading(false);
      return e;
    }
  }, []);

  return {request, loading};
}