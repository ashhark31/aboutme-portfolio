import { Alert, Card, Descriptions, Image, List, Steps, Typography } from 'antd'
import React,{useEffect} from 'react'
import { retrieveAchvmntInfoDetails, retrieveCrtInfoDetails, retrieveEduInfoDetails, retrieveExpInfoDetails, retrieveProjInfoDetails, retrieveSkillInfoDetails } from '../api/retrieve.api'
import {useSelector,useDispatch} from 'react-redux'
import moment from 'moment'
const {Title,Text} = Typography

const SkillsType = ({skills}) => {
    return (
        <div className='flex mb-[15px]'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[15px] '>
                {
                    skills?.keywords 
                    ?
                        skills?.keywords?.map((key) => {
                            return (
                                <Alert 
                                    message={key} 
                                    type="success" 
                                    className='min-w-[100px] text-center' 
                                />
                            );
                        })
                    :   <></>
                }
                {
                        skills?.techUsed
                        ?
                            skills?.techUsed?.map((key) => {
                                return (
                                    <Alert 
                                        message={key} 
                                        type="success" 
                                        className='min-w-[100px] text-center' 
                                    />
                                );
                            })
                        :   <></>
                }    
            </div>
        </div>                            
    )
}

const AchvmntAndCrtType = ({data}) => {
    return (
        <Card 
            bordered={false}
            style={{background:'transparent', color:'#fff'}}
        >
            <div className='flex flex-col lg:flex-row lg:gap-x-[15px]'>
                <div className='mb-[15px]'>
                    <Image
                        width={80}
                        height={80}
                        preview={false}
                        className='rounded-[20px]'
                        src={data?.achvmntProfileCtrl ? data?.achvmntProfileCtrl : data?.crtProfileCtrl}
                    />
                </div>
                <div className=''>
                    <span className='font-semibold text-xl'>
                        {data?.achvmntTitle ? data?.achvmntTitle : data?.certName}
                    </span>
                    <div className='text-lg flex flex-col'>
                        <a href={data?.url} target='_blank'>{data?.url}</a>                
                        <span>
                            <ul>
                            {
                                data?.description?.split("-) ")?.map(desc => {
                                    return (
                                        <li>{desc}</li>
                                    )
                                })
                            }
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
        </Card>
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
        <div className='container xl:px-[150px]'>
            <Typography>
                
                <div className='grid grid-cols-1'>

                    <Card 
                        bordered={false} 
                        style={{background:'transparent', color:'#fff'}}
                    >
                        <span className='text-2xl'>Experience</span>
                        {
                            expInfo?.map((exp,index) => {
                                return (
                                    <Card 
                                        key={index} 
                                        bordered={false}
                                        // className='mt-[25px]'
                                        style={{background:'transparent', color:'#fff'}}
                                    >
                                        <div className='flex flex-col lg:flex-row lg:gap-x-[15px]'>
                                            <div className='mb-[15px]'>
                                                <Image
                                                    width={80}
                                                    height={80}
                                                    preview={false}
                                                    className='rounded-[20px]'
                                                    src={exp?.companyProfileCtrl}
                                                />
                                            </div>
                                            <div className=''>
                                                <span className='font-semibold text-xl'>{exp?.companyName}</span>
                                                <div className='text-lg flex flex-col'>
                                                    <span>{exp?.position}</span>
                                                    <span>
                                                        {moment(exp?.startDate).format("DD-MM-YYYY")} - {exp?.currentlyWorking ? "Present" : moment(exp?.endDate).format("DD-MM-YYYY")}
                                                    </span>
                                                    <span>
                                                        <ul>
                                                        {
                                                            exp?.description?.split("-) ")?.map(desc => {
                                                                return (
                                                                    <li>{desc}</li>
                                                                )
                                                            })
                                                        }
                                                        </ul>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                );
                            })
                        }
                    </Card>

                    <Card 
                        bordered={false} 
                        style={{background:'transparent', color:'#fff'}}
                    >
                        <span className='text-2xl'>Education</span>
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                            {
                                eduInfo?.map((edu,index) => {
                                    return (
                                        <Card 
                                            key={index} 
                                            bordered={false}
                                            style={{background:'transparent', color:'#fff'}}
                                        >
                                            <div className='flex flex-col lg:flex-row lg:gap-x-[15px]'>
                                                <div className='mb-[15px]'>
                                                    <Image
                                                        width={80}
                                                        height={80}
                                                        preview={false}
                                                        className='rounded-[20px]'
                                                        src={edu?.universityProfileCtrl}
                                                    />
                                                </div>
                                                <div className=''>
                                                    <span className='font-semibold text-xl'>{edu?.degreeName}</span>
                                                    <div className='text-lg flex flex-col'>
                                                        <span>{edu?.courseName}</span>
                                                        <span>{edu?.university}</span>
                                                        <span>{edu?.graduationYear}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    );
                                })
                            }
                        </div>
                    </Card>

                </div>
                
                <Card 
                    bordered={false} 
                    style={{background:'transparent', color:'#fff'}}
                >
                    <span className='text-2xl'>Projects</span>
                    {
                        projInfo?.map((project,index) => {
                            return (
                                <Card 
                                    key={index} 
                                    bordered={false}
                                    // className='mt-[25px]'
                                    style={{background:'transparent', color:'#fff'}}
                                >
                                    <div className='flex flex-col lg:flex-row lg:gap-x-[15px]'>
                                        <div className='mb-[15px]'>
                                            <Image
                                                width={80}
                                                height={80}
                                                preview={false}
                                                className='rounded-[20px]'
                                                src={project?.projectImgCtrl}
                                            />
                                        </div>
                                        <div className=''>
                                            <span className='font-semibold text-xl'>{project?.projectTitle}</span>
                                            <div className='text-lg flex flex-col space-y-[5px]'>
                                                <a href={project?.url} target='_blank'>{project?.url}</a>
                                                <SkillsType skills={project} />
                                                <span>
                                                        <ul>
                                                        {
                                                            project?.description?.split("-) ")?.map(desc => {
                                                                return (
                                                                    <li>{desc}</li>
                                                                )
                                                            })
                                                        }
                                                        </ul>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            );
                        })
                    }
                </Card>

                <div className='grid grid-cols-1 xl:grid-cols-2'>
                    {
                        skillsInfo[0]?.technical
                        ?
                            <Card 
                                bordered={false} 
                                style={{background:'transparent', color:'#fff'}}
                            >
                                <span className='text-2xl'>Technical Skills</span>
                                <Card
                                    bordered={false} 
                                    style={{background:'transparent', color:'#fff'}}
                                > 
                                    {
                                        skillsInfo[0]?.technical?.map((technical) => {
                                            return (
                                                <SkillsType skills={technical} />
                                            );
                                        })
                                    }  
                                </Card>
                            </Card>                        
                        :   <></>
                    }   
                    {
                        skillsInfo[0]?.behaivioral
                        ?
                            <Card 
                                bordered={false} 
                                style={{background:'transparent', color:'#fff'}}
                            >
                                <span className='text-2xl'>Behavioral Skills</span>
                                <Card
                                    bordered={false} 
                                    style={{background:'transparent', color:'#fff'}}
                                > 
                                    {
                                        skillsInfo[0]?.behaivioral?.map((behaivioral) => {
                                            return (
                                                <SkillsType skills={behaivioral} />
                                            );
                                        })
                                    }  
                                </Card>
                            </Card> 
                        :   <></>
                    }
                </div>

                <div className='grid grid-cols-1'>
                    
                    <Card 
                        bordered={false} 
                        style={{background:'transparent', color:'#fff'}}
                    >
                        <span className='text-2xl'>Achievements</span>
                        <div className='grid grid-cols-1'>
                            {
                                achvmntInfo?.map((achieves) => {
                                    return (
                                        <AchvmntAndCrtType data={achieves} />
                                    );
                                })
                            }
                        </div>
                    </Card>

                    {/* <Descriptions title="Certifications" className='my-12'>
                        <Descriptions.Item>
                            {
                                certInfo?.map((certs) => {
                                    return (
                                        <AchvmntAndCrtType data={certs} />
                                    );
                                })
                            }
                        </Descriptions.Item>
                    </Descriptions> */}

                </div>

            </Typography>
        </div>
  )
}

export default Resume