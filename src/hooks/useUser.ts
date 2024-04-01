//自定义hooks
import {ref} from 'vue'
import axios from 'axios'
import { type HttpReuslt } from '@/types/httpResult'
export default function(){
    let httpResult = ref<HttpReuslt>()
    async function users() {
        //此处开始异步执行
        try {
            let result = await axios.get('/api/users')  //es8 异步编程新特性
            httpResult.value = result.data //此处等待异步完成
            console.log(httpResult)
        } catch (error) {
        }
    }
    return  { httpResult, users}

}