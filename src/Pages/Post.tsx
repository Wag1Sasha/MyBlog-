import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, TitleWrapper, ImgContainer, PostBody } from '../Components/StyledComponents/StyledComponents'
import { title } from 'process'
import * as _ from 'lodash'

type Post = { title: string; id: number; body: string; comments: Array<Object> }
function Post() {
  let { id } = useParams()
  const customObj: Post = { title: '', id: 0, body: '', comments: [{}] }

  const [singlePost, setSinglePost] = React.useState(customObj)
  const urls: Array<string> = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjEdKReBPH79Ee30OeH_P4UppoiM_9LucZFE3G-TqVqEpl3FCX&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0YenMfqDgvW-iTG2cJTsRdLW1rDduShPXL9oBZESjyq7fOPaM&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTk9bD99zUaKPdgQBaEdjRd5qhYQFaiDmDzhN24Oi-CQZPmvec-&usqp=CAU',
    'https://cdn.pixabay.com/photo/2015/11/07/11/37/seascape-1031335_960_720.jpg',
    'https://lh3.googleusercontent.com/proxy/7XkaQv2XoBMsfPpqpLVQxu6ANk1dGsB_A4-lt2cVE_7OeNKPwIgHOfuSuAUcjaPx1nPDGd6JKvfwxYUfAruxCLTurFJgTRGVYrPXg1inD73AhAX1UuF4AgUpX2lYeUupgpZ2DFJXm9r-x-4QNJwv5vxuQUcJmTD7BQHqfRTBfQ',
  ]

  const rand = Math.floor(Math.random() * urls.length)

  React.useEffect(() => {
    fetch(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`)
      .then((res) => res.json())
      .then((data) => setSinglePost({ ...data }))
  }, [])
  return (
    <Container>
      <TitleWrapper>{singlePost.title}</TitleWrapper>
      <img src={urls[rand]} height='300px' width='500px' />
      <PostBody>{singlePost.body}</PostBody>
    </Container>
  )
}

export default Post
