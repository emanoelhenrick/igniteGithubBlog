import { PostContentView, ViewPostContainer } from "./styles";
import { NavLink } from 'react-router-dom'
import {CaretLeft, LinkSimple, CalendarBlank, GithubLogo, ChatCircle} from 'phosphor-react'

export function PostViewer() {
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

          <a href="">
          <LinkSimple size={16} />
            ver no github
          </a>
        </div>
        <h1>titulo do post</h1>
        <div>
          <span><GithubLogo size={18} weight="fill" />user github</span>
          <span><CalendarBlank size={18} weight="fill" />data publicado</span>
          <span><ChatCircle size={18} weight="fill" />5 comentarios</span>
        </div>
      </header>

      <PostContentView>
    opa
      </PostContentView>
    </ViewPostContainer>
  )
}