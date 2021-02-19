import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom';

const Menulink = ({lable, to, activeExact, classStyle})=>{
    return (
        <Route path = {to} exact= {activeExact} children={({match})=>{
            let active = match ? classStyle : '';
            return (
                <li className= {active}>
                    <Link to ={to} className="my-link">
                        {lable}
                    </Link>
                </li>
            )
        }} />
    )
}

export default Menulink