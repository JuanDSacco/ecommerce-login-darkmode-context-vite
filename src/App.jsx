import './App.css';
import NavBar from './components/NavBar/NavBar';
import AboutDeTodo from './components/Routes/AboutDeTodo/AboutDeTodo';
import Home from './components/Routes/Home/Home';
import ItemDetailContainer from './components/Routes/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/Routes/ItemListContainer/ItemListContainer';
import ApiProvider from './context/ApiContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
      </Routes>
      </BrowserRouter>
    </ApiProvider>
    </>
  )
}

export default App
