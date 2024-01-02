import { Alert, Descriptions, List, Steps, Typography } from 'antd'
import React,{useEffect} from 'react'
import { retrieveAchvmntInfoDetails, retrieveCrtInfoDetails, retrieveEduInfoDetails, retrieveExpInfoDetails, retrieveProjInfoDetails, retrieveSkillInfoDetails } from '../api/retrieve.api'
import {useSelector,useDispatch} from 'react-redux'
import moment from 'moment'
const {Title,Text} = Typography

const Description = ({project}) => {
    return (
        <Steps progressDot direction='vertical'>
            <Steps.Item 
                title={
                    <div className='flex flex-col'>
                        <span className='font-semibold'>{project?.projectTitle}</span>
                        <a href={project?.url} target='_blank'>{project?.url}</a>
                    </div>                                          
                }
                description={
                    <Alert
                        message={
                            <div className='flex flex-col m-4'>
                                <div className='grid justify-items-stretch grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-4'>
                                    {
                                        project?.techUsed?.map((tech) => {
                                            return (
                                                <Alert className='w-full text-center' message={tech} type="success" />                                                           
                                            );
                                        })
                                    }
                                </div>
                                <Text type="secondary">{project?.description}</Text>
                            </div>
                        }
                        type="info"
                    />                                
                }
            />
        </Steps>
    )
}

const SkillsType = ({skills}) => {
    return (
        <Alert
            message={
                <div className='m-4 text-center'>
                    <dt className="text-sm my-4 text-center font-medium leading-6 text-gray-900">{skills?.name}</dt>
                    <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0 grid justify-items-stretch grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                        {
                            skills?.keywords?.map((key) => {
                                return (
                                    <Alert message={key} type="success" />
                                );
                            })
                        }                                                
                    </dd>
                </div>           
            }
            type="info"
        />                                
    )
}

const AchvmntAndCrtType = ({data}) => {
    return (
        <Steps progressDot direction='vertical'>
            <Steps.Item 
                title={
                    <div className="px-4 sm:px-0 flex flex-col">
                        <span className='font-semibold'>
                            {data?.achvmntTitle ? data?.achvmntTitle : data?.certName}
                        </span>
                        <a href={data?.url} target='_blank'>{data?.url}</a>                
                    </div>
                }
                description={
                    <Alert
                        message={
                            <div>
                                <Text type="secondary">{data?.description}</Text>
                            </div>
                        }
                        type="info"
                    />                                
                }
            />
        </Steps>
    )
}

const Resume = () => {
    const readApiData = useSelector(state => state.apiData);
    const eduInfo = readApiData?.eduInfoData;
    const expInfo = readApiData?.expInfoData;
    const projInfo = readApiData?.projInfoData;
    const skillsInfo = readApiData?.skillInfoData;
    const achvmntInfo = readApiData?.achvmntInfoData;
    const certInfo = readApiData?.crtInfoData;
    const dispatch = useDispatch();
  
    useEffect(() => {
      retrieveEduInfoDetails('key',dispatch);
      retrieveExpInfoDetails('key',dispatch);
      retrieveProjInfoDetails('key',dispatch);
      retrieveSkillInfoDetails('key',dispatch);
      retrieveAchvmntInfoDetails('key',dispatch);
      retrieveCrtInfoDetails('key',dispatch);
    }, []);

  return (
    eduInfo && expInfo &&
        <div className='container'>
            <Typography>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    
                    <Descriptions title="Education">
                        <Descriptions.Item>
                            <Steps direction="vertical">
                                {
                                    eduInfo?.map((edu,index) => {
                                        return (
                                            <Steps.Item 
                                                key={index+1} 
                                                title={
                                                    <span className='font-semibold'>{edu?.degreeName}</span>
                                                }
                                                description={
                                                    <Alert
                                                        message={
                                                            <div className='flex flex-col'>
                                                                <span>{edu?.courseName}</span>
                                                                <span>{edu?.university}</span>
                                                                <span>{edu?.graduationYear}</span>
                                                            </div>
                                                        }
                                                        type="info"
                                                    />
                                                }
                                            />
                                        );
                                    })
                                }
                            </Steps>
                        </Descriptions.Item>
                    </Descriptions>

                    <Descriptions title="Experience">
                        <Descriptions.Item>
                            <Steps direction="vertical">
                                {
                                    expInfo?.map((exp,index) => {
                                        return (
                                            <Steps.Item 
                                                key={index+1} 
                                                title={
                                                    <span className='font-semibold'>{exp?.companyName}</span>                                                   
                                                }
                                                description={
                                                    <Alert
                                                        message={
                                                            <div className='flex flex-col'>
                                                                <Text>{exp?.position}</Text>
                                                                <Text>
                                                                    {moment(exp?.startDate).format("DD-MM-YYYY")} - {exp?.currentlyWorking ? "Present" : moment(exp?.endDate).format("DD-MM-YYYY")}
                                                                </Text>
                                                                <Text type="secondary">{exp?.description}</Text>
                                                            </div>
                                                        }
                                                        type="info"
                                                    />
                                                    
                                                }
                                            />
                                        );
                                    })
                                }
                            </Steps>
                        </Descriptions.Item>
                    </Descriptions>

                </div>

                
                <Descriptions title="Projects" className='my-12'>
                    <Descriptions.Item>
                        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
                        {
                            projInfo?.map((project) => {
                                return (
                                    <Description project={project} />
                                )
                            })
                        }
                        </div>
                    </Descriptions.Item>
                </Descriptions>

                <Descriptions title="Skills" className='my-12'>
                    <Descriptions.Item>
                        <div className='grid gap-4 grid-cols-1'>
                            {
                                skillsInfo[0]?.technical
                                ?
                                    <Steps progressDot direction='vertical'>
                                        <Steps.Item 
                                            title={
                                                <span className='font-semibold'>Technical</span>
                                            }
                                            description={
                                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                                {
                                                    skillsInfo[0]?.technical?.map((technical) => {
                                                        return (
                                                            <SkillsType skills={technical} />
                                                        );
                                                    })   
                                                }
                                                </div>                           
                                            }
                                        />
                                    </Steps>
                                :   <></>
                            }   
                            {
                                skillsInfo[0]?.behaivioral
                                ?
                                    <Steps progressDot direction='vertical'>
                                        <Steps.Item 
                                            title={
                                                <span className='font-semibold'>Behavioral</span>
                                            }
                                            description={
                                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                                {
                                                    skillsInfo[0]?.behaivioral?.map((behaivioral) => {
                                                        return (
                                                            <SkillsType skills={behaivioral} />
                                                        );
                                                    })    
                                                }                          
                                                </div>
                                            }
                                        />
                                    </Steps>
                                :   <></>
                            }
                        </div>
                    </Descriptions.Item>
                </Descriptions>

                <div className='grid grid-cols-1 md:grid-cols-2'>
                    
                    <Descriptions title="Achievements" className='my-12'>
                        <Descriptions.Item>
                            {
                                achvmntInfo?.map((achieves) => {
                                    return (
                                        <AchvmntAndCrtType data={achieves} />
                                    );
                                })
                            }
                            
                        </Descriptions.Item>
                    </Descriptions>

                    <Descriptions title="Certifications" className='my-12'>
                        <Descriptions.Item>
                            {
                                certInfo?.map((certs) => {
                                    return (
                                        <AchvmntAndCrtType data={certs} />
                                    );
                                })
                            }
                        </Descriptions.Item>
                    </Descriptions>

                </div>

            </Typography>
        </div>
  )
}

export default Resume