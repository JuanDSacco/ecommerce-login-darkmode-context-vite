import React, {useContext, useState, useEffect} from 'react';

const ApiContext = React.createContext([]);

export const UseApiContext = () => useContext(ApiContext);

const ApiProvider = ({children}) => {

    // Hooks
    const [data, setData] = useState([]);
    const [mode, setMode] = useState(false);

    // Extracción de API
    const API = 'https://fakestoreapi.com/products';
    useEffect(() => {
        fetch(API)
        .then((res) => res.json())
        .then((response) => setData(response))
    },[])



    const contextValues = {
        data: data,
        mode:mode,
        setMode:setMode
    }

    return(
        <ApiContext.Provider value={contextValues}>
            {children}
        </ApiContext.Provider>
    )

}

export default ApiProvider;