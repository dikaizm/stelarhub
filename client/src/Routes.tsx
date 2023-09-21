import { Routes as ListRoutes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Stories from './pages/stories/Stories'

const Routes = () => {
    return (
        <ListRoutes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/stories' element={<Stories />}></Route>
        </ListRoutes>
    )
}

export default Routes