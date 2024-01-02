import { Alert, Card, Descriptions, Typography } from 'antd'
import React from 'react'
import '../App.css'
const {Title} = Typography
import {useSelector,useDispatch} from 'react-redux'
import {GithubOutlined, LinkedinOutlined, MailOutlined, TwitterOutlined} from '@ant-design/icons'
import { retrieveBaseInfoDetails } from '../api/retrieve.api'
import { useEffect } from 'react'

const Contact = () => {
  const readApiData = useSelector(state => state.apiData);
  const baseInfo = readApiData?.baseInfoData;
  const dispatch = useDispatch();

  useEffect(() => {
    retrieveBaseInfoDetails('key',dispatch);
  }, []);

  return (
    baseInfo[0]?.key  &&
      <div className='container my-12'>
          <Descriptions title="Contact"></Descriptions>
            <div className='w-full testi-alert p-12'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>                    
                  <Card className='flex justify-center'>
                    <MailOutlined className='text-xl flex justify-center mb-4' />
                    <a
                      className='font-semibold'
                      target='_blank' 
                      href={baseInfo[0]?.userEmailInfo}
                    >
                        {baseInfo[0]?.userEmailInfo}
                    </a>
                  </Card>   
                  <Card className='flex justify-center'>
                    <LinkedinOutlined className='text-xl flex justify-center mb-4' />
                    <a
                      className='font-semibold'
                      target='_blank' 
                      href={baseInfo[0]?.linkedinInfoCtrl}
                    >
                        {baseInfo[0]?.linkedinInfoCtrl}
                    </a>
                  </Card>   
                  <Card className='flex justify-center'>
                    <TwitterOutlined className='text-xl flex justify-center mb-4' />
                    <a
                      className='font-semibold'
                      target='_blank' 
                      href={baseInfo[0]?.twitterInfoCtrl}
                    >
                        {baseInfo[0]?.twitterInfoCtrl}
                    </a>
                  </Card>                    
                </div>
            </div>
      </div>
  )
}

export default Contact