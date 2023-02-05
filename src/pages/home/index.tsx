import { LinkSimple, GithubLogo, Buildings, Users } from "phosphor-react";
import { useContext, useEffect } from "react";
import { PostsContext } from "../../context/postsContext";
import { Post } from "./components/PostComponent";
import { BioContainer, HomeContainer, InfoContainer, LoadingContent, PostsContainer, SearchForm } from "./styles";
import { useForm } from "react-hook-form";

interface searchProps {
  searchValue: string
}

interface PostProps {
  title: string
  body: string
  number: string
  created_at: string
  id: string
}

export function Home() {

  const { register, handleSubmit } = useForm()

  const { userData, issuesData, fetchSearch } = useContext<any>(PostsContext)

  const postList = issuesData.items as PostProps[]

  function fetchWithSearch(data: searchProps) {
    fetchSearch(data)
  }


  {if(postList){
    return (
      <HomeContainer>
      <header>
        <img src={userData.avatar_url} alt="" />
        <BioContainer>
          <h1>{userData.name}</h1>
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noreferrer noopener">
            <LinkSimple size={16} />
            GITHUB
          </a>
          
          <InfoContainer>
            <span><GithubLogo size={18} weight="fill" />{userData.login}</span>
            <span><Buildings size={18} weight="fill" />{userData.location}</span>
            <span><Users size={18} weight="fill" />{userData.followers + ' seguidores'}</span>
          </InfoContainer>
        </BioContainer>
      </header>

      <SearchForm onSubmit={handleSubmit(fetchWithSearch as any)}>
        <div>
          <span>Publicações</span>
          <span>{issuesData.total_count + " publicações"}</span>
        </div>

        <input
          type="text"
          placeholder="Buscar Conteúdo"
          {...register('searchValue')}
        />
      </SearchForm>

      <PostsContainer>

        {postList.map(post => {
          return (
            <Post
              key={post.id}
              postContent={post}
            />
          )
        })}
        
      </PostsContainer>
      </HomeContainer>
    )
  } else {
    return (
      <LoadingContent>Loading...</LoadingContent>
    )

    }
  }
}