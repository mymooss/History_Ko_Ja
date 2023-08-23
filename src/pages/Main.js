import React from "react";
import styled from "styled-components";
import "../App.css";
import { useNavigate } from "react-router-dom";

const leatherTextureURL = "/leather2.jpg";

const BookCover = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #8B4513; 
    background-image: url(${props => props.$bgImage});
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: 'Arial', sans-serif;
    position: relative;
    overflow: hidden;
    transition: transform 0.5s ease-in-out;
    transform-style: preserve-3d;
    
    &:before {
        content: "";
        position: absolute;
        top: 10px;
        left: 10px;
        right: 10px;
        bottom: 10px;
        border: 5px solid gold;
        z-index: -1;
    }

    &:hover {
        transform: scale(1.02) rotateX(5deg) rotateY(5deg);
    }
`;

const BookTitle = styled.div`
    font-family: Hangeuljaemin4-Regular;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const NavigateButton = styled.button`
    margin-top: 20px;
    padding: 10px 15px;
    background-color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #ddd;
    }
`;

const Main = () => {
    const navigate = useNavigate();  // 이름 변경: history 대신 navigate

    const handleNavigate = () => {
        navigate('/historyy');  // 수정: navigate 함수 사용
    }

    return (
        <BookCover $bgImage={leatherTextureURL}>
            <img style={{width: '40vw', height: '20vh'}} src='/t.jpg' alt='Korean flag' />
            <br />
            <BookTitle onClick={handleNavigate}>한국과 일본의 역사 바로 알기</BookTitle>
            <NavigateButton onClick={handleNavigate}>알아보기</NavigateButton>
        </BookCover>
    );
}

export default Main;
