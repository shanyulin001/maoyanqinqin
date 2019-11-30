const store ={
    ...require('event').EventEmitter.prototype,//让store拥有on/emit（订阅/发布）
    state:{//存储state
        count:0
    },
    getState(){//获取state
        return this.state
    }
}
export default store