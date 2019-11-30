import React, { Component } from 'react'
import './index.scss'
import Listmodel from './listmodel.js'
import request from 'utils/request'

/* 
  ! 整个列表页面的思维
    ! 将url中数据拿到手，然后在当前组件发起新的数据请求，将请求的结果赋值给当前组件的state,然后渲染页面
*/

export default class Listshop extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             list:[]
        }
    }
    async componentDidMount(){
        const {id} = this.props.match.params
        const result = await request({
            url: '/index.php',
            params: {
              r: 'class/cyajaxsub',
              page: 1,
              cid: id,
              px: 't',
              cac_id: ''
            }
        })
        this.setState({
            list:result.data.data.content
        })
    }
    render() {
        console.log('shuju',this.state)
        return (
            <div className="allcenter">
                <Listmodel {...this.state}/>
            </div>
        )
    }
}
