import { 
    setAchvmntInfoData,
    setBaseInfoData, 
    setBlogInfoData, 
    setCrtInfoData, 
    setEduInfoData, 
    setExpInfoData,
    setIntroInfoData,
    setKeyInfoData,
    setProjInfoData,
    setSkillInfoData,
    setTestiInfoData
} from '../reducers';
import axios from './axios'

export const retrieveBaseInfoDetails = (baseInfoKey,dispatch) => {
    axios({
        method: 'GET',
        url: `/v1/retrieveBaseInfoCtrl/${baseInfoKey}`
    }).then(async (res) => {
        const data = await res?.data?.data;
        dispatch(setBaseInfoData(data));
    })
    .catch(err => {
        const status = err?.response?.data?.status;
        const message = err?.response?.data?.message;
        console.log(status,message);
    })
}

export const retrieveEduInfoDetails = (eduInfoKey,dispatch) => {
    axios({
        method: 'GET',
        url: `/v1/retrieveEduInfoCtrl/${eduInfoKey}`
    }).then(async (res) => {
        const data = await res?.data?.data;
        dispatch(setEduInfoData(data));
    })
    .catch(err => {
        const status = err?.response?.data?.status;
        const message = err?.response?.data?.message;
        console.log(status,message);
    })
}

export const retrieveExpInfoDetails = (expInfoKey,dispatch) => {
    axios({
        method: 'GET',
        url: `/v1/retrieveExpInfoCtrl/${expInfoKey}`
    }).then(async (res) => {
        const data = await res?.data?.data;
        dispatch(setExpInfoData(data));
    })
    .catch(err => {
        const status = err?.response?.data?.status;
        const message = err?.response?.data?.message;
        console.log(status,message);
    })
}

export const retrieveProjInfoDetails = (projInfoKey,dispatch) => {
    axios({
        method: 'GET',
        url: `/v1/retrieveProjectInfoCtrl/${projInfoKey}`
    }).then(async (res) => {
        const data = await res?.data?.data
        dispatch(setProjInfoData(data));
    })
    .catch(err => {
        const status = err?.response?.data?.status;
        const message = err?.response?.data?.message;
        console.log(status,message);
    })
}

export const retrieveSkillInfoDetails = (skillInfoKey,dispatch) => {
    axios({
        method: 'GET',
        url: `/v1/retrieveSkillInfoCtrl/${skillInfoKey}`
    }).then(async (res) => {
        const data = await res?.data?.data
        dispatch(setSkillInfoData(data));
    })
    .catch(err => {
        const status = err?.response?.data?.status;
        const message = err?.response?.data?.message;
        console.log(status,message);
    })
}

export const retrieveAchvmntInfoDetails = (achvmntInfoKey,dispatch) => {
    axios({
        method: 'GET',
        url: `/v1/retrieveAchvmntInfoCtrl/${achvmntInfoKey}`
    }).then(async (res) => {
        const data = await res?.data?.data
        dispatch(setAchvmntInfoData(data));
    })
    .catch(err => {
        const status = err?.response?.data?.status;
        const message = err?.response?.data?.message;
        console.log(status,message);
    })
}

export const retrieveCrtInfoDetails = (crtInfoKey,dispatch) => {
    axios({
        method: 'GET',
        url: `/v1/retrieveCrtificationInfoCtrl/${crtInfoKey}`
    }).then(async (res) => {

        const data = await res?.data?.data
        dispatch(setCrtInfoData(data));
    })
    .catch(err => {
        const status = err?.response?.data?.status;
        const message = err?.response?.data?.message;
        console.log(status,message);
    })
}


export const retrieveIntroInfoDetails = (introInfoKey,dispatch) => {
    axios({
        method: 'GET',
        url: `/v1/retrieveIntroInfoCtrl/${introInfoKey}`
    }).then(async (res) => {
        const data = await res?.data?.data
        dispatch(setIntroInfoData(data));
    })
    .catch(err => {
        const status = err?.response?.data?.status;
        const message = err?.response?.data?.message;
        console.log(status,message);
    })
}

export const retrieveTestiInfoDetails = (testiInfoKey,dispatch) => {
    axios({
        method: 'GET',
        url: `/v1/retrieveTestiInfoCtrl/${testiInfoKey}`
    }).then(async (res) => {
        const data = await res?.data?.data
        dispatch(setTestiInfoData(data));
    })
    .catch(err => {
        const status = err?.response?.data?.status;
        const message = err?.response?.data?.message;
        console.log(status,message);
    })
}

export const retrieveBlogInfoDetails = (blogInfoKey,dispatch) => {
    axios({
        method: 'GET',
        url: `/v1/retrieveBlogInfoCtrl/${blogInfoKey}`
    }).then(async (res) => {
        const data = await res?.data?.data
        dispatch(setBlogInfoData(data));
    })
    .catch(err => {
        const status = err?.response?.data?.status;
        const message = err?.response?.data?.message;
        console.log(status,message);
    })
}


export const retrieveKeyInfoDetails = (keyInfoKey,dispatch) => {
    axios({
        method: 'GET',
        url: `/v1/retrieveKeyInfoCtrl/${keyInfoKey}`
    }).then(async (res) => {
        const data = await res?.data?.data;
        dispatch(setKeyInfoData(data[0]));
    })
    .catch(err => {
        const status = err?.response?.data?.status;
        const message = err?.response?.data?.message;
        console.log(status,message);
    })
}
