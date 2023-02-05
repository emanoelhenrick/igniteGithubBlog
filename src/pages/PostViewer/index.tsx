import { PostContentView, ViewPostContainer } from "./styles";
import { NavLink, useParams } from 'react-router-dom'
import {CaretLeft, LinkSimple, CalendarBlank, GithubLogo, ChatCircle} from 'phosphor-react'
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";
import { dateFormatter } from "../../utils/formatter";
import ReactMarkdown from 'react-markdown'
import gfm from "remark-gfm";

export function PostViewer() {

  const { postNumber } = useParams()

  const [post, setPost] = useState<any>({})

  useEffect(() => {
    fetchPost()
  }, [])

  function fetchPost() {
    api.get(`https://api.github.com/repos/emanoelhenrick/igniteGithubBlog/issues/${postNumber}`)
      .then((response) => setPost(response.data))
    
  }
  
  {if(post.body){
    return (
      <ViewPostContainer>
        <header>
          <div>
            <NavLink
              to="/"
              title="voltar"
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
            <span><CalendarBlank size={18} weight="fill" />{dateFormatter.format(new Date(post.created_at))}</span>
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