//自定义hooks
import {ref} from 'vue'
import axios from 'axios'
import { type HttpReuslt } from '@/types/httpResult'
export default function(){
    let httpResult = ref<HttpReuslt>()
    async function films() {
        try {
            let result = await axios.get('/api/films')
            httpResult.value = result.data
            console.log(httpResult)
        } catch (error) {
        }
    }
    return  { httpResult, films}

}