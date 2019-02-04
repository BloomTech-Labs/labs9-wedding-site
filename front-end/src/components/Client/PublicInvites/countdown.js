import React from 'react';
import ReactMomentCountDown from 'react-moment-countdown';
import moment from 'moment';
 
export default function CountDownComponent () {
  const dateInFuture = moment('2019-12-31', 'YYYY-MM-DD');
 
  return (
    <ReactMomentCountDown toDate={dateInFuture} sourceFormatMask='YYYY-MM-DD HH:mm:ss' />
  );
};