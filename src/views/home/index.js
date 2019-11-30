import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import './index.scss'
import Tabadress from './tab'
import Nowplay from './now'
import Tomorrowplay from './tomorrow'
export default class Home extends Component {
    render() {
        return (
            <main className="allcenter">
                <Tabadress/>
            
                <Route path = "/home/now" component = { Nowplay }/>
				<Route path = "/home/tomorrow" component = { Tomorrowplay } />
            </main>
        )
    }
}