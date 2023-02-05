import { PostContentView, ViewPostContainer } from "./styles";
import { NavLink, useParams } from 'react-router-dom'
import {CaretLeft, LinkSimple, CalendarBlank, GithubLogo, ChatCircle} from 'phosphor-react'
import { api } from "../../lib/axios";
import { useContext, useEffect, useState } from "react";
import { dateFormatter } from "../../utils/formatter";
import ReactMarkdown from 'react-markdown'
import gfm from "remark-gfm";
import { PostsContext } from "../../context/postsContext";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface PostProps {
  title: string
  body: string
  number: string
  created_at: string
  id: string
  html_url: string
  user: { login: string }
  comments: string
}

interface searchProps {
  searchValue: string
}

interface  ContextProps {
  userData: object
  issuesData: {
    items: PostProps[]
  }
  fetchSearch: (data: searchProps) => void
  reloadDataFromCache: () => void
}

export function PostViewer() {

  function fetchPost() {
    api.get(`https://api.github.com/repos/emanoelhenrick/igniteGithubBlog/issues/${postNumber}`)
      .then((response) => setPost(response.data))
  }

  const { issuesData, reloadDataFromCache } = useContext<ContextProps>(PostsContext as any)
  const { postNumber } = useParams()

  const [post, setPost] = useState<PostProps>({} as PostProps)

  

  useEffect(() => {
    if(issuesData.items){
      const postFind = issuesData.items.find((post) => post.number == postNumber)
      setPost(postFind as PostProps)
    } else {
      fetchPost()
    }
  }, [])

  

  
  
  {if(post.body){
    return (
      <ViewPostContainer>
        <header>
          <div>
            <NavLink
              to="/"
              title="voltar"
              onClick={reloadDataFromCache}
            >
              <CaretLeft size={16} weight="bold" />
              Voltar
            </NavLink>

            <a href={post.html_url}>
            <LinkSimple size={16} />
              ver no github
            </a>
          </div>
          <h1>{post.title}</h1>
          <div>
            <span><GithubLogo size={18} weight="fill" /><a href="#">{post.user.login}</a></span>
            <span><CalendarBlank size={18} weight="fill" />{formatDistanceToNow(new Date(post.created_at), {locale: ptBR, addSuffix: true})}</span>
            <span><ChatCircle size={18} weight="fill" />{post.comments + ' comentários'}</span>
          </div>
        </header>

      <PostContentView>
        <ReactMarkdown remarkPlugins={[gfm]}>
          {post.body}
        </ReactMarkdown>
      </PostContentView>
    </ViewPostContainer>
    )
  } else {
    return <div></div>
  }
}
}