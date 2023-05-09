import React from 'react'
import { UseApiContext } from '../../context/ApiContext'
import '../../css/buttonFixed.css'
import EvFixed from '../EvFixed/EvFixed'

const ButtonFixed = () => {

    const { mode } = UseApiContext()

return (
    <div>
        {
                mode === false ?
            <div className='divBtnFixed'>
            <EvFixed/>
            </div>
            :
            <div className='divBtnFixedDark'>
            <EvFixed/>
            </div>
            }
    </div>
)
}

export default ButtonFixed
