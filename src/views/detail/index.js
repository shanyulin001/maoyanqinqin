import React, { Component } from 'react'
import './index.scss'
import { Stepper,Button } from 'antd-mobile'
export default class Details extends Component {
    constructor(props) {
        super(props)
    
        this.state = {//步进器默认数量
             num:1
        }
    }
    onChange=val=>{//步进器函数，数据绑定
        this.setState({
            num:val
        });
    }
    
  goShopCar = () => {//跳转到购物车
    this.props.history.replace('/car')
  }
  goPay=()=>{//跳转到付款页面
      this.props.history.replace('/buy')
  }
  getShopCar=()=>{
    return localStorage.getItem('shopcar')
  }
  setShopCar=arr=>{
      localStorage.setItem('shopcar',JSON.stringify(arr))
  }
 addShopCar=()=>{//点击加入购物车
    
     const {id,img,price,quan_jine,sall,comment,name}=this.props.location.state
     const {num}=this.state
     let data=this.getShopCar()
     if(data){//有无数据  null == false    [] == true 
        data=JSON.parse(data)
        if(data.length == 0){
            this.getShopCar([{
                id,img,price,quan_jine,sall,comment,name
             }])
        }else{//有真是的数据
            const f=data.some(item=>item.id=id)//判断有无这个商品数据
            if(f){//有这个商品，数量相加
                data.map(item=>item.num+=num)
            }else{//没有这个商品信息
               data.push({id,img,price,quan_jine,sall,comment,name})
            }
            this.setShopCar( data )
        }
     }else{//没有数据
         this.setShopCar([{
            id,img,price,quan_jine,sall,comment,name
         }])
     }
 }
    render() {
        const {num}=this.state
        const {id,img,price,quan_jine,sall,comment,name}=this.props.location.state
        return (
            <div className="allcenter">
                <div className="detaildiv">
                    <div className="detailimg">
                        <img src={img}/>
                    </div>
                    <div className="detailinfo">
                        <h3>
                            <span className="tmbiao">天猫</span>
                            {name}
                        </h3>
                        <p className="detailquan">
                            <span  className="detaildivafter">券后价 </span>
                            <span className="detaildivnum"> &nbsp;<i className="fa fa-rmb"></i> {price}</span>
                        </p>
                        {/* <p className="detailprice">原价为{quan_jine}</p> */}
                        <div className="detaildiv"><Stepper
                            style={{ width: '100%', minWidth: '100px' }}
                            showNumber
                            max={1000}
                            min={1}
                            value={ num }
                              onChange={this.onChange}
                        /></div>
                        <div className="detailbtn">
                            <Button type = "ghost" onClick = { this.goShopCar } > 购物车 </Button>
                            <Button type = "primary" onClick = { this.addShopCar }> 加入购物车 </Button>
                            <Button type = "warning" onClick = { this.goPay } > 立即购买 </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
