/* 
  * 用来创建一个路由的组件
*/
import React from 'react'
import {
    Redirect,
    Switch,
    Route
} from 'react-router-dom'
import Home from 'views/home'
import Cinema from 'views/cinema'
import Mine from 'views/mine'
import Listcamp from 'views/classify'
import Listshop from 'views/list'
import Details from 'views/detail'
import Cart from 'views/car'
import Buyshop from 'views/buy'
import Notfound from 'views/notfound'//404页面


const RouterCamp = props=>(
     /* 这里面放置的是路由配置组件 */
    <Switch>
        {/* 重定向 */}
        <Redirect from = '/' to="/home/now" exact/>
        <Route path = '/home' component ={Home}/>
        <Route path = '/cinema' component ={Cinema}/>
        <Route path = '/classify' component ={Listcamp}/>
        <Route path = '/mine' component ={Mine}/>
        <Route path = '/car' component ={Cart}/>
        <Route path = '/buy' component ={Buyshop}/>
        <Route path = '/list/:id' component ={Listshop}/>
        <Route path = '/detail/:id' component ={Details}/>
         {/* 错误路由匹配  - 放在最下面*/}
        <Route component = {Notfound}/>
    </Switch>
)
export default RouterCamp