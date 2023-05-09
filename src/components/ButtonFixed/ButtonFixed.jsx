import React from 'react'
import { UseApiContext } from '../../context/ApiContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpLong } from '@fortawesome/free-solid-svg-icons'
import '../../css/buttonFixed.css'

const ButtonFixed = () => {

    const { mode } = UseApiContext()
    
return (
    <div>
        {
                mode === false ?
            <div className='divBtnFixed'>
            <button className="btnFixed"><FontAwesomeIcon icon={faUpLong}/></button>
            </div>
            :
            <div className='divBtnFixedDark'>
            <button className="btnFixedDark"><FontAwesomeIcon icon={faUpLong}/></button>
            </div>
            }
    </div>
)
}

export default ButtonFixed
