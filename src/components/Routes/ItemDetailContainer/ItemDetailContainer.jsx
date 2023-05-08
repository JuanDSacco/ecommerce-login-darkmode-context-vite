import React from 'react'
import { UseApiContext } from '../../../context/ApiContext'
import { useParams } from 'react-router-dom';
import '../../../css/itemDetailContainer.css'

const ItemDetailContainer = () => {

    const {data,mode} = UseApiContext();

    const {id} = useParams()

    const searchForId = data.find(item => item.id === Number(id))

return (
    <>
    {
        mode === false ?
        searchForId && (
            <div className='detailContainer'>
                <h1 className='h1Detail'>{searchForId.title}</h1>
                <img className='imgDetail' src={searchForId.image} alt='imagen del producto'/>
                <h2 className='h2Detail'>Price: ${searchForId.price}</h2>
                <p className='pDetail'>{searchForId.description}</p>
                <div className='divBtnDetail'>
                <button className='btnDetail'>Buy Not Functional</button>
                </div>
            </div>
            )
        :
        searchForId && (
            <div className='detailContainerDark'>
                <h1 className='h1Detail'>{searchForId.title}</h1>
                <img className='imgDetailDark' src={searchForId.image} alt='imagen del producto'/>
                <h2 className='h2Detail'>Price: ${searchForId.price}</h2>
                <p className='pDetail'>{searchForId.description}</p>
                <div className='divBtnDetail'>
                <button className='btnDetailDark'>Buy Not Functional</button>
                </div>
            </div>
            )
    }
    </>
)
}

export default ItemDetailContainer
