import React  from 'react';
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import {Signup1, Login1, Menu} from './components';

const App = ()=>{
    return(
     <>
        <BrowserRouter>
        <Menu />
            <Routes>
                <Route path='/' element={'App'} />
                <Route path='/signin' element={<Login1/>} />
                <Route path='/signup' element={<Signup1 />} /> 
            </Routes>
        </BrowserRouter>
     </>
    )   
}

export default App;