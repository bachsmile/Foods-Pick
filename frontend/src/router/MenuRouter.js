import React, { Component } from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import ErrorPage from '../page/errorPage/error';
import HomeIntroduction from '../page/homePage/home_intro';
import HomeFood from '../page/homePage/home_food/index';
import ShopFood from '../page/shopFood';
import LoginPage from '../page/login-page';
class MenuRouters extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Redirect exact from="/" to="/login" />
                    <Route path="/Home" component={HomeIntroduction} />
                    <Route path="/HomeFood" component={HomeFood} />
                    <Route path="/ShopFood" component={ShopFood} />
                    <Route path="/login" component={LoginPage} />
                    <Route component={ErrorPage} />
                </Switch>
            </div>
        )
    }
}
export default MenuRouters;
