import { UseApiContext } from "../../../context/ApiContext";
import ItemList from "../../ItemList/ItemList";

const ItemListContainer = () => {

    const {data} = UseApiContext();

    return(
        <main>
            {data.map((data) => (
                <ItemList data={data} key={data.id}/>
            ))}
        </main>
    )
}

export default ItemListContainer;