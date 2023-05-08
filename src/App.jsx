import './App.css';
import NavBar from './components/NavBar/NavBar';
import AboutDeTodo from './components/Routes/AboutDeTodo/AboutDeTodo';
import Home from './components/Routes/Home/Home';
import ItemDetailContainer from './components/Routes/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/Routes/ItemListContainer/ItemListContainer';
import ApiProvider from './context/ApiContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Routes/Error/Error';

function App() {

  return (
    <>
    <ApiProvider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<ItemListContainer/>}/>
        <Route path='/products/:id' element={<ItemDetailContainer/>}/>
        <Route path='/about-us' element={<AboutDeTodo/>}/>
        <Route path='/error' element={<Error/>}/>
      </Routes>
      </BrowserRouter>
    </ApiProvider>
    </>
  )
}

export default App
