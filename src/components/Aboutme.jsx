import { Alert, Descriptions, Typography } from 'antd'
import React, {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { retrieveBaseInfoDetails } from '../api/retrieve.api';
import moment from 'moment'
const {Title} = Typography

const AboutMe = () => {
  const readApiData = useSelector(state => state.apiData);
  const baseInfo = readApiData?.baseInfoData;
  const live = [baseInfo[0]?.addressCityInfo,baseInfo[0]?.addressStateInfo,baseInfo[0]?.addressCountryInfo].join(", ");
  const dispatch = useDispatch();

  useEffect(() => {
    retrieveBaseInfoDetails('key',dispatch);
    console.log(baseInfo);
  }, []);

  return (
    baseInfo[0]?.key  &&  live &&
      <div className='container my-12'>
        <Descriptions title='About Me'></Descriptions>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[4px]'>
            <Alert
              message={<span className='font-semibold'>{baseInfo[0]?.userFirstName}</span>}
              description="first_name"
              type="info"
            />
            <Alert
              message={<span className='font-semibold'>{baseInfo[0]?.userLastName}</span>}
              description="last_name"
              type="info"
            />
            <Alert
              message={<span className='font-semibold'>{baseInfo[0]?.headlineInfoCtrl}</span>}
              description="occupation"
              type="info"
            />
            <Alert
              message={<span className='font-semibold'>{moment(baseInfo[0]?.userDOBCtrl).format("Do MMM YYYY")}</span>}
              description="date_of_birth"
              type="info"
            />
            <Alert
              message={<span className='font-semibold'>{live}</span>}
              description="live"
              type="info"
            />
            <Alert
              message={<span className='font-semibold'>{baseInfo[0]?.userEmailInfo}</span>}
              description="email"
              type="info"
            />
          </div>
      </div>
  )
}

export default AboutMe