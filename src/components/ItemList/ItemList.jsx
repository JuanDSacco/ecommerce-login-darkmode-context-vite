import '../../css/itemList.css'
import { Link } from 'react-router-dom';
import { UseApiContext } from '../../context/ApiContext';

const ItemList = ({data}) => {

    const {mode} = UseApiContext();

    return(
        <>
            {
                mode === false ? 
            <main className='divContainer'>
                <h1 className='h1Title'>{data.title}</h1>
                <img className="imgProd" src={data.image} alt="imagen del producto"/>
                <h2 className='h2List'>Price ${data.price}</h2>
                <Link to={`/products/${data.id}`}><button className='btnLight'>Ver más</button></Link>
            </main>
        :
            <main className='divContainerDark'>
                <h1 className='h1Title'>{data.title}</h1>
                <img className="imgProdDark" src={data.image} alt="imagen del producto"/>
                <h2 className='h2List'>Price ${data.price}</h2>
                <Link to={`/products/${data.id}`}><button>Ver más</button></Link>
            </main>
            }
        </>
    )
}

export default ItemList;