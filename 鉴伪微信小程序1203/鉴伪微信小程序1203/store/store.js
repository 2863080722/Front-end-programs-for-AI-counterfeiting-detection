//创建store实例对象
import { action, observable } from 'mobx-miniprogram'

export const store = observable({
    //数据字段
    numA:1,

    //actions 函数：修改store中数据的值
    updateNum1:action(function(step){
        this.numA=step
    })
})