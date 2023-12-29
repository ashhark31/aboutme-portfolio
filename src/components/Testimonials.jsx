import { Alert, Card, Carousel, Descriptions, Typography } from 'antd'
import React from 'react'
import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { retrieveTestiInfoDetails } from '../api/retrieve.api';
import {Avatar} from '@mui/material'
import '../App.css'
const {Title} = Typography
const {Meta} = Card

const Testimonials = () => {
    const readApiData = useSelector(state => state.apiData);
    const testiInfo = readApiData?.testiInfoData;
    const dispatch = useDispatch();
  
    useEffect(() => {
      retrieveTestiInfoDetails('key',dispatch);
      console.log(testiInfo);
    }, []);

  return (
    testiInfo &&
        <div className='container my-12'>
            <Descriptions title='Feedback'></Descriptions>
            <Carousel autoplay>
                {
                    testiInfo?.map((testi) => {
                        return (
                            <Alert
                                className='flex justify-center testi-alert p-12'
                                message={
                                    <Card className='w-[500px]'>
                                        <figure>
                                            <blockquote className="text-center text-lg leading-8 text-gray-900 sm:leading-9">
                                                <p>
                                                “{testi?.feedback}”
                                                </p>
                                            </blockquote>
                                            <figcaption className="mt-10">
                                                {
                                                    testi?.userProfile
                                                    ?
                                                        <img
                                                            className="mx-auto h-10 w-10 rounded-full"
                                                            src={testi?.userProfile}
                                                            alt=""
                                                        />
                                                    :
                                                        <Avatar
                                                            className="mx-auto h-10 w-10 rounded-full"
                                                        >
                                                            {testi?.userName?.charAt(0)?.toUpperCase() + testi?.userName?.charAt(1)?.toUpperCase()}
                                                        </Avatar>
                                                }
                                                <div className="mt-4 pb-8 flex items-center justify-center space-x-3 text-base">
                                                    <div className="font-semibold text-gray-900">{testi?.userName}</div>
                                                    <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                                                        <circle cx={1} cy={1} r={1} />
                                                    </svg>
                                                    <div className="text-gray-600">{testi?.headline}</div>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </Card>
                                }
                                type="info"
                            />
                        );
                    })
                }
            </Carousel>
        </div>
  )
}

export default Testimonials