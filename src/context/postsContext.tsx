import { createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { ReactNode } from 'react'

interface PostsProviderProps {
  children: ReactNode
}

interface searchProps {
  searchValue: string
}


export const PostsContext = createContext({})

export function PostsProvider({ children }: PostsProviderProps) {

  const [userData, setUserData] = useState('')
  const [issuesData, setIssuesData] = useState({})

  async function fetchUserData() {
    const response = await api.get('/users/emanoelhenrick')
    setUserData(response.data)
  }

  function fetchRepoIssues() {
    api.get('/search/issues?q=repo:emanoelhenrick/igniteGithubBlog')
      .then((response) => setIssuesData(response.data))
    
  }

  function fetchSearch(data: searchProps) {
    api.get(`/search/issues?q=${data.searchValue + '%20'}repo:emanoelhenrick/igniteGithubBlog`)
      .then((response) => setIssuesData(response.data))
  }

  useEffect(() => {
    fetchUserData()
    fetchRepoIssues()
  }, [])

  return (
    <PostsContext.Provider
      value={{
        userData,
        issuesData,
        fetchSearch
      }}
    >
    {children}
    </PostsContext.Provider>
  )
}

