import { Outlet } from 'react-router-dom'
import { Header } from './styles'
import logoGitHub from '../../assets/logo.svg'

export function DefaultLayout() {
  return (
    <>
      <Header>
        <img src={logoGitHub} />
      </Header>
      
      <Outlet />
    </>
  )
}