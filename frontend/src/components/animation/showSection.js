import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { gsap } from "gsap";
import CardPerson from './card_person';
ShowSection.propTypes = {
    
};

function ShowSection(props) {
    const ref = useRef(null);
    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
          document.getElementsByClassName("logo-main")[0],
          {
            opacity: 0,
            x: -100
          },
          {
            opacity: 1,
            x: 100,
            duration:2,
            ease: "power1.out"
          },
        );
      }, []);
    
    return (
        <div className='containerFull'>
            {/* <div className="logo-main">
                <img src='https://bizweb.dktcdn.net/100/363/523/articles/cach-lam-banh-mi-pate.jpg?v=1568882137687' id="workout-logo" alt="workout" />
           </div> */}
                <CardPerson/>
        </div>
    );
}

export default ShowSection;