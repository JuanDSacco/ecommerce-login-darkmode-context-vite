import React from 'react'
import '../../css/itemDetail.css'
import { UseApiContext } from '../../context/ApiContext'

const ItemDetail = ({data}) => {

    const {mode} = UseApiContext();

return (
    <>
    {
        mode === false ?
    <main className='mainContainer'>
        <div className='divDescrip'>
            <h1 className='h1Title'>{data.title}</h1>
            <h2>Price ${data.price}</h2>
            <h2>Category: {data.category}</h2>
            <h2>Stock: {data.rating.count}</h2>
        </div>
        <div className='divImgDetail'>
            <img className='imgProd' src={data.image} alt='imagen del producto'/>
        </div>
    </main>
    :
    <main className='mainContainerDark'>
        <div className='divDescrip'>
            <h1 className='h1Title'>{data.title}</h1>
            <h2>Price ${data.price}</h2>
            <h2>Category: {data.category}</h2>
            <h2>Stock: {data.rating.count}</h2>
        </div>
        <div className='divImgDetail'>
            <img className='imgProdDark' src={data.image} alt='imagen del producto'/>
        </div>
    </main>
    }
    </>
)
}

export default ItemDetail
