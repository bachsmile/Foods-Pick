import React, { Component, Suspense, lazy} from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Loading from '../components/animation/loading';
const HomeIntroduction = lazy(()=> import('../page/homePage/home_intro'))
const HomeFood = lazy(()=> import('../page/homePage/home_food/index'))
const ShopFood = lazy(()=> import('../page/shopFood'))
const LoginPage = lazy(()=> import('./../page/login-page'))
const ShowSection = lazy(()=> import('../components/animation/showSection'))
const ErrorPage = lazy(()=> import('../page/errorPage/error'))
class MenuRouters extends Component {

    render() {
        return (
            <div>
                <Suspense fallback={<Loading/>}>
                    <Switch>
                        <Redirect exact from="/" to="/login" />
                        <Route path="/Home" component={HomeIntroduction} />
                        <Route path="/HomeFood" component={HomeFood} />
                        <Route path="/ShopFood" component={ShopFood} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/show" component={ShowSection} />
                        <Route component={ErrorPage} />
                    </Switch>
                </Suspense>
            </div>
        )
    }
}
export default MenuRouters;
