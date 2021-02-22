import React, {Component} from 'react';
import HeaderHomeFood from '../../../components/header/headerHomeFood';
import '../../../page/homePage/home_intro/homeIntroduction.scss';
class HomeIntroduction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active : 0
        }
    }
    componentDidMount(){
     
    }
    componentDidUpdate() { 
    }
    clickPrev=()=>{
        alert('ok')
    }
    clickNext=()=>{
        let actives= this.state.active
        var slides = document.getElementsByClassName("item");
        slides[actives%slides.length].classList.toggle("active");
        actives++;
        this.setState({
            active:actives
        })
        var stt = actives%slides.length;
        slides[stt].classList.toggle("active");      
    }
    clickPrev=()=>{
        let actives= this.state.active +2
        var slides = document.getElementsByClassName("item");
        slides[actives%slides.length].classList.toggle("active");
        actives++;
        this.setState({
            active:actives+2
        })
        var stt = actives%slides.length;
        slides[stt].classList.toggle("active");      
    }
    render(){
        let imgBG=["./assets/img/bg1.jpg","./assets/img/bg2.jpg","./assets/img/bg3.jpg"]
        return(
            <div className="page">
                <HeaderHomeFood/>
                <div id="slider">
                    <div className="item active">
                        <img src={imgBG[0]} />
                    </div>
                    <div className="item">
                        <img src={imgBG[1]} />
                    </div>
                    <div className="item">
                        <img src={imgBG[2]} />
                    </div>
                    <div>
                        <a type='button' onClick={this.clickPrev} ><i className="btnPrev fas fa-angle-left "></i></a>
                        <a type='button' onClick={this.clickNext}><i className="btnNext fas fa-angle-right"></i></a>
                     </div>
                </div>
            </div>
        )
    }
}
export default HomeIntroduction