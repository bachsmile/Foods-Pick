import React, {Component} from 'react'
import {  Route,Switch, Redirect } from "react-router-dom";
import ErrorPage from '../page/errorPage/error';
import HomeIntroduction from '../page/homePage/home_intro/homeIntroduction';
import ImgApi from '../container/imgApi/imgApi';
import HomeFood from '../page/homePage/home_food/homeFood';
import ShopFood from '../page/shopFood/shopFood';
class MenuRouters extends Component {
    render(){
        return (
            <div>
                <Switch>
                    <Redirect exact from="/" to="/Home" />
                    <Route path="/Home"  component={HomeIntroduction}/>
                    <Route path="/HomeFood"  component={HomeFood}/>
                    <Route path="/ShopFood"  component={ShopFood}/>
                    <Route path="/imgApi"  component={ImgApi}/>
                    <Route component={ErrorPage} />
                </Switch>
            </div>
        )
    }
}
export default MenuRouters;
