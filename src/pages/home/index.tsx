import { LinkSimple, GithubLogo, Buildings, Users } from "phosphor-react";
import { dateFormatter } from "../../utils/formatter";
import { Post } from "./components/PostComponent";
import { BioContainer, HomeContainer, InfoContainer, PostsContainer, SearchForm } from "./styles";

export function Home() {

  const postContent = [
    {
      title: 'Titulo da primeira postagem de teste',
      content: 'Algumas consideracoes a fazer agora que o projeto ja esta encaminhado, falta pouco para terminar o front e comecar a fazer as requisicoes necessarias para o funcionamento da aplicacao requisicoes necessarias para o funcionamento da aplicacao requisicoes necessarias para o funcionamento da aplicacao',
      date: dateFormatter.format(new Date()) ,
      postId: 'wuio5'
    },
    {
      title: 'Titulo da segunda postagem de teste',
      content: 'Algumas consideracoes a fazer agora que o projeto ja esta encaminhado, falta pouco para terminar o front e comecar a fazer as requisicoes necessarias para o funcionamento da aplicacao requisicoes necessarias para o funcionamento da aplicacao requisicoes necessarias para o funcionamento da aplicacao',
      date: dateFormatter.format(new Date()) ,
      postId: 'wuio5as'
    },
    {
      title: 'Titulo da Terceira postagem de teste',
      content: 'Algumas consideracoes a fazer agora que o projeto ja esta encaminhado, falta pouco para terminar o front e comecar a fazer as requisicoes necessarias para o funcionamento da aplicacao requisicoes necessarias para o funcionamento da aplicacao requisicoes necessarias para o funcionamento da aplicacao',
      date: dateFormatter.format(new Date()) ,
      postId: 'wuisao5'
    }
  ]


  return (
    <HomeContainer>
      <header>
        <img src="https://avatars.githubusercontent.com/u/110049976?v=4" alt="" />
        <BioContainer>
          <h1>Emanoel</h1>
          <p>lorem ipsum</p>
          <a href="#">
            <LinkSimple size={16} />
            GITHUB
          </a>
          <InfoContainer>
            <span><GithubLogo size={18} weight="fill" /> github</span>
            <span><Buildings size={18} weight="fill" />empresa</span>
            <span><Users size={18} weight="fill" />32 seguidores</span>
          </InfoContainer>
        </BioContainer>
      </header>

      <SearchForm>
        <div>
          <span>Publicações</span>
          <span>6 publicações</span>
        </div>

        <input type="text" placeholder="Buscar Conteúdo" />
      </SearchForm>

      <PostsContainer>

        {postContent.map(post => {
          return (
            <Post
              postContent={post}
            />
          )
        })}
        
      </PostsContainer>

    </HomeContainer>

  )
}