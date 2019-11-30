import React from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom'
const Tabnav=props=>{
    const tabnavs=[
        {
            id: 1,
            text: '首页',
            iconName: 'fa-home',
            path: '/home'
          },
          {
            id: 2,
            text: '影院',
            iconName: 'fa-film',
            path: '/cinema'
          },
          {
            id: 3,
            text: '分类',
            iconName: 'fa-bars',
            path: '/classify'
          },
          {
            id: 4,
            text: '购物车',
            iconName: 'fa-cart-plus',
            path: '/car'
          },
          {
            id: 5,
            text: '我的',
            iconName: 'fa-user',
            path: '/mine'
          }
    ]
    const Tabnavapply=()=>{
        return tabnavs.map(item=>(
            <li 
            key={item.id}
            >
                <NavLink
                to={item.path}
                activeClassName="active"
                >
                    <i className={'fa ' + item.iconName }></i>
                    <span>{ item.text }</span>
                </NavLink>
            </li>
        ))
    }
    return(
        <footer>
            <ul>
                { Tabnavapply() }
            </ul>
        </footer>
    )
}
export default Tabnav