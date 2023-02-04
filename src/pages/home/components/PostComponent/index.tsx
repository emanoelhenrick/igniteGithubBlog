import { PostContainer } from "../../styles";
import { useNavigate } from 'react-router-dom'

interface PostProps {
  postContent: {
    title: string,
    content: string,
    date: string,
    postId: string
  }
}

export function Post({ postContent }: PostProps) {

  const { title, content, date, postId } = postContent

  const navigate = useNavigate()

  function handleGoToPost() {
    navigate(`/${postId}`)
  }

  return (
    <PostContainer
      onClick={handleGoToPost}
    >
      <span>{date}</span>
      <h1>{title}</h1>
      <p>{content}</p>
    </PostContainer>
  )
}