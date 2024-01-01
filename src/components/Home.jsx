import React,{useEffect} from 'react';
import { Card, Flex, Typography } from 'antd';
import { retrieveBaseInfoDetails, retrieveIntroInfoDetails } from '../api/retrieve.api';
import {useSelector,useDispatch} from 'react-redux'
const { Text } = Typography;

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
                <Flex className='flex sm:flex-col sm:items-center xl:flex-row' justify="space-between">
                    <img
                        className='class="h-full w-full rounded-xl object-cover"'
                        alt="avatar"
                        src={baseInfo[0]?.baseProfileCtrl}
                    />
                    <Flex
                        vertical
                        align="flex-end"
                        justify="space-between"
                        style={{
                            padding: 32,
                        }}
                    >
                        <Typography.Title>
                            <Text type="secondary" className='text-xl'>
                                “{introInfo[0]?.description}”
                            </Text>
                        </Typography.Title>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <Text strong>
                                {baseInfo[0]?.userFirstName}
                            </Text>
                            <Text type="secondary">
                                {baseInfo[0]?.headlineInfoCtrl}
                            </Text>
                        </div>
                    </Flex>
                </Flex>
            </Card>
        </div>
  )
}

export default Home;