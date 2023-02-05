import { PostContainer } from "./styles";
import { useNavigate } from 'react-router-dom'
import { dateFormatter } from "../../../../utils/formatter";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface PostProps {
  postContent: {
    title: string,
    body: string,
    number: string,
    created_at: string
  }
}

export function Post({ postContent }: PostProps) {

  const { title, body, number, created_at } = postContent

  const formatedDate = formatDistanceToNow(new Date(created_at), {
    locale: ptBR,
    addSuffix: true
  })

  const navigate = useNavigate()

  function handleGoToPost() {
    navigate(`/${number}`)
  }

  return (
    <PostContainer
      onClick={handleGoToPost}
    >
      <span>{formatedDate}</span>
      <h1>{title}</h1>
      <p>{body}</p>
    </PostContainer>
  )
}