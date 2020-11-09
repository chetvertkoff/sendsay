import React, { useCallback, useState } from 'react'
import Sendsay from 'sendsay-api';

export const useHttp = () =>{
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (action, body) => {
    let sendsay = new Sendsay();
    setLoading(true);
    try {
      action = action || 'sys.settings.get';
      const response = await sendsay.request({action, ...body});
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