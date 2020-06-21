import React, { SyntheticEvent, useCallback } from 'react'
import { TitleWrapper, InputTitle, TextArea, FormCreatePost } from '../Components/StyledComponents/StyledComponents'
import Button from '../Components/Button'
import { nanoid } from 'nanoid'

type IPost = {
  title: string
  body: string
}

function CreatePost() {
  const [form, setForm] = React.useState({
    title: '',
    body: '',
    id: '',
  })

  const onPost = () => {
    // const post:IPost = {}
    fetch('https://simple-blog-api.crew.red/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: form.title, body: form.body }),
    })
  }

  // function newPost(data) {
  //
  // }
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, title: e.target.value })
    console.log(form)
  }

  const onChangeBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({ ...form, body: e.target.value })
    console.log(form)
  }

  return (
    <>
      <TitleWrapper>
        <h1>New Post</h1>
      </TitleWrapper>
      <FormCreatePost>
        <InputTitle placeholder='Title' value={form.title} onChange={onChangeTitle} name='title' type='text' />
        <TextArea placeholder='type text....' onChange={onChangeBody} value={form.body} name='body' />
        <Button name='Create Post' onClick={onPost} />
      </FormCreatePost>
    </>
  )
}

export default CreatePost
