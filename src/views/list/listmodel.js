import React from 'react'
import './index.scss'
import {Link} from 'react-router-dom'

const Listmodel=props=>{
    const renderItem=()=>{
        return props.list.map( item => (
            <li key={item.id}>
                <Link 
                to={{
                    pathname:`/detail/${item.id}`,
                    state:{
                        id: item.id,
                        img: item.pic,
                        price: item.jiage,
                        quan_jine: item.quan_jine,
                        sall: item.xiaoliang,
                        comment: item.comment,
                        name: item.d_title
                    }
                }}
                >
               <div className="shoppic">
                   <img src={item.pic}/>
               </div>
               <div className="shopinfo">
                   {/* 右侧第一行标题部分 */}
                   <h3> 
                       <span className="tm">天猫</span>
                        <span className="shoptitle">{item.d_title}</span>
                   </h3>
                    <p className="afterpiece">券后 <span> &nbsp;<i className="fa fa-rmb"></i>{item.jiage}</span></p>
                    <p className="quannum">券{item.quan_jine}元</p>
                    <p className="sallnum">已售{item.xiaoliang} | 评论{item.comment}</p>
               </div>
               </Link>
            </li>
        ))
    }
    return (
        <ul className="listul">
            { renderItem() }
        </ul>
    )
}

export default Listmodel
