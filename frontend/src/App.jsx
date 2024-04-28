import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import CreateItem from './pages/CreateItem';
import ShowItem from './pages/ShowItems';
import EditItem from './pages/EditItem';
import DeleteItem from './pages/DeleteItem';
import AboutPage from './components/home/AboutPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/items/create' element={<CreateItem />} />
      <Route path='items/details/:id' element={<ShowItem />} />
      <Route path='/items/edit/:id' element={<EditItem />} />
      <Route path='/items/delete/:id' element={<DeleteItem />} />
      <Route path='/about' element={<AboutPage />} />
    </Routes>
  )
}

export default App