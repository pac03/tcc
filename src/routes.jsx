import {BrowserRouter, Routes, Route,} from 'react-router-dom'

import App from './App'

export default function RouteSistem() {
    return(
    <>
        <Header/> 
            <Routes>

                <Route path='/' element={<App/>}/>
            </Routes>

    </>
    )
}