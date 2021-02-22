import React , {Component} from 'react';
import {Link} from "react-router-dom";
import './../../page/shopFood/shopFood.scss';
import imgApis from './../../container/imgApi/imgApi';
import Footer from '../../components/footer/footer';
import HeaderMin from '../../components/header/header_min/headerMin';
class ShopFood extends Component {
    menuTogger;body;sr;
    constructor(props){
        super(props);
        
    }
    componentDidMount= ()=> {
        window.addEventListener('scroll', this.handleScroll);
        this.menuTogger = document.getElementsByClassName('menu-toggle')[0];
        this.body= document.getElementsByClassName('body')[0];
        document.documentElement.scrollTop = 0;
        console.log('====================================');
        console.log(imgApis);
        console.log('====================================');
    }
    
    componentWillUnmount =()=> {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll=(event)=> {
        
        // if(window.scrollY==0){
        //     // console.log("top");
        //     document.getElementsByClassName("home__header")[0].setAttribute("class","home__header home__block");
        // }
        // else{
        //     // console.log("bot");
        //     document.getElementsByClassName("home__header")[0].setAttribute("class","home__header home__fixed");
        // }
    }
    selectElement=(element)=>{
        return document.querySelector(element);
    }
   
    clickToggle=()=>{
        this.body.classList.toggle('open');
        console.log(this.body)
    }
    render(){
        return(
            <div className="body">
               <HeaderMin/>
                <div>
                    Shop food page
                </div>
                {/* culinary end  */}
                <Footer/>
            </div>
        
        )
    }

}

export default ShopFood;

