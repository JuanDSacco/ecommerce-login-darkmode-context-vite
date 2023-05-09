import { UseApiContext } from "../../../context/ApiContext";
import ItemList from "../../ItemList/ItemList";
import ButtonFixed from "../../ButtonFixed/ButtonFixed";

const ItemListContainer = () => {

    const {data} = UseApiContext();

    return(
        <main id="mainAncaljeFixed">
            <div>
                <ButtonFixed/>
            </div>
            <div>
                {data.map((data) => (
                    <ItemList data={data} key={data.id}/>
                ))}
            </div>
        </main>
    )
}

export default ItemListContainer;