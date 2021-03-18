import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss'
LoadingDefault.propTypes = {
    
};
function LoadingDefault(props) {
    return (
        <div className="panel-loader">
            <div className= 'loader'>
                {[...Array(20)].map((x, i) =>
                     <span key={i}></span>
                )}
                <div className="rocket" ></div>
            </div>
        </div>
    );
}

export default LoadingDefault;