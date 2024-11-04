import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../src/pages/Home'
import Contact from '../src/pages/Contact'
import Product from '../src/pages/Product'
import WebLayout from '../src/layout/WebLayout'
// import {} from 'react'
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<WebLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/product' element={<Product />} />
                        <Route path='/contact' element={<Contact />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App