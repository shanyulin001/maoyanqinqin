//内容区域导航栏，tab切换部分
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'

export default class Tabadress extends Component {
    render() {
        return (
            <div className="tabnavarea">
                <ul>
                  <li>
                    <a>
                      <span>杭州</span>
                      <i className="fa fa-caret-down"></i>
                    </a>
                  </li>
                  <li>
                    <NavLink to="/home/now" activeClassName = "active" className="todayplay">今日热映</NavLink>
                  </li>
                  <li><NavLink to="/home/tomorrow" activeClassName = "active" className="tomorrowplay">即将上映</NavLink></li>
                  <li>
                    <i className="fa fa-search"></i>
                  </li>
                </ul>

            </div>
        )
    }
}
