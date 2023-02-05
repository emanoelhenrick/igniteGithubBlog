import styled from "styled-components";

export const ViewPostContainer = styled.div`
  max-width: 864px;
  width: 100%;
  margin: auto;
  color: white;
  margin-bottom: 150px;

  header {
    display: flex;
    padding: 2rem 2.5rem;
    border-radius: 10px;
    background: #0b1b2b;
    margin-top: -80px;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    margin-bottom: 40px;
    flex-direction: column;

    a {
      text-decoration: none;
      color: inherit;
    }

    h1 {
      font-size: 1.5rem;
      color: #E7EDF4;
      line-height: 31.2px;
      margin-bottom: 1rem;
    }

    div:first-child {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;

      a {
        color: #3294F8;
        text-transform: uppercase;
        font-size: 0.75rem;
        font-weight: bold;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
      }
    }

    div:last-child {
      width: 60%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #7B96B2;
      font-size: 1rem;

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;

        svg {
          color: #3A536B;
        }
      }
    }
  }
`

export const PostContentView = styled.article`
  
  padding: 0 32px;
`