import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpLong } from '@fortawesome/free-solid-svg-icons'
import { UseApiContext } from '../../context/ApiContext';
import '../../css/buttonFixed.css'


const EvFixed = () => {

    const {mode} = UseApiContext();

    const handleClick = () => {
        const mainILC = document.getElementById('mainAncaljeFixed');
        mainILC.scrollIntoView({behavior: 'smooth'})
    }

return (
    <div>
        {
            mode === false ?
            <button onClick={handleClick} className="btnFixed"><FontAwesomeIcon icon={faUpLong}/></button>
            :
            <button onClick={handleClick} className="btnFixedDark"><FontAwesomeIcon icon={faUpLong}/></button>

        }
    </div>
)
}

export default EvFixed
