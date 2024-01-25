import React,{useEffect} from 'react';
import { Card, Flex, Typography } from 'antd';
import { retrieveBaseInfoDetails, retrieveIntroInfoDetails } from '../api/retrieve.api';
import {useSelector,useDispatch} from 'react-redux'

const cardStyle = {
  width: 'fit-content',
  border: 'none',
  background: 'transparent'
};

const Home = () => {
    const readApiData = useSelector(state => state.apiData);
    const baseInfo = readApiData?.baseInfoData;
    const introInfo = readApiData?.introInfoData;
    const dispatch = useDispatch();
  
    useEffect(() => {
      retrieveBaseInfoDetails('key',dispatch);
      retrieveIntroInfoDetails('key',dispatch);
    }, []);

  return (
    baseInfo && introInfo &&
        <div className='container my-12'>
            <Card
                style={cardStyle}
                bodyStyle={{
                    padding: '16px 0',
                    overflow: 'hidden'
                }}
            >
                <div>
                <Flex  className='grid xl:grid-cols-2 xl:ml-[200px]'>
                    <div>
                        <Flex
                            style={{
                                position: 'relative',
                                top: '140px',
                                color: '#fff',
                            }}
                            className='flex flex-col justify-center xl:justify-right'
                        >
                            <div className='text-[100px] font-bold'>
                                <h1>
                                    {baseInfo[0]?.userFirstName?.split(" ")[0]}
                                </h1>
                                <h1 className='relative top-[-50px]'>
                                    {baseInfo[0]?.userFirstName?.split(" ")[1]}
                                </h1>
                            </div>
                            <div className='border-[2px] rounded-[50px] w-[450px] p-[20px] text-center text-xl'>
                                <span>{baseInfo[0]?.headlineInfoCtrl}</span>
                            </div>
                        </Flex>
                    </div>
                    <div
                        className='top-[180px] flex flex-col items-center xl:inline'
                        style={{
                            position: 'relative'
                        }}
                    >
                        <img
                            className='class="h-[350px] w-[350px] rounded-[50px] object-cover"'
                            alt="avatar"
                            src={baseInfo[0]?.baseProfileCtrl}
                        />
                    </div>
                </Flex>
                    <Typography.Title
                        className='top-[200px] xl:top-[100px] xl:p-[150px]'
                        style={{
                            color: '#fff',
                            position: 'relative'
                        }}
                    >
                        <span className='text-xl'>
                            “{introInfo[0]?.description}”
                        </span>
                    </Typography.Title>
                </div>
            </Card>
        </div>
  )
}

export default Home;