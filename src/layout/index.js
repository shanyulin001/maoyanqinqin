import React, { Component } from 'react'
import Tab from '../components/header'
import Ad from '../components/advertising'
import Tabnav from '../components/navigation'
import './index.scss'
import RouterCamp from 'router'

export default class LayOut extends Component {
    render() {
        return (
            <div className="layouttab">
                <Tab { ...this.props }/>
                <Ad/>
                <RouterCamp/>
                <Tabnav/>
            </div>
        )
    }
}
