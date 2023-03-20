import styled from 'styled-components'

export const Body = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .title{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2.625rem;
        margin: 1rem 0 0;
        padding: 0.75rem 2rem;
    }

    h2{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 1rem;
        color: #000;
        font-weight: 600;
    }

    .Input {
        width: 80vw;
        display: flex;
        margin: 5px 0;
        justify-content: space-between;
        align-items: center;
        height: 3.5rem;
        border-radius: 2px;
        border: solid 1px #b8b8b8;
    }


    .Input > input{
        height: 1.7rem;
        margin-left: 40px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 1rem;
        border: none;
    }

    .Input > input:focus{
        outline: none;
    }

    .entrar{
        width: 80vw;
        height: 2.625rem;
        margin: 5px 0;
        cursor: pointer;
        padding: 0.75rem 1rem;
        border-radius: 2px;
        background-color: #e8222e;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 1rem;
        font-weight: 600;
        border: none;
    }

    .Input > button {
        background: none;
        border: none;
    }

    .Input > button > img {
        width: 22px;
        margin-right: 20px;
    }

    span{
        height: 2.625rem;
        margin: 15px 0;
        cursor: pointer;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 1rem;
        font-weight: 600;
    }
`
export const ImgLogo = styled.img`
    width: 6.5rem;
  height: 3.625rem;
  margin: 4.25rem 8rem 1rem;
  object-fit: contain;
`