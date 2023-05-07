import React from 'react'
import { UseApiContext } from '../../../context/ApiContext';
import '../../../css/home.css'

const Home = () => {

    const {mode} = UseApiContext();

return (
    <main className='mainHome'>
        {
            mode === false ?
            <h1 className='h1Home'>Bienvenidos a Tienda online DeTodo</h1>
            :
            <h1 className='h1HomeDark'>Bienvenidos a Tienda online DeTodo</h1>
        }
    </main>
)
}

export default Home;
