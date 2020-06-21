import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, TitleWrapper, ImgContainer, PostBody } from '../Components/StyledComponents/StyledComponents'
import { title } from 'process'
import * as _ from 'lodash'

type Post = { title: string; id: number; body: string; comments: Array<Object> }
function Post() {
  let { id } = useParams()
  const customObj: Post = { title: '', id: 1, body: '', comments: [{}] }

  const [singlePost, setSinglePost] = React.useState(customObj)

  React.useEffect(() => {
    fetch(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`)
      .then((res) => res.json())
      .then((data) => setSinglePost({ ...data }))
  }, [])
  console.log(singlePost)
  return (
    <Container>
      <TitleWrapper>{singlePost.title}</TitleWrapper>
      <img
        src='https://vsellis.com/wp-content/uploads/2014/01/clouds-dawn-dramatic-1024x576.jpg'
        height='300px'
        width='500px'
      />
      <PostBody>{singlePost.body}</PostBody>
    </Container>
  )
}

export default Post
