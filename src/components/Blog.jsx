import { Alert, Card, Collapse, Descriptions, Typography } from 'antd'
import React from 'react'
import { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { retrieveBlogInfoDetails } from '../api/retrieve.api'
import '../App.css'
const {Meta} = Card
const {Title,Text} = Typography
const {Panel} = Collapse

const blogImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
}

const Blog = () => {
    const readApiData = useSelector(state => state.apiData);
    const blogInfo = readApiData?.blogInfoData;
    const dispatch = useDispatch();
  
    useEffect(() => {
      retrieveBlogInfoDetails('key',dispatch);
    }, []);

  return (
    blogInfo &&
        <div className='container my-12'>
            <Descriptions title='Blog'></Descriptions>
            <Alert 
                className='w-full flex-col p-12'
                message={
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        {
                            blogInfo?.map((blog) => {
                                return (
                                    <Card
                                        className='w-[280px]'
                                        cover={
                                            <img alt="example" src={blog?.image} style={blogImageStyle} />
                                        }
                                    >
                                        <Meta 
                                            description={
                                                <Collapse>
                                                    <Panel header={<span className='font-semibold'>{blog?.headline}</span>} key="1">
                                                        <Text type="secondary">{blog?.content}</Text>
                                                    </Panel>
                                                </Collapse>
                                            }
                                        />
                                    </Card>
                                );
                            })
                        }
                    </div>
                }
            />
        </div>
  )
}

export default Blog