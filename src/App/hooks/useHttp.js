import React, { useCallback, useState } from 'react'
import Sendsay from 'sendsay-api';

export const useHttp = () =>{
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (req) => {
    const sendsay = new Sendsay();
    setLoading(true);
    try {
      const action = req.action || 'sys.settings.get';
      const response = await sendsay.request({...req, action});
      const data = await response;
      setLoading(false);
      return data;
    } catch (e) {
      setLoading(false);
      return e;
    }
  }, []);

  return {request, loading};
}