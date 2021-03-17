import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss'
Loading.propTypes = {
    
};
function Loading(props) {
    const [numberLoad, setNumberLoad] = useState(0);
    const inputEl = useRef(null);   
    useEffect(() => {
    let count=0
    const interval = setInterval(() => {
        count++;
        setNumberLoad(count + 1 );
        if (count==145) {
            clearInterval();
            console.log('ok');
        }
    }, 50);
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

export default Loading;