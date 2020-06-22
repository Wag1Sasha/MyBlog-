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
  const urls: Array<string> = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjEdKReBPH79Ee30OeH_P4UppoiM_9LucZFE3G-TqVqEpl3FCX&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0YenMfqDgvW-iTG2cJTsRdLW1rDduShPXL9oBZESjyq7fOPaM&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTk9bD99zUaKPdgQBaEdjRd5qhYQFaiDmDzhN24Oi-CQZPmvec-&usqp=CAU',
    'https://cdn.pixabay.com/photo/2015/11/07/11/37/seascape-1031335_960_720.jpg',
    'https://lh3.googleusercontent.com/proxy/7XkaQv2XoBMsfPpqpLVQxu6ANk1dGsB_A4-lt2cVE_7OeNKPwIgHOfuSuAUcjaPx1nPDGd6JKvfwxYUfAruxCLTurFJgTRGVYrPXg1inD73AhAX1UuF4AgUpX2lYeUupgpZ2DFJXm9r-x-4QNJwv5vxuQUcJmTD7BQHqfRTBfQ',
  ]

  const rand = Math.floor(Math.random() * urls.length)

  return (
    <AllPostsContainer>
      {posts.map((post) => (
        <PostView key={post.id}>
          <ImgContainer>
            <img src={urls[rand]} alt='' height='200px' width='300px' />
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
