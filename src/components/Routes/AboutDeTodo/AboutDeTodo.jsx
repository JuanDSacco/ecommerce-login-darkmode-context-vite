import React from 'react'
import { UseApiContext } from '../../../context/ApiContext'
import '../../../css/aboutDeTodo.css'

const AboutDeTodo = () => {

    const {mode} = UseApiContext();

return (
    <div>
        {
            mode === false ?
            <div className='divAbout'>
                <h1 className='h1About'>About us Tienda DeTodo</h1>
                <p className='pAbout'>Aprovecho este espacio para comentar características de la App. <br></br>
                    Fue iniciada con Vite, utilicé Context para proveer la API utilizando Fetch y el Hook <br></br>
                    para setear el DarkMode. El siguiente paso es utilizar otro Hook en el Context <br></br>
                    para crear un Login y vincularlo a través de Firebase.<br></br>
                    Por último, añadiré un cuarto Hook para darle vida al Ecommerce<br></br>
                    y poder generar órdenes de compra, que se alamacenarán en Firebase.
                    </p>
            </div>
            :
            <div className='divAboutDark'>
                <h1 className='h1About'>About us Tienda DeTodo</h1>
                <p className='pAbout'>Aprovecho este espacio para comentar características de la App. <br></br>
                    Fue iniciada con Vite, utilicé Context para proveer la API utilizando Fetch y el Hook <br></br>
                    para setear el DarkMode. El siguiente paso es crear otro Hook en el Context <br></br>
                    para crear un Login y vincularlo a través de Firebase.<br></br>
                    Por último, añadiré un cuarto Hook para darle vida al Ecommerce<br></br>
                    y poder generar órdenes de compra, que se alamacenarán en Firebase.
                    </p>
            </div>
        }
    </div>
)
}

export default AboutDeTodo
