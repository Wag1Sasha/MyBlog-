import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import {
  AppWrapper,
  Container,
  Footer,
  PostView,
  PostTitle,
  NavBar,
  LinkWrapper,
} from './Components/StyledComponents/StyledComponents'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import CreatePost from './Pages/CreatePost'
import AllPosts from './Pages/AllPosts'
import StartPage from './Pages/StartPage'
import Post from './Pages/Post'
function App() {
  return (
    <AppWrapper>
      <Router>
        <NavBar>
          <Link to='/'>
            <LinkWrapper>Home</LinkWrapper>
          </Link>

          <Link to='/CreatePost'>
            <LinkWrapper>Create Post</LinkWrapper>
          </Link>
          <Link to='/AllPosts'>
            <LinkWrapper>All Posts</LinkWrapper>
          </Link>
        </NavBar>

        <Switch>
          <Container>
            <Route exact path='/' component={StartPage} />
            <Route path='/AllPosts' component={AllPosts} />
            <Route path='/CreatePost' component={CreatePost} />
            <Route path='/Posts/:id' component={Post} />
          </Container>
        </Switch>
        <Footer />
      </Router>
    </AppWrapper>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
