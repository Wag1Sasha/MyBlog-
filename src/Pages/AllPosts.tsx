import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import {
  AppWrapper,
  AllPostsContainer,
  Footer,
  PostView,
  PostTitle,
  ImgContainer,
  PostDescrView,
} from '../Components/StyledComponents/StyledComponents'
import Button from '../Components/Button'
import { Link } from 'react-router-dom'

type Props = {
  posts: Array<{ title: string; id: number; body: string }>
}
type Post = { title: string; id: number; body: string }
type Posts = Array<Post>

function AllPosts() {
  const array: Posts = []
  const [posts, setPosts] = React.useState(array)

  React.useEffect(() => {
    fetch('https://simple-blog-api.crew.red/posts')
      .then((res) => res.json())
      .then((data) => setPosts([...data]))
  }, [])

  const deletePost = (id: number) => {
    fetch(`https://simple-blog-api.crew.red/posts/${id}`, {
      method: 'DELETE',
    })

    setPosts([...posts.filter((post) => post.id !== id)])
  }
  console.log(posts)
  return (
    <AllPostsContainer>
      {posts.map((post) => (
        <PostView key={post.id}>
          <ImgContainer>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7NK6PLmzBHZIJNNswBgJJFITvPZzUq8zzQ2vhm3mJEYRq8tvF&usqp=CAU'
              alt=''
              height='200px'
              width='300px'
            />
          </ImgContainer>
          <PostDescrView>
            <Link to={`/Posts/${post.id}`}>
              <PostTitle>{post.title}</PostTitle>
            </Link>
            <Button
              onClick={() => {
                deletePost(post.id)
              }}
              name='delete'
            />
          </PostDescrView>
        </PostView>
      ))}
    </AllPostsContainer>
  )
}
export default AllPosts
