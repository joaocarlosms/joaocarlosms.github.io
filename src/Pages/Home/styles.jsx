import styled from 'styled-components';

export const LoginContainer = styled.div `
    position: fixed;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    padding: 70px 30px 44px;
    background: #fff;
    border-radius: 1.25rem;
    text-align: center;

    img {
        width: 120px;
        aspect-ratio: 1/1;
        object-fit: cover;
        border-radius: 50%;
        margin-bottom: 20px;
    }

    h2 {
        font-size: 36px;
        margin: 0 0 25px;
    }

    h3 {
        color: rgba(0, 0, 0, 0.40);
        margin: 0 0 6px;
        font-weight: 500;
        font-size: 1rem;
    }
    
    a {
        color: #303f9f;
        font-size: 1rem;
        text-align: left;
        text-decoration: none;
        transition: 0.3s;

        &:hover {
            color: 1976d2;
        }   
    }

    @media(width >= 450px) {
        width: 380px;
    }

    @media(width >= 1200px) {
        width: 25%;
    }
`
export const LoginForm = styled.form `
    display: grid;
    gap: 30px;
    place-items: center;
    width: 100%;
    margin: 0;
`
export const LoginInput = styled.input `
    height: 56px;
    outline: none;
    padding: 0;
    font-family: inherit;
    width: 240px;
    background: transparent;
    border: 2px solid transparent;
    border-bottom: 2px rgba(0, 0, 0, 0.5);
    font-size: 10px;
    padding: 0;
    text-align: center;
    transition: all 0.3s;

    &:hover {
        border-bottom: 2px solid #303f9f;
    }

    &:focus {
        border-bottom: 2px solid #1976d2;
    }
`
export const LoginButton = styled.button `
    height: 56px;
    outline: none;
    padding: 0;
    font-family: inherit;
    cursor: pointer;
    width: 100%;
    height: 56px;
    background: #303f9f;
    color: #f9f9f9;
    border: 0;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 2px;
    transition: all 0.3s;

    &:hover {
        background-color: #1976d2;
    }
`
