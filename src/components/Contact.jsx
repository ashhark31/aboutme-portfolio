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
      <div className='container my-12 xl:px-[150px]'>
        <Card 
            bordered={false}
            // className='mt-[25px]'
            style={{background:'transparent', color:'#fff'}}
        >
          <div className='flex flex-col xl:flex-row gap-4'>                    
            <Card 
              // bordered={false}
              style={{background:'transparent', color:'#fff'}}
              className='flex justify-center border-[1px] xl:border-none'
            >
              <MailOutlined className='text-xl flex justify-center mb-4' />
              <a
                className='font-semibold'
                target='_blank' 
                href={baseInfo[0]?.userEmailInfo}
              >
                  {baseInfo[0]?.userEmailInfo}
              </a>
            </Card>   
            <Card 
              bordered={false}
              style={{background:'transparent', color:'#fff'}}
              className='flex justify-center border-[1px] xl:border-none'
            >
              <LinkedinOutlined className='text-xl flex justify-center mb-4' />
              <a
                className='font-semibold'
                target='_blank' 
                href={baseInfo[0]?.linkedinInfoCtrl}
              >
                  {baseInfo[0]?.linkedinInfoCtrl}
              </a>
            </Card>   
            <Card 
              bordered={false}
              style={{background:'transparent', color:'#fff'}}
              className='flex justify-center border-[1px] xl:border-none'
            >
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
        </Card>           
      </div>
  )
}

export default Contact