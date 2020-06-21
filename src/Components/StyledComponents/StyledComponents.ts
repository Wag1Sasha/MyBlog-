import styled from 'styled-components'

export const AppWrapper = styled.div`
  height: auto;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  background: rgb(9, 9, 14);
  background: linear-gradient(
    90deg,
    rgba(9, 9, 14, 1) 0%,
    rgba(77, 112, 148, 1) 12%,
    rgba(66, 66, 73, 1) 26%,
    rgba(5, 28, 32, 1) 49%
  );
`

export const NavBar = styled.div`
  min-height: 15vh;
  height: auto;
  display: flex;
  border-bottom: 3px solid white;
  justify-content: space-around;
  align-items: center;
`
export const LinkWrapper = styled.div`
  color: white;
  outline: none;
  text-decoration: none;
  font-size: 20px;
  padding: 3vh;
`

export const TitleWrapper = styled.div`
  margin: 2vh;
  text-align: center;
  font-size: 40px;
  color: #b5c6d8;
`
export const Container = styled.div`
  min-height: 75vh;
  height: auto;
  text-align: center;
  width: 60%;
  margin: 10px auto;
`
export const AllPostsContainer = styled.div`
  min-height: 75vh;
  height: auto;
  text-align: center;
  width: 60%;
  margin: 10px 5vw;
`

export const PostView = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: none;
  color: white;
`

export const PostBody = styled.div`
  text-align: center;
  color: white;
  font-size: 22px;
`
export const PostDescrView = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  flex: 2;
`
export const ImgContainer = styled.div`
  display:flex;
  flex:3
  width: 300px;
  height: 200px;
  padding: 10px;
`
export const ButtonWrapper = styled.button`
  outline: none;
  color: white;
  font-size: 20px;
  border: none;
  cursor: pointer;
  background: none;
  margin: 10px auto;
  width: 30%;

  :hover {
    border-bottom: 1px solid white;
  }
`

export const PostTitle = styled.div`
  font-size: 32px;
  text-align: center;
  font-weight: 600;
  color: #b5c6d8;
`

export const Footer = styled.div`
  min-height: 12vh;
  height: auto;
  width: 100%;
  border-top: 3px solid white;
`

export const InputTitle = styled.input`
  outline: none;
  color: white;
  border: none;
  border-bottom: 1px solid white;
  padding: 10px;
  font-size: 20px;
  background: none;
  margin: 10px;
  width: 40%;
  ::placeholder {
    color: white;
  }
`

export const TextArea = styled.textarea`
  outline: none;
  color: white;
  margin: 10px;
  width: 100%;
  font-size: 20px;
  height: 65vh;
  background: none;
  border: 1px solid white;
  resize: none;
  ::placeholder {
    color: white;
  }
`

export const FormCreatePost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
  min-height: 80vh;
  margin: auto;
`
