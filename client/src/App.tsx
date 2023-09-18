import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './app.scss'
import Home from './pages/home/Home'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </Router>
  )
}

export default App
