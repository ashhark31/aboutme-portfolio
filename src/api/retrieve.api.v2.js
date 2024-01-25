import { setUserInfoData } from '../reducers';
import axios from './axios'

export const retrieveUserInfoDetails = (dispatch) => {
    axios({
        method: 'GET',
        url: `/v2/getUserProfileData`
    }).then(async (res) => {
        const data = await res?.data?.data;
        dispatch(setUserInfoData(data));
    })
    .catch(err => {
        const status = err?.response?.data?.status;
        const message = err?.response?.data?.message;
        console.log(status,message);
    })
}