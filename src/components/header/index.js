import React from 'react';
import './index.scss'

const Tab=props=>(
    <div className="header">
        <i className="fa fa-arrow-left" onClick={()=>{props.history.goBack()}}></i>
        <h3>猫眼电影</h3>
    </div>
)
export default Tab
