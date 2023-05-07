import React from 'react'
import { UseApiContext } from '../../../context/ApiContext'
import ItemDetail from '../../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {

    const {data} = UseApiContext();


return (
    <main>
        {data.map((data) => (
            <ItemDetail data={data} key={data.id}/>
        ))}
    </main>
)
}

export default ItemDetailContainer
