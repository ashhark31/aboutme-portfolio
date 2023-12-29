import {configureStore} from '@reduxjs/toolkit'
import { readApiDataSlice } from './reducers'

export default configureStore({
    reducer: {
        apiData: readApiDataSlice
    }
})