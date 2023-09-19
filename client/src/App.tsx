import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import './app.scss'
import Home from './pages/home/Home'
import About from './pages/about/About'

import config from './config'

// apollo client
const client = new ApolloClient({
  uri: `${config.apiUrl}/graphql`,
  cache: new InMemoryCache()
})

function App() {

  return (
    <Router>
      <ApolloProvider client={client}>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </ApolloProvider>
    </Router>
  )
}

export default App
