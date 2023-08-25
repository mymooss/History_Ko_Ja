import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BookCover = styled.div`
    width: 100vw;
    height: 100vh;
    //background-color: #F5F5F5; 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    position: relative;
    overflow: hidden;
    transition: transform 0.5s ease-in-out;
    transform-style: preserve-3d;

    &:hover {
        transform: scale(1.02);
    }
`;

const ImageContainer = styled.div`
    overflow: hidden;
    position: relative;

    &:hover img {
        transform: scale(1.1);
    }
`;

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease-in-out;
`;

const BookTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    transition: color 0.3s, text-shadow 0.3s;

    &:hover {
        color: gold;
        text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
    }
`;

const NavigateButton = styled.button`
    margin-top: 20px;
    width: 350px;
    padding: 10px 15px;
    background-color: #CF5B87;
    color: white;
    border: none;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    font-size: 24px;  // 글자 크기를 키움
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);  // 그림자 추가

    &:hover {
        background-color: #FA9CC0;
        transform: translateY(-3px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    }

    &:active {
        transform: translateY(1px);
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    }
`;

const Main = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/historyy');
    }

    return (
        <BookCover>
            <ImageContainer>
                <StyledImage src='/t.jpg' alt='Korean flag' />
            </ImageContainer>
            <BookTitle onClick={handleNavigate}>한국과 일본의 역사 바로 알기</BookTitle>
            <NavigateButton onClick={handleNavigate}>알아보기</NavigateButton>
        </BookCover>
    );
}

export default Main;

