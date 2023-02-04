import styled from "styled-components";
import cover from '../../assets/cover.svg'

export const Header = styled.header`
  height: 18.5rem;
  background-image: url(${cover});
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 4rem;

  img {
    display: block;
    margin: auto;
  }
`