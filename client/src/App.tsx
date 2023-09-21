import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Routes from './Routes'
import config from './config'

import './app.scss'

// apollo client
const client = new ApolloClient({
  uri: `${config.apiUrl}/graphql`,
  cache: new InMemoryCache()
})

function App() {

  return (
    <Router>
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    </Router>
  )
}

export default App
