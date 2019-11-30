const events=require('events')
const store=events.EventEmitter.prototype

// 事件的声明-发布
store.on('bb',function(){
    console.log('触发')
})
// 事件触发-订阅
store.emit('bb')