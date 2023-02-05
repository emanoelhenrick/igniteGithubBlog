import { BrowserRouter } from 'react-router-dom'
import { PostsProvider } from './context/postsContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'

function App() {

  return (
    <BrowserRouter>
      <PostsProvider>
        <Router />
        <GlobalStyle />
      </PostsProvider>
    </BrowserRouter>
  )
}

export default App
