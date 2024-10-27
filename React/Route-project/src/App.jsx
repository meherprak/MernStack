import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
export const App = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Products' element={<Products/>}/>
                <Route path='/Contact' element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    </>

  )
}
export default App;
