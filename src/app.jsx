import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home.jsx'

const contentNode=document.getElementById('container')

function RoutedApp(){
    return(
        <div className={'m-container'}>
        <Router>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
            </Routes>
        </Router>
        </div>
    )
}

ReactDom.render(<RoutedApp/>, contentNode)

if (module.hot){
    module.accept
}

