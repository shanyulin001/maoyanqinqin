import React from 'react'
import './index.scss'
import request from 'utils/request'
import { Tabs } from 'antd-mobile';
import { Link } from 'react-router-dom'
class  Listcamp extends React.Component {
    constructor(props) {//rconst直接建立constructor
        super(props)
    
        this.state = {
             tabs:[]
        }
    }
    async componentDidMount () {
        //  发起数据请求，然后将请求的结果赋值 tabs 
        const result = await request({
          url: '/index.php',
          params: {
            r: 'class/category',type: 1
          }
        })
        if( result ) {
          result.data.data.data.map( item => item.title = item.name )
          this.setState({
            tabs:  result.data.data.data
          })
        }
    }
    renderList = lists=>{
        return lists.map(item=>(
            <li key={item.api_cid}>
                 {/* http://localhost:3000/list/23?cid=23&a=1#zhichao  */}
                {/* 路由的动态传参 */}
                <Link
                    to={{
                        pathname: `/list/${ item.api_cid }`,
                        search: `?cid=${ item.api_cid }&a=1`,
                        hash: '#zhichao',
                        state: {
                          msg: 'Hello 山雨'
                        }
                    }}
                >
                    <img src={item.img}/>
                    <span>{item.name}</span>
                </Link>
            </li>
        ))
    }
    renderFloor = floors=>{
        return floors.map((item,index)=>(
            (
              <div key = { index } className="floors">
                  <h3>{ item.name }</h3>
                  <ul>
                  { this.renderList( item.list ) }
                  </ul>
              </div> 
            )
        ))
    }




    renderContent = tab =>
      (<div style={{ 
        height: '100%',
        backgroundColor: '#fff',
        padding:'0.15rem'
        }}>
        {this.renderFloor(tab.floors)}
      </div>);
  
    render() {
        const { tabs } = this.state ;
  
      return (
        <div className="allcenter">
            <div className="list-box">
          <Tabs tabDirection = "vertical" tabBarPosition="left" tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={12} />}>
            {this.renderContent}
          </Tabs>
          </div>
        </div>
      );
 }
}
export default Listcamp
