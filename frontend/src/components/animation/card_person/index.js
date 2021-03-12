import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss'

CardPerson.propTypes = {
    
};
CardPerson.defaultProp = {
    
};

function CardPerson(props){
    let scrollJS ={
        top:0,
        start:0,
        step:0,
        end:0
    };
    useEffect(() => {
        let item= document.getElementsByClassName('panel-person__panel')[0];
        let tagItem=Array.from(document.getElementsByClassName('panel-person__item'));
        
        scrollJS={
            top:getOffset(item).top -300,
            start:getOffset(item).top  -300,
            step:30,
            end: getOffset(item).top+item.scrollHeight
        }
        window.addEventListener("scroll", ()=>handleScroll(tagItem));
      return () => {
      };
    }, []);
    const handleScroll=(tagItem)=> {
        scrollShowCardPerson(tagItem)
    }
    const scrollShowCardPerson =(tagItem)=>{
        let st=window.pageYOffset;
        if(Math.abs(scrollJS.top - st) <= scrollJS.step)
              return console.log(st);;
        if(st > scrollJS.top && st < scrollJS.end){
            if (st > scrollJS.start ){
                // downscroll code
                {tagItem.map((val, index) => {
                    clearShow(val);
                    val.classList.add('toDown')
                })}
            } 
            else {
                // upscroll code;
                {tagItem.map((val, index) => {
                    clearShow(val);
                    val.classList.add('toUp')
                })}
            }
            scrollJS.start = st;
        }
        else{
            {tagItem.map((val, index) => {
                clearShow(val);
            })}
        }
        
    }
    const getOffset = (el) => {
        const rect = el.getBoundingClientRect();
        return {
          left: rect.left + window.scrollX,
          top: rect.top + window.scrollY
        };
      }
    const clearShow=(val)=>{
        val.classList.remove('toUp');
        val.classList.remove('toDown');
    }
    return (
        <div className="panel-person">
            <div className="panel-person__panel">
                <span className='panel-person__item'><img src="https://parkofideas.com/foodz/demo/wp-content/uploads/revslider/promo1/demo-0111777841.jpg" alt=""/></span>
                <span className='panel-person__item'><img src="https://parkofideas.com/foodz/demo/wp-content/uploads/revslider/promo1/demo-0147626965.png" alt=""/></span>
                <span className='panel-person__item'><img src="https://parkofideas.com/foodz/demo/wp-content/uploads/revslider/promo1/demo-0111010712.jpg" alt=""/></span>
            </div>
        </div>
    );
}

export default CardPerson;