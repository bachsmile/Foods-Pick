import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss'
LoadingNumber.propTypes = {
    
};
function LoadingNumber(props) {
    const [numberLoad, setNumberLoad] = useState(0);
    const inputEl = useRef(null);   
    useEffect(() => {
    let count=0
    const interval = setInterval(() => {
        count =count+1 ;
        setNumberLoad(count);
        if (count==145) {
            clearInterval();
            console.log('ok');
        }
        }, 60);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className={numberLoad <100? "panel-loader":  (numberLoad >140? "loader-hides":"loader-hide" )}>
            <div className= 'loader'>
                {[...Array(20)].map((x, i) =>
                     <span key={i}></span>
                )}
                <div className="loader-number">{numberLoad<100?numberLoad:100}%</div>
                <div className="rocket" ></div>
            </div>
        </div>
    );
}

export default LoadingNumber;