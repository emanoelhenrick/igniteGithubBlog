import styled from "styled-components";

export const PostContainer = styled.div`
  background: #112131;
  height: 260px;
  padding: 32px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  outline: 2px solid transparent;
  cursor: pointer;
  transition: outline 100ms;

  &:hover {
    outline: 2px solid #3A536B;
  }
  

  span {
    position: absolute;
    right: 32px;
    top: 37px;
    font-size: 0.875rem;
    color: #7B96B2;
  }

  h1 {
    font-size: 1.25rem;
    line-height: 2rem;
    color: #E7EDF4;

    display: block; 
    display: -webkit-box;
    max-width: 70%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    font-size: 1rem;
    color: #AFC2D4;
    line-height: 25.6px;

    display: block; 
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`