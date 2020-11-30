import React, { useCallback, useState } from 'react'
import Sendsay from 'sendsay-api';

export const useHttp = () =>{
  const request = useCallback(async (req) => {
    const sendsay = new Sendsay();
    try {
      sendsay.setSessionFromCookie();
      const action = req.action;
      const response = await sendsay.request({...req, action});
      return response;
    } catch (e) {
      return e;
    }
  }, []);

  return {request};
}