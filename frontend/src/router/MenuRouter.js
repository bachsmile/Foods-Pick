import React, { Suspense, lazy, useEffect, useState} from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import LoadingDefault from '../components/animation/loading/loadingDefault';
import LoginPage from './../page/login-page';
const HomeIntroduction = lazy(()=> {
    return new Promise(resole=> setTimeout(resole,2000)).then(
        ()=> import('../page/homePage/home_intro')
    )
})
const HomeFood = lazy(()=> {
    return new Promise(resole=> setTimeout(resole,2000)).then(
        ()=> import('../page/homePage/home_food')
    )
})
const ShopFood = lazy(()=> {
    return new Promise(resole=> setTimeout(resole,2000)).then(
        ()=> import('../page/shopFood')
    )
})
const ShowSection = lazy(()=> {
    return new Promise(resole=> setTimeout(resole,2000)).then(
        ()=> import('../components/animation/showSection')
    )
})
const ErrorPage = lazy(()=> {
    return new Promise(resole=> setTimeout(resole,2000)).then(
        ()=> import('../page/errorPage')
    )
})
// const ErrorPage = lazy(()=> import('../page/errorPage'))

MenuRouters.propTypes = {
    
};

function MenuRouters(props) {

    return (
        <div>
            <Suspense fallback={<LoadingDefault/>}>
                <Switch>
                    <Redirect exact from="/" to="/login" />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/Home" component={HomeIntroduction} />
                    <Route path="/HomeFood" component={HomeFood} />
                    <Route path="/ShopFood" component={ShopFood} />
                    <Route path="/show" component={ShowSection} />
                    <Route  component={ErrorPage} />
                </Switch>
            </Suspense>
        </div>
    );
}

export default MenuRouters;