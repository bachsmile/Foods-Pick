import React, {Component} from 'react'
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import ErrorPage from '../page/errorPage/error';
import HomeIntroduction from '../page/homePage/home_intro/homeIntroduction';
class MenuRouters extends Component {
    render(){
        return (
            <div>
                <Switch>
                    <Route path="/"  component={HomeIntroduction} exact/>
                    {/* <Route path="/home"  component={HomePage}/> */}
                    <Route component={ErrorPage} />
                </Switch>
            </div>
        )
    }
}
export default MenuRouters;
