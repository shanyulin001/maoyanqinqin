/* 
  actions
    * 作用： 创建动作
*/
import {ADD_TODOS,REMOVE} from './actiontype'
import store from 'store'

const action = {
    addTodos (val) {
        const action = {
            type:ADD_TODOS,
            payload:val
        }
        store.dispatch(action)
    }
}